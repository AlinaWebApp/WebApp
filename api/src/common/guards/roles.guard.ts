import { Injectable, CanActivate, ExecutionContext, HttpException } from '@nestjs/common';

@Injectable()
export class RolesGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { user } = context.switchToHttp().getRequest();

    if (!user.admin) {
      throw new HttpException('User is not an administrator', 403);
    }

    return user.admin;
  }
}
