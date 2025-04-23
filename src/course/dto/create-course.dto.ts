import {IsEnum, IsNotEmpty, IsOptional, IsString} from 'class-validator';
import {Difficulty} from '../../../generated/prisma';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(Difficulty)
  difficulty: Difficulty;

  @IsOptional()
  @IsString()
  imageUrl?: string;
}
