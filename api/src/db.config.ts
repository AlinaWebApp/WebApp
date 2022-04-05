import { Sequelize } from 'sequelize-typescript';
import { Dialect } from 'sequelize/types';
import User from './users/models/user.model';
import Todo from './todos/models/todo.model';
import 'dotenv/config';

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT as Dialect,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
});

export const init = () => {
  try {
    sequelize.addModels([User, Todo]);
  } catch (error) {
    console.error({
      errorCode: 500,
      errorMessage: 'No connection to DB',
    });
  }
};
