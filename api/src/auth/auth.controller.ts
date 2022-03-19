import { Controller, Delete, Get, Post, Res, UseGuards } from '@nestjs/common';
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
  async verifyAccout(@Res() res, @customUser() user: CreateUserHashDto): Promise<IMessage> {
    const verificationResult = await this.authService.verifyAccount(user);

    if (!verificationResult.error) {
      res.redirect('http://localhost:8080/email/confirmation/status');
    }

    return verificationResult;
  }

  @UseGuards(LogoutGuard)
  @Delete('/logout')
  logout(): IMessage {
    return this.authService.logout();
  }
}
