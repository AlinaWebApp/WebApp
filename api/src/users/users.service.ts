import { HttpException, Injectable } from '@nestjs/common';
import { getHash } from '../common/hashing/hashing';
import User from './models/user.model';
import CreateUserDto from './dtos/CreateUserDto.dto';

@Injectable()
export class UsersService {
  async addUser(user: CreateUserDto): Promise<User> {
    return (
      await User.create({
        name: user.name,
        username: user.username,
        password: await getHash(user.password, 12),
        verified: true,
        admin: false,
      })
    ).toJSON();
  }

  async getUserByName(username: string): Promise<User> {
    const user = await User.findOne({
      where: {
        username,
      },
    });

    if (!user) throw new HttpException('User Not Found', 404);

    return user;
  }

  async setUserVerified(username: string): Promise<User> {
    const user = await this.getUserByName(username);

    if (!user) throw new HttpException('User Not Found', 404);

    user.verified = true;

    return user.save();
  }

  async getAllUsers(): Promise<User[]> {
    return (await User.findAll()).map((user) => user.toJSON());
  }

  async getUserById(id: number): Promise<User> {
    const user = await User.findOne({ where: { id } });

    if (!user) throw new HttpException('User Not Found', 404);

    return user;
  }

  async deleteUser(user: User): Promise<void> {
    const dbUser = await User.findOne({ where: { id: user.id } });

    if (!dbUser) throw new HttpException('User Not Found', 404);

    await dbUser.destroy();
  }

  async replaceUser(user: User): Promise<User[]> {
    const [_, dbUser] = await User.update(
      {
        ...user,
      },
      { where: { id: user.id }, returning: true },
    );

    if (!dbUser.length) throw new HttpException('User Not Found', 404);

    return dbUser;
  }

  async updateUser(user: User): Promise<User[]> {
    return this.replaceUser(user);
  }
}
