import {
  Controller,
  Body,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {CourseTestsService} from './course-tests.service';
import {JwtAuthGuard} from '../auth/guards/jwt-auth.guard';
import {FileInterceptor} from '@nestjs/platform-express';
import {courseTestImageStorage} from './utils/multer.config';
import {CreateCourseTestsDto} from './dto/create-course-tests.dto';
import {UpdateCourseTestsDto} from './dto/update-course-tests.dto';

@Controller('course-tests')
export class CourseTestsController {
  constructor(private readonly courseTestsService: CourseTestsService) {}

  @Get('getAll')
  async getAll() {
    return this.courseTestsService.getAllCoursesTests();
  }

  @UseGuards(JwtAuthGuard)
  @Get('by-course/:courseId')
  async getTestsByCourse(@Param('courseId', ParseIntPipe) courseId: number, @Req() req: Express.Request) {
    const user = req.user as {id: number};
    return this.courseTestsService.getTestsByCourseWithProgress(courseId, user.id);
  }

  @Post('create')
  @UseInterceptors(FileInterceptor('image', {storage: courseTestImageStorage}))
  async createCourse(@Body() dto: CreateCourseTestsDto, @UploadedFile() file?: Express.Multer.File) {
    return this.courseTestsService.createCourseTests(dto, file?.filename);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('image', {storage: courseTestImageStorage}))
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCourseTestsDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.courseTestsService.updateCourseTests(id, dto, file?.filename);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.courseTestsService.deleteCourseTests(id);
  }
}
