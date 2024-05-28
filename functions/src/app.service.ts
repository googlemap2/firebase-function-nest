import 'reflect-metadata';
import { Injectable } from '@nestjs/common';
import { getAsyncLocalStorageValue } from './helper/async-hook';
@Injectable()
export class AppService {
  getHello() {
    const lang = getAsyncLocalStorageValue("lang")
    return {
      lang
    };
  }
}
