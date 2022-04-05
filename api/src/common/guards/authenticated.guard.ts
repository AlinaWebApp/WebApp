import {
  ExecutionContext,
  Injectable,
  CanActivate,
  HttpException,
} from '@nestjs/common';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    if (!request.isAuthenticated()) {
      throw new HttpException('Have to be logged in to do that', 403);
    }

    return request.isAuthenticated();
  }
}
