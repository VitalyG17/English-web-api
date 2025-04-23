import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {CourseService} from './course.service';
import {CreateCourseDto} from './dto/create-course.dto';
import {UpdateCourseDto} from './dto/update-course.dto';
import {FileInterceptor} from '@nestjs/platform-express';
import {courseImageStorage} from './utils/multer.config';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get('getAll')
  async getAll() {
    return this.courseService.getAllCourses();
  }

  @Post('create')
  @UseInterceptors(FileInterceptor('image', {storage: courseImageStorage}))
  async createCourse(@Body() dto: CreateCourseDto, @UploadedFile() file?: Express.Multer.File) {
    return this.courseService.createCourse(dto, file?.filename);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('image', {storage: courseImageStorage}))
  async updateCourse(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCourseDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.courseService.updateCourse(id, dto, file?.filename);
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.courseService.getCourseById(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.courseService.deleteCourse(id);
  }
}
