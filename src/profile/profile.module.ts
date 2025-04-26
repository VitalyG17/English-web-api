import {Module} from '@nestjs/common';
import {ProfileController} from './profile.controller';
import {ProfileService} from './profile.service';
import {PrismaService} from '../prisma.service';
import {AchievementService} from '../achievement/achievement.service';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService, PrismaService, AchievementService],
})
export class ProfileModule {}
