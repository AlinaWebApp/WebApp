import ITodo from '../interfaces/todo.interface';

export default class CreateTodoDto {
  id?: number;

  todo?: ITodo;

  userId?: number;
}
