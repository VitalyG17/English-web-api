import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthController} from './auth.controller';
import {JwtModule} from '@nestjs/jwt';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {PrismaService} from '../prisma.service';
import {JwtStrategy} from './strategies/jwt.strategy';
import {RefreshTokenStrategy} from './strategies/refresh.strategy';
import {AchievementService} from '../achievement/achievement.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        secret: config.get('JWT_SECRET'),
        signOptions: {expiresIn: '1d'},
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, AchievementService, JwtStrategy, RefreshTokenStrategy],
})
export class AuthModule {}
