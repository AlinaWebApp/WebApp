import ITodo from '../../todos/interfaces/todo.interface';

export default interface IUser {
  id?: number;
  todoId?: number;
  usernameHash?: string;
  username?: string;
  password?: string;
  verified?: boolean;
  todos?: ITodo[];
}
