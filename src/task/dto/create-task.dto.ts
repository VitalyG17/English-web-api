import {ArrayMinSize, IsArray, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString} from 'class-validator';
import {$Enums, Language} from '../../../generated/prisma';
import TaskType = $Enums.TaskType;
import Difficulty = $Enums.Difficulty;
import {Type} from 'class-transformer';

export class CreateTaskDto {
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

  @IsArray()
  @IsString({each: true})
  @IsNotEmpty()
  @ArrayMinSize(1)
  @Type(() => String)
  correctAnswer: string[];

  @IsEnum(Difficulty)
  difficulty: Difficulty;

  @IsEnum(TaskType)
  type: TaskType;

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
