import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { AppService } from './app.service';

@Module({
  imports: [AuthModule, UsersModule, TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
