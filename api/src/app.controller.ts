import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { customUser } from './users/decorators/user.decorator';
import User from './users/models/user.model';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get('/isAuthenticated')
  isAuth(@customUser() user: User) {
    return this.appService.isAuthenticated(user);
  }
}
