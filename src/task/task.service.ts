import {Injectable, NotFoundException} from '@nestjs/common';
import {PrismaService} from '../prisma.service';
import {CreateTaskDto} from './dto/create-task.dto';
import {UpdateTaskDto} from './dto/update-task.dto';
import {join} from 'path';
import {unlink} from 'fs/promises';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  async create(testId: number, dto: CreateTaskDto, audioFilename?: string) {
    const test = await this.prisma.test.findUnique({where: {id: testId}});
    if (!test) {
      throw new NotFoundException('Задание не найдено');
    }
    const audioSrc = audioFilename ? `/uploads/audio-tasks/${audioFilename}` : null;

    return this.prisma.task.create({
      data: {
        ...dto,
        testId,
        question: dto.question ?? [],
        options: dto.options ?? [],
        errorCount: dto.errorCount ?? 0,
        audioSrc,
      },
    });
  }

  async findOne(id: number) {
    const task = await this.prisma.task.findUnique({where: {id}});
    if (!task) throw new NotFoundException('Задание не найдено');
    return task;
  }

  async findAllByTestId(testId: number) {
    const test = await this.prisma.test.findUnique({
      where: {id: testId},
    });
    if (!test) {
      throw new NotFoundException('Задание не найдено');
    }

    return this.prisma.task.findMany({
      where: {testId},
    });
  }

  async update(id: number, dto: UpdateTaskDto, audioFilename?: string) {
    const existing = await this.prisma.task.findUnique({where: {id}});
    if (!existing) {
      throw new NotFoundException('Задание не найдено');
    }

    if (audioFilename && existing.audioSrc) {
      const oldPath = join(
        process.cwd(),
        'uploads',
        'audio-tasks',
        existing.audioSrc.split('/uploads/audio-tasks/')[1],
      );
      try {
        await unlink(oldPath);
      } catch (e) {
        console.warn('Не удалось удалить старый аудиофайл:', e.message);
      }
    }

    return this.prisma.task.update({
      where: {id},
      data: {
        ...dto,
        question: dto.question ?? existing.question,
        options: dto.options ?? existing.options,
        errorCount: dto.errorCount ?? existing.errorCount,
        audioSrc: audioFilename ? `/Uploads/audio-tasks/${audioFilename}` : existing.audioSrc,
      },
    });
  }

  async delete(id: number) {
    const task = await this.prisma.task.findUnique({where: {id}});
    if (!task) {
      throw new NotFoundException('Задание не найдено');
    }

    if (task.audioSrc) {
      try {
        await unlink(join(process.cwd(), 'uploads', 'audio-tasks', task.audioSrc.split('/Uploads/audio-tasks/')[1]));
      } catch (error) {
        console.error(`Ошибка удаления файла: ${error.message}`);
      }
    }

    return this.prisma.task.delete({where: {id}});
  }
}
