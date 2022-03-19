import { ExecutionContext, HttpException, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LogoutGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    if (!request.isAuthenticated()) {
      throw new HttpException('Have to be logged in to logout', 403);
    }

    request.logout();

    return true;
  }
}
