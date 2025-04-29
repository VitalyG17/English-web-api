import {IsInt, IsNotEmpty, IsOptional, IsString} from 'class-validator';

export class CreateCourseTestsDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsInt()
  @IsNotEmpty()
  courseId: number;

  @IsOptional()
  @IsString()
  imageUrl?: string;
}
