import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as db from './db.config';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ credentials: true, origin: 'http://localhost:8080' });
  app.useGlobalPipes(new ValidationPipe());

  app.use(
    session({
      secret: 'nest cats',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  db.init();

  await app.listen(8000);

  const TIMES = 46;
  const char = '#';
  const chars = char.repeat(TIMES);

  console.log(chars);
  console.log(char + ' Server listening on http://localhost:8000/ ' + char);
  console.log(chars);
}
bootstrap();
