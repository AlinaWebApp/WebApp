import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const customUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const username =
      request.params?.username ||
      request.body?.username ||
      request.user?.username;

    const usernameHash = request.params?.usernameHash;
    const password = request.body?.password;
    const verified = request.body?.verified;
    const admin = request.user?.admin;
    const id = request.user?.id || +request.params?.id;

    return { username, usernameHash, password, verified, admin, id };
  },
);
