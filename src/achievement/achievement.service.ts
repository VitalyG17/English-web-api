import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateAchievementDto} from './dto/create-achievement.dto';
import {UpdateAchievementDto} from './dto/update-achievement.dto';
import {join} from 'path';
import * as fs from 'node:fs';
import {PrismaService} from '../prisma.service';
import {$Enums} from '../../generated/prisma';
import AchievementType = $Enums.AchievementType;

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

  /**
   * Проверяет достижения пользователя и выдает новые, если условия для их получения выполнены
   * @param userId id пользователя
   * @returns {Promise<void>}
   */
  async checkAndAwardAchievements(userId: number): Promise<void> {
    const user = await this.prisma.user.findUnique({
      where: {id: userId},
      include: {
        dailyStats: true, // Статистика активности пользователя
        wordStats: true, // Статистика изучения слов
        testProgress: true, // Статистика прохождения тестов
        userAchievement: {
          // Уже полученные достижения
          select: {achievementId: true},
        },
      },
    });

    if (!user) throw new NotFoundException('Пользователь не найден');

    const achievedIds = user.userAchievement.map((ua) => ua.achievementId);

    for (const achievement of await this.prisma.achievement.findMany()) {
      if (achievedIds.includes(achievement.id)) {
        continue;
      }
      if (this.checkCondition(user, achievement)) {
        await this.prisma.userAchievement.create({
          data: {
            userId: user.id,
            achievementId: achievement.id,
          },
        });
        console.log(`Пользователь ${user.id} получил достижение ${achievement.title}`);
      }
    }
  }

  /**
   * Словарь функций-проверок для разных типов достижений
   * @type {Record<AchievementType, (user: any, conditionValue?: number) => boolean>}
   */
  private achievementCheckers: Record<AchievementType, (user: any, conditionValue?: number) => boolean> = {
    /**
     * Проверка: загружена ли аватарка
     * @param user объект пользователя
     * @returns {boolean}
     */
    AVATAR_UPLOADED: (user): boolean => !!user.avatarUrl,

    /**
     * Проверка: достигнуто ли заданное количество активных дней
     * @param user объект пользователя
     * @param value минимальное количество активных дней
     * @returns {boolean}
     */
    DAYS_ACTIVE: (user, value = 0): boolean => {
      const activeDays = user.dailyStats.filter((day) => day.isActive).length;
      return activeDays >= value;
    },

    /**
     * Проверка: изучено ли нужное количество слов
     * @param user объект пользователя
     * @param value минимальное количество слов
     * @returns {boolean}
     */
    WORDS_LEARNED: (user, value = 0): boolean => {
      return user.wordStats.length >= value;
    },

    /**
     * Проверка: пройдено ли заданное количество тестов
     * @param user объект пользователя
     * @param value минимальное количество тестов
     * @returns {boolean}
     */
    TESTS_COMPLETED: (user, value = 0): boolean => {
      const completedTests = user.testProgress.filter((test) => test.completed).length;
      return completedTests >= value;
    },

    /**
     * Проверка для регистрации: достижение дается автоматически при регистрации
     * @returns {boolean}
     */
    REGISTRATION: (): boolean => true,
  };

  /**
   * Проверяет, выполняет ли пользователь условие для конкретного достижения
   * @param user объект пользователя
   * @param achievement объект достижения
   * @returns {boolean} true, если условие выполнено
   */
  private checkCondition(user: any, achievement: any): boolean {
    const checker = this.achievementCheckers[achievement.type];
    if (!checker) return false;

    return checker(user, achievement.conditionValue ?? undefined);
  }
}
