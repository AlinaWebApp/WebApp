import { ExecutionContext, Injectable, HttpException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LoginGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    if (request.isAuthenticated()) {
      throw new HttpException('Have to be logged out to login', 403);
    }

    const result = (await super.canActivate(context)) as boolean;

    await super.logIn(request);

    return result;
  }
}
