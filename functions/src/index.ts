import * as functions from 'firebase-functions';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as express from 'express';
import { LogingInterceptor } from './loging/loging.interceptor';
const server = express();
import * as fs from 'fs';
import * as path from 'path';

const createNestServer = async (expressInstance) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );
  app.useGlobalInterceptors(new LogingInterceptor()); 
   app.use(asyncLocalStorageMiddleware);

  return app.init();
};


createNestServer(server)
  .then(v => console.log('Nest Ready'))
  .catch(err => console.error('Nest broken', err));

export const api = functions.https.onRequest(server);