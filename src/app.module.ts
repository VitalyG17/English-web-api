import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AuthModule} from './auth/auth.module';
import {ConfigModule} from '@nestjs/config';
import {PrismaService} from './prisma.service';
import {ProfileModule} from './profile/profile.module';
import {CourseModule} from './course/course.module';
import {AchievementModule} from './achievement/achievement.module';
import {CourseTestsModule} from './course-tests/course-tests.module';
import {TaskModule} from './task/task.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    AuthModule,
    ProfileModule,
    CourseModule,
    AchievementModule,
    CourseTestsModule,
    TaskModule,
  ],
  exports: [PrismaService],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
