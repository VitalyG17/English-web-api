import {Module} from '@nestjs/common';
import {AchievementService} from './achievement.service';
import {PrismaService} from '../prisma.service';
import {AchievementController} from './achievement.controller';

@Module({
  controllers: [AchievementController],
  providers: [AchievementService,PrismaService],
})
export class AchievementModule {}
