import {Injectable, NotFoundException} from '@nestjs/common';
import {PrismaService} from '../prisma.service';
import {CreateCourseTestsDto} from './dto/create-course-tests.dto';
import {join} from 'path';
import fs from 'fs/promises';
import {UpdateCourseTestsDto} from './dto/update-course-tests.dto';

@Injectable()
export class CourseTestsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllCoursesTests() {
    return this.prisma.test.findMany();
  }

  async getTestsByCourseWithProgress(courseId: number, userId: number) {
    const tests = await this.prisma.test.findMany({
      where: {
        courseId: courseId,
      },
      include: {
        progress: {
          where: {
            userId: userId,
          },
        },
      },
    });

    return tests.map((test) => {
      return {
        ...test,
        isStarted: test.progress.length > 0,
        isCompleted: test.progress.some((p) => p.completed === true),
      };
    });
  }

  async createCourseTests(dto: CreateCourseTestsDto, filename?: string) {
    return this.prisma.test.create({
      data: {
        ...dto,
        imageUrl: filename || null,
      },
    });
  }

  async updateCourseTests(id: number, dto: UpdateCourseTestsDto, filename?: string) {
    const existing = await this.prisma.test.findUnique({where: {id}});
    if (!existing) throw new NotFoundException('Тест не найден');

    if (filename && existing.imageUrl) {
      const oldPath = join(__dirname, '..', '..', 'uploads', 'courses-tests', existing.imageUrl);
      try {
        await fs.unlink(oldPath);
      } catch (e) {
        console.warn('Не удалось удалить старое изображение теста:', e.message);
      }
    }

    return this.prisma.test.update({
      where: {id},
      data: {
        ...dto,
        imageUrl: filename || existing.imageUrl,
      },
    });
  }

  async deleteCourseTests(id: number) {
    return this.prisma.test.delete({
      where: {id},
    });
  }
}
