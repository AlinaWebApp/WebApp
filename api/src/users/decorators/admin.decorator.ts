import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const admin = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    const username = request.body.username;
    const password = request.body.password;
    const verified = request.body.verified;
    const admin = request.body?.admin;
    const id = +request.params.id;

    return { username, password, verified, admin, id };
  },
);
