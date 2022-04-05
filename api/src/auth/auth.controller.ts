import { Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { LoginGuard } from 'src/common/guards/login.guard';
import { LogoutGuard } from 'src/common/guards/logout.guard';
import { SignupGuard } from 'src/common/guards/signup.guard';
import CreateUserDto from 'src/users/dtos/CreateUserDto.dto';
import CreateUserHashDto from 'src/users/dtos/CreateUserHashDto.dto';
import IMessage from 'src/Interfaces/message.interface';
import { customUser } from 'src/users/decorators/user.decorator';
import { AuthService } from 'src/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LoginGuard)
  @Post('/login')
  login(@customUser() user: CreateUserDto): IMessage {
    return this.authService.login(user);
  }

  @UseGuards(SignupGuard)
  @Post('/signup')
  signup(@customUser() user: CreateUserDto): Promise<IMessage> {
    return this.authService.genSignupLink(user);
  }

  @Get('/signup/confirmation/:username/:usernameHash')
  verifyAccout(@customUser() user: CreateUserHashDto): Promise<IMessage> {
    return this.authService.verifyAccount(user);
  }

  @UseGuards(LogoutGuard)
  @Delete('/logout')
  logout(): IMessage {
    return this.authService.logout();
  }
}
