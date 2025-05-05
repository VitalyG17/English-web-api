import {Injectable, UnauthorizedException} from '@nestjs/common';
import {PrismaService} from '../prisma.service';
import {JwtService} from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import {RegisterDto} from './dto/register.dto';
import {LoginDto} from './dto/login.dto';
import {AuthResponseDto} from './dto/auth-response.dto';
import {AchievementService} from '../achievement/achievement.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly achievementService: AchievementService,
  ) {}

  async register(data: RegisterDto) {
    const userExists = await this.prisma.user.findUnique({
      where: {email: data.email},
    });

    if (userExists) throw new Error('Пользователь уже существует');

    await this.prisma.user.create({
      data: {
        name: data.name,
        surname: data.surname,
        birthDate: new Date(data.birthDate),
        phoneNumber: data.phoneNumber,
        email: data.email,
        password: await bcrypt.hash(data.password, 10),
      },
    });

    return {message: 'Регистрация успешна'};
  }

  async login(data: LoginDto): Promise<AuthResponseDto> {
    const user = await this.prisma.user.findUnique({
      where: {email: data.email},
    });

    if (!user) throw new UnauthorizedException('Пользователь не найден');

    if (!(await bcrypt.compare(data.password, user.password))) {
      throw new UnauthorizedException('Неверный пароль');
    }

    const tokens = await this.generateTokens(user.id, user.email);
    await this.updateRefreshToken(user.id, tokens.refreshToken);
    await this.achievementService.checkAndAwardAchievements(user.id);

    return tokens;
  }

  async logout(userId: number) {
    await this.prisma.user.update({
      where: {id: userId},
      data: {hashedRefreshToken: null},
    });

    return {message: 'Успешно вышли из системы'};
  }

  async refreshTokens(userId: number, email: string): Promise<AuthResponseDto> {
    const tokens = await this.generateTokens(userId, email);
    await this.updateRefreshToken(userId, tokens.refreshToken);
    return tokens;
  }

  private async generateTokens(userId: number, email: string): Promise<AuthResponseDto> {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync({id: userId, email}, {secret: process.env.JWT_SECRET, expiresIn: '120m'}),
      this.jwtService.signAsync({id: userId, email}, {secret: process.env.JWT_REFRESH_SECRET, expiresIn: '7d'}),
    ]);

    return {accessToken, refreshToken};
  }

  private async updateRefreshToken(userId: number, refreshToken: string) {
    const hashed = await bcrypt.hash(refreshToken, 10);
    await this.prisma.user.update({
      where: {id: userId},
      data: {hashedRefreshToken: hashed},
    });
  }
}
