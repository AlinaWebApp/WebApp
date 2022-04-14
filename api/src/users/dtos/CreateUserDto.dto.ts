import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import IUser from '../interfaces/user.interface';

export default class CreateUserDto implements IUser {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsEmail()
  username: string;
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(18)
  password: string;
}
