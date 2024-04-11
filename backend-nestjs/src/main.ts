import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as path from 'path';
import * as dotenv from 'dotenv';

async function bootstrap() {
  const PATH_TO_THE_ROOT = path.resolve(__dirname, '../../.env');
  dotenv.config({ path: PATH_TO_THE_ROOT });
  const app = await NestFactory.create(AppModule);
  const APP_PORT = process.env.BACKEND_APP_PORT;
  await app.listen(APP_PORT);
}
bootstrap();
