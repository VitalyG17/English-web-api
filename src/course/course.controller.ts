import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post} from '@nestjs/common';
import {CourseService} from './course.service';
import {CreateCourseDto} from './dto/create-course.dto';
import {UpdateCourseDto} from './dto/update-course.dto';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post('create')
  create(@Body() dto: CreateCourseDto) {
    return this.courseService.createCourse(dto);
  }

  @Get('getAll')
  getAll() {
    return this.courseService.getAllCourses();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.courseService.getCourseById(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateCourseDto) {
    return this.courseService.updateCourse(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.courseService.deleteCourse(id);
  }
}
