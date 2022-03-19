import { Controller, Delete, Get, Patch, Post, Put, UseGuards } from '@nestjs/common';

import { AuthenticatedGuard } from '../common/guards/authenticated.guard';
import { customUser } from './decorators/user.decorator';
import { Todo } from '../todos/decorators/todo.decorator';
import CreateTodoDto from '../todos/dtos/CreateTodoDto.dto';
import User from 'src/users/models/user.model';
import { TodosService } from 'src/todos/todos.service';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { UsersService } from './users.service';
import { admin } from './decorators/admin.decorator';

@Controller('user')
export class UsersController {
  constructor(private todosService: TodosService, private usersService: UsersService) {}

  @UseGuards(AuthenticatedGuard, RolesGuard)
  @Get('/all')
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @UseGuards(AuthenticatedGuard, RolesGuard)
  @Get('/:id')
  getUserById(@admin() user: User) {
    return this.usersService.getUserById(user.id);
  }

  @UseGuards(AuthenticatedGuard, RolesGuard)
  @Post('/')
  addUser(@admin() user: User) {
    return this.usersService.addUser(user);
  }

  @UseGuards(AuthenticatedGuard, RolesGuard)
  @Delete('/:id')
  deleteUser(@admin() user: User) {
    return this.usersService.deleteUser(user);
  }

  @UseGuards(AuthenticatedGuard, RolesGuard)
  @Put('/:id')
  replaceUser(@admin() user: User) {
    return this.usersService.replaceUser(user);
  }

  @UseGuards(AuthenticatedGuard, RolesGuard)
  @Patch('/:id')
  updateUser(@admin() user: User) {
    return this.usersService.updateUser(user);
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/todos/all')
  getAllTodos(@customUser() user: User) {
    return this.todosService.getAllTodos(user);
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/todos/:id')
  getTodoById(@customUser() user: User, @Todo() todo: CreateTodoDto) {
    return this.todosService.getTodoById(user, todo);
  }

  @UseGuards(AuthenticatedGuard)
  @Post('/todos')
  addTodo(@customUser() user: User, @Todo() todo: CreateTodoDto) {
    return this.todosService.addTodo(user, todo);
  }

  @UseGuards(AuthenticatedGuard)
  @Delete('/todos/:id')
  deleteTodo(@customUser() user: User, @Todo() todo: CreateTodoDto) {
    return this.todosService.deleteTodo(user, todo);
  }

  @UseGuards(AuthenticatedGuard)
  @Put('/todos/:id')
  replaceTodo(@customUser() user: User, @Todo() todo: CreateTodoDto) {
    return this.todosService.replaceTodo(user, todo);
  }

  @UseGuards(AuthenticatedGuard)
  @Patch('/todos/:id')
  updateTodos(@customUser() user: User, @Todo() todo: CreateTodoDto) {
    return this.todosService.updateTodo(user, todo);
  }
}
