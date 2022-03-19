import { createParamDecorator, ExecutionContext, HttpException } from '@nestjs/common';
import { validate } from 'class-validator';
import CreateUserDto from '../dtos/CreateUserDto.dto';

export const customUser = createParamDecorator(async (data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  const user = new CreateUserDto();

  user.username = request.body?.username;
  user.password = request.body?.password;

  const err = await validate(user);

  if (err.length && (user.username || user.username === '')) {
    throw new HttpException(err, 200);
  }

  const username = request.params?.username || request.body?.username || request.user?.username;

  const usernameHash = request.params?.usernameHash;
  const password = request.body?.password;
  const verified = request.body?.verified;
  const admin = request.user?.admin;
  const id = request.user?.id || +request.params?.id;

  return { username, usernameHash, password, verified, admin, id };
});
