import {
  ExecutionContext,
  Injectable,
  CanActivate,
  HttpException,
} from '@nestjs/common';

@Injectable()
export class SignupGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    if (request.isAuthenticated()) {
      throw new HttpException('Have to be logged out to signup', 403);
    }

    return true;
  }
}
