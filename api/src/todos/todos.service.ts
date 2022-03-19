import { HttpException, Injectable } from '@nestjs/common';
import User from 'src/users/models/user.model';
import CreateTodoDto from './dtos/CreateTodoDto.dto';
import ITodo from '../todos/interfaces/todo.interface';
import IUser from '../users/interfaces/user.interface';
import Todo from './models/todo.model';

@Injectable()
export class TodosService {
  async #hasTodo(todoId: number, userId: number): Promise<Todo> {
    const todo = await Todo.findOne({
      where: {
        id: todoId,
        userId,
      },
    });

    if (!todo) return null;

    return todo;
  }

  async getAllTodos(user: User): Promise<ITodo[]> {
    const todos = await Todo.findAll({
      where: {
        userId: user.id,
      },
    });

    if (!todos.length) throw new HttpException('Todos Not Found', 404);

    return todos.map((todo) => todo.toJSON());
  }

  async getTodoById(user: User, todo: CreateTodoDto): Promise<IUser> {
    const dbTodo = await this.#hasTodo(todo.id, user.id);

    if (!dbTodo) throw new HttpException('Todo Not Found', 404);

    return dbTodo.toJSON();
  }

  async addTodo(user: User, todo: CreateTodoDto): Promise<Todo> {
    if (!todo.todo['todo']) throw new HttpException('Invalid Todo Format', 400);

    const newTodo = await Todo.create({
      ...todo.todo,
      userId: user.id,
    });

    return newTodo;
  }

  async deleteTodo(user: User, todo: CreateTodoDto): Promise<void> {
    const dbTodo = await this.#hasTodo(todo.id, user.id);

    if (!dbTodo) throw new HttpException('Todo Not Found', 404);

    await dbTodo.destroy();
  }

  async updateTodo(user: User, todo: CreateTodoDto): Promise<IUser> {
    const dbTodo = await this.#hasTodo(todo.id, user.id);

    if (!dbTodo) throw new HttpException('Invalid Todo Id', 400);

    dbTodo.set({
      todo: todo.todo.todo,
    });

    return dbTodo.save();
  }

  replaceTodo(user: User, todo: CreateTodoDto) {
    return this.updateTodo(user, todo);
  }
}
