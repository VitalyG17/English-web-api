import {Injectable, NotFoundException} from '@nestjs/common';
import {PrismaService} from '../prisma.service';
import {CreateTaskDto} from './dto/create-task.dto';
import {UpdateTaskDto} from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  async create(testId: number, dto: CreateTaskDto) {
    const test = await this.prisma.test.findUnique({where: {id: testId}});
    if (!test) {
      throw new NotFoundException('Тест не найден');
    }

    return this.prisma.task.create({
      data: {
        ...dto,
        testId,
        errorCount: dto.errorCount ?? 0,
      },
    });
  }

  async findOne(id: number) {
    const task = await this.prisma.task.findUnique({where: {id}});
    if (!task) throw new NotFoundException('Тест не найден');
    return task;
  }

  async findAllByTestId(testId: number) {
    const test = await this.prisma.test.findUnique({
      where: {id: testId},
    });
    if (!test) {
      throw new NotFoundException('Тест не найден');
    }

    return this.prisma.task.findMany({
      where: {testId},
    });
  }

  async update(id: number, dto: UpdateTaskDto) {
    await this.findOne(id);
    return this.prisma.task.update({
      where: {id},
      data: {
        ...dto,
      },
    });
  }

  async delete(id: number) {
    try {
      return await this.prisma.task.delete({where: {id}});
    } catch (error) {
      throw new NotFoundException('Тест не найден');
    }
  }
}
