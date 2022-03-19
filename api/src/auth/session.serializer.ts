import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import IUser from '../users/interfaces/user.interface';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private usersService: UsersService) {
    super();
  }

  async serializeUser(user: IUser, done: (err: Error, user: any) => void): Promise<void> {
    const dbUser = await this.usersService.getUserByName(user.username);

    done(null, { id: user.id, username: user.username, admin: dbUser.admin });
  }

  deserializeUser(payload: string, done: (err: Error, payload: string) => void): void {
    done(null, payload);
  }
}
