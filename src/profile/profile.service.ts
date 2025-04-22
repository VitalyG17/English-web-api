import {Injectable} from '@nestjs/common';
import {PrismaService} from '../prisma.service';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async getProfile(userId: number) {
    return this.prisma.user.findUnique({
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
  }

  async deleteProfile(userId: number) {
    await this.prisma.user.delete({
      where: {
        id: userId,
      },
    });
    return {message: 'Аккаунт успешно удален'};
  }
}
