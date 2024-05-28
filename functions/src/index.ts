import * as admin from "firebase-admin";

import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { onRequest } from 'firebase-functions/v2/https';
import * as express from 'serverless-express/express'
import { asyncLocalStorageMiddleware } from "./helper/async-hook";
const server = express();

admin.initializeApp()

const createNestServer = async (expressInstance) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );
  app.use(asyncLocalStorageMiddleware)
  return await app.init();

};


createNestServer(server)
  .then(v => console.log('Nest Ready'))
  .catch(err => console.error('Nest broken', err));

export const api = onRequest(async (req, res) => {
  return server(req, res)
});
