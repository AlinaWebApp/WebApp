import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import Todo from '../../todos/models/todo.model';

@Table({
  createdAt: false,
  updatedAt: false,
})
class User extends Model {
  @Column
  name: string;

  @Column
  username: string;

  @Column
  password: string;

  @Column
  verified: boolean;

  @Column
  admin: boolean;

  @HasMany(() => Todo, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    hooks: true,
  })
  todos: Todo[];
}

export default User;
