import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import {JwtAuthGuard} from '../auth/guards/jwt-auth.guard';
import {TaskService} from './task.service';
import {CreateTaskDto} from './dto/create-task.dto';
import {UpdateTaskDto} from './dto/update-task.dto';
import {audioTaskStorage} from './utils/multer.config';
import {FileInterceptor} from '@nestjs/platform-express';

@UseGuards(JwtAuthGuard)
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('create/:testId')
  @UseInterceptors(FileInterceptor('audioFile', {storage: audioTaskStorage}))
  async create(
    @Param('testId', ParseIntPipe) testId: number,
    @Body() createTaskDto: CreateTaskDto,
    @UploadedFile() audioFile?: Express.Multer.File,
  ) {
    return this.taskService.create(testId, createTaskDto, audioFile?.filename);
  }

  @Get('by-test/:testId')
  findAllByTestId(@Param('testId', ParseIntPipe) testId: number) {
    return this.taskService.findAllByTestId(testId);
  }

  @Get(':id')
  findByTaskId(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskDto: UpdateTaskDto,
    @UploadedFile() audioFile?: Express.Multer.File,
  ) {
    return this.taskService.update(id, updateTaskDto, audioFile?.filename);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.delete(id);
  }
}
