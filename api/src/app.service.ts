import { Injectable } from '@nestjs/common';
import User from './users/models/user.model';

@Injectable()
export class AppService {
  isAuthenticated(user: User) {
    return user.username;
  }
}
