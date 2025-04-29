import {Module} from '@nestjs/common';
import {PrismaService} from '../prisma.service';
import {CourseTestsController} from './course-tests.controller';
import {CourseTestsService} from './course-tests.service';

@Module({
  controllers: [CourseTestsController],
  providers: [CourseTestsService, PrismaService],
})
export class CourseTestsModule {}
