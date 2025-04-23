import {Injectable, NotFoundException} from '@nestjs/common';
import {UpdateCourseDto} from './dto/update-course.dto';
import {CreateCourseDto} from './dto/create-course.dto';
import {PrismaService} from '../prisma.service';

@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) {}

  async createCourse(dto: CreateCourseDto) {
    return this.prisma.course.create({data: dto});
  }

  async getAllCourses() {
    return this.prisma.course.findMany();
  }

  async getCourseById(id: number) {
    const course = await this.prisma.course.findUnique({where: {id}});
    if (!course) throw new NotFoundException('Курс не найден');
    return course;
  }

  async updateCourse(id: number, dto: UpdateCourseDto) {
    return this.prisma.course.update({
      where: {id},
      data: dto,
    });
  }

  async deleteCourse(id: number) {
    return this.prisma.course.delete({
      where: {id},
    });
  }
}
