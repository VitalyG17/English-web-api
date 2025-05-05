import {Module} from '@nestjs/common';
import {TaskService} from './task.service';
import {TaskController} from './task.controller';
import {PrismaService} from '../prisma.service';
import {AchievementService} from '../achievement/achievement.service';

@Module({
  providers: [TaskService, PrismaService, AchievementService],
  controllers: [TaskController],
})
export class TaskModule {}
