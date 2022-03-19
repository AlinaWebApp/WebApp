import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, HttpException } from '@nestjs/common';
import { AuthService } from './auth.service';
import IUser from '../users/interfaces/user.interface';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<IUser> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new HttpException('Login or password incorrect', 401);
    }

    return { id: user.id, username: user.username };
  }
}
