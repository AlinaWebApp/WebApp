import { IsNotEmpty, IsString } from 'class-validator';

export default class CreateUserHashDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  usernameHash: string;
}
