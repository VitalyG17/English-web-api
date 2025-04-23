import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AuthModule} from './auth/auth.module';
import {ConfigModule} from '@nestjs/config';
import {PrismaService} from './prisma.service';
import {ProfileModule} from './profile/profile.module';
import {CourseController} from './course/course.controller';
import {CourseModule} from './course/course.module';
import {CourseService} from './course/course.service';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), AuthModule, ProfileModule, CourseModule],
  exports: [PrismaService],
  controllers: [AppController, CourseController],
  providers: [AppService, PrismaService, CourseService],
})
export class AppModule {}
