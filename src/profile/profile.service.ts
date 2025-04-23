import {Injectable, NotFoundException} from '@nestjs/common';
import {PrismaService} from '../prisma.service';
import {join} from 'path';
import {unlink} from 'fs/promises';
import {ProfileDto} from './dto/profile.dto';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async getProfile(userId: number): Promise<ProfileDto> {
    const user = await this.prisma.user.findUnique({
      where: {id: userId},
      select: {
        id: true,
        name: true,
        surname: true,
        email: true,
        avatarUrl: true,
        birthDate: true,
        phoneNumber: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      throw new NotFoundException('Пользователь не найден');
    }
    return user;
  }

  async deleteProfile(userId: number): Promise<{message: string}> {
    const user = await this.prisma.user.findUnique({where: {id: userId}});
    if (!user) {
      throw new NotFoundException('Пользователь не найден');
    }

    await this.prisma.user.delete({where: {id: userId}});
    return {message: 'Аккаунт успешно удален'};
  }

  async updateAvatar(userId: number, filename: string) {
    const user = await this.prisma.user.findUnique({
      where: {id: userId},
      select: {avatarUrl: true},
    });

    if (!user) {
      throw new NotFoundException('Пользователь не найден');
    }

    if (user?.avatarUrl) {
      const oldPath = join(__dirname, '..', '..', 'uploads', user.avatarUrl);
      try {
        await unlink(oldPath);
      } catch (err) {
        console.warn('Не удалось удалить старую аватарку:', err.message);
      }
    }

    const updated = await this.prisma.user.update({
      where: {id: userId},
      data: {avatarUrl: filename},
    });

    return {
      message: 'Аватарка обновлена',
      avatarUrl: updated.avatarUrl,
    };
  }
}
