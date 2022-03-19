import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Todo = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();

  const todoId = request.params.id;

  return {
    todo: request.body,
    id: +todoId,
  };
});
