import {IsEmail, IsNotEmpty, MinLength, IsString, IsDateString} from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  surname: string;

  @IsDateString()
  birthDate: string;

  @MinLength(12)
  phoneNumber: string;

  @IsEmail()
  email: string;

  @MinLength(8)
  password: string;
}
