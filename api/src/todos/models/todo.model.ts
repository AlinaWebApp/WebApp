import {
  Table,
  Column,
  Model,
  ForeignKey,
  PrimaryKey,
  BelongsTo,
  AutoIncrement,
} from 'sequelize-typescript';
import User from '../../users/models/user.model';

@Table({
  createdAt: false,
  updatedAt: false,
})
class Todo extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  todo: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  manufacturer: User;
}

export default Todo;
