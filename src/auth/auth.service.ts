import {Injectable, UnauthorizedException} from '@nestjs/common';
import {PrismaService} from '../prisma.service';
import {JwtService} from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import {RegisterDto} from './dto/register.dto';
import {LoginDto} from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
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

  async login(data: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: {email: data.email},
    });

    if (!user) throw new UnauthorizedException('Пользователь не найден');

    if (!(await bcrypt.compare(data.password, user.password))) {
      throw new UnauthorizedException('Неверный пароль');
    }

    const token = await this.jwtService.signAsync({
      id: user.id,
      email: user.email,
    });

    return {token};
  }
}
