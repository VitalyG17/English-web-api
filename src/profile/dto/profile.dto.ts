import {IsDateString, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString} from 'class-validator';

export class ProfileDto {
  @IsNumber()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  surname: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  avatarUrl: string | null;

  @IsDateString()
  birthDate: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsDateString()
  createdAt: string;

  @IsDateString()
  updatedAt: string;
}
