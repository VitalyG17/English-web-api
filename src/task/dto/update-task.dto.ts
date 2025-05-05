import {IsOptional, IsString, IsArray, IsEnum, IsInt} from 'class-validator';
import {$Enums, Language} from '../../../generated/prisma';
import TaskType = $Enums.TaskType;
import Difficulty = $Enums.Difficulty;
import {Type} from 'class-transformer';

export class UpdateTaskDto {
  @IsOptional()
  @IsArray()
  @IsString({each: true})
  @Type(() => String)
  question?: string[];

  @IsOptional()
  @IsArray()
  @IsString({each: true})
  @Type(() => String)
  options?: string[];

  @IsOptional()
  @IsArray()
  @IsString({each: true})
  @Type(() => String)
  correctAnswer?: string[];

  @IsOptional()
  @IsEnum(Difficulty)
  difficulty?: Difficulty;

  @IsOptional()
  @IsEnum(TaskType)
  type?: TaskType;

  @IsOptional()
  @IsString()
  audioSrc?: string;

  @IsOptional()
  @IsEnum(Language)
  recognitionLang?: Language;

  @IsOptional()
  @IsInt()
  errorCount?: number;
}
