import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateAchievementDto} from './dto/create-achievement.dto';
import {UpdateAchievementDto} from './dto/update-achievement.dto';
import {join} from 'path';
import * as fs from 'node:fs';
import {PrismaService} from '../prisma.service';

@Injectable()
export class AchievementService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateAchievementDto, filename?: string) {
    return this.prisma.achievement.create({
      data: {
        ...dto,
        iconUrl: filename || dto.iconUrl,
      },
    });
  }

  async getUserAchievements(userId: number) {
    return this.prisma.userAchievement.findMany({
      where: {userId},
      include: {
        achievement: true,
      },
    });
  }

  async getAll() {
    return this.prisma.achievement.findMany();
  }

  async getById(id: number) {
    const achievement = await this.prisma.achievement.findUnique({
      where: {id},
    });
    if (!achievement) {
      throw new NotFoundException(`Достижение не найдено`);
    }
    return achievement;
  }

  async update(id: number, dto: UpdateAchievementDto, filename?: string) {
    const existing = await this.prisma.achievement.findUnique({where: {id}});
    if (!existing) throw new NotFoundException('Достижение не найдено');

    if (filename && existing.iconUrl) {
      const oldPath = join(process.cwd(), 'uploads', 'achievements', existing.iconUrl);
      try {
        await fs.promises.unlink(oldPath);
      } catch (e) {
        console.warn('Не удалось удалить старую иконку достижения:', e.message);
      }
    }

    return this.prisma.achievement.update({
      where: {id},
      data: {
        ...dto,
        iconUrl: filename || existing.iconUrl,
      },
    });
  }

  async delete(id: number): Promise<{message: string}> {
    const achievement = await this.prisma.achievement.findUnique({
      where: {id},
    });
    if (!achievement) {
      throw new NotFoundException('Достижение не найдено');
    }

    await this.prisma.user.delete({where: {id}});
    return {message: 'Достижение успешно удалено'};
  }
}
