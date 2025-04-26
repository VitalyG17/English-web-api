import {IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString} from 'class-validator';
import {AchievementType} from '../../../generated/prisma';

export class CreateAchievementDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsString()
  iconUrl?: string;

  @IsOptional()
  @IsEnum(AchievementType)
  type?: AchievementType;

  @IsOptional()
  @IsString()
  conditionValue?: string;
}
