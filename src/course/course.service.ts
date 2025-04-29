import {Injectable, NotFoundException} from '@nestjs/common';
import {UpdateCourseDto} from './dto/update-course.dto';
import {CreateCourseDto} from './dto/create-course.dto';
import {PrismaService} from '../prisma.service';
import {join} from 'path';
import * as fs from 'fs/promises';

@Injectable()
export class CourseService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllCourses() {
    return this.prisma.course.findMany();
  }

  async getCoursesWithProgress(userId: number) {
    const courses = await this.prisma.course.findMany({
      include: {
        tests: {
          include: {
            progress: {
              where: {
                userId: userId,
              },
            },
          },
        },
      },
    });

    return courses.map((course) => {
      return {
        ...course,
        isStarted: course.tests.some((test) => test.progress.length > 0),
        isCompleted:
          course.tests.length > 0 && course.tests.every((test) => test.progress.some((progress) => progress.completed)),
      };
    });
  }

  async createCourse(dto: CreateCourseDto, filename?: string) {
    return this.prisma.course.create({
      data: {
        ...dto,
        imageUrl: filename || null,
      },
    });
  }

  async updateCourse(id: number, dto: UpdateCourseDto, filename?: string) {
    const existing = await this.prisma.course.findUnique({where: {id}});
    if (!existing) throw new NotFoundException('Курс не найден');

    if (filename && existing.imageUrl) {
      const oldPath = join(__dirname, '..', '..', 'uploads', 'courses', existing.imageUrl);
      try {
        await fs.unlink(oldPath);
      } catch (e) {
        console.warn('Не удалось удалить старое изображение курса:', e.message);
      }
    }

    return this.prisma.course.update({
      where: {id},
      data: {
        ...dto,
        imageUrl: filename || existing.imageUrl,
      },
    });
  }

  async getCourseById(id: number) {
    const course = await this.prisma.course.findUnique({where: {id}});
    if (!course) throw new NotFoundException('Курс не найден');
    return course;
  }

  async deleteCourse(id: number) {
    return this.prisma.course.delete({
      where: {id},
    });
  }
}
