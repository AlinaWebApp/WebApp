import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { areHashesEqual } from '../common/hashing/hashing';
import { getUsernameHash } from '../common/hashing/hashing';
import IMessage from '../Interfaces/message.interface';
import CreateUserDto from '../users/dtos/CreateUserDto.dto';
import CreateUserHashDto from '../users/dtos/CreateUserHashDto.dto';
import IUser from '../users/interfaces/user.interface';
import User from 'src/users/models/user.model';
@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, pass: string): Promise<IUser> {
    try {
      const user = await this.usersService.getUserByName(username);
      if (
        user &&
        user.verified &&
        (await areHashesEqual(pass, user.password))
      ) {
        const { ...result } = user.toJSON();

        return result;
      }

      return null;
    } catch (error) {
      console.error(error);

      return null;
    }
  }
  #genResponce(message: string, username?: string): IMessage {
    return { message, name: username };
  }

  login(user: CreateUserDto): IMessage {
    return this.#genResponce('Successfully logged in', user.name);
  }

  async genSignupLink(user: CreateUserDto): Promise<User | IMessage> {
    try {
      await this.usersService.getUserByName(user.username);

      return this.#genResponce('User already exists');
    } catch {
      if (!user.name) return this.#genResponce('User must have a name');

      const newUser = await this.usersService.addUser(user);

      const confLink = `http://localhost:3000/auth/signup/confirmation/${
        user.username
      }/${getUsernameHash(user.username)}`;

      return newUser;
    }
  }

  async verifyAccount(user: CreateUserHashDto): Promise<IMessage> {
    const dbUser = await this.usersService.getUserByName(user.username);

    if (dbUser.verified)
      return this.#genResponce('Account was already verified');

    if (getUsernameHash(user.username) === user.usernameHash) {
      await this.usersService.setUserVerified(user.username);

      return this.#genResponce('Account was verified');
    }

    return this.#genResponce('Confirmation link not correct');
  }

  logout(): IMessage {
    return this.#genResponce('Successfully logged out ');
  }
}
