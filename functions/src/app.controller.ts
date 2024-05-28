import { Controller, Get, Request } from '@nestjs/common';
import { AppService } from './app.service';
import 'reflect-metadata';
import * as svgCaptcha from 'svg-captcha'
import { setAsyncLocalStorageValue } from './helper/async-hook';
import axios from 'axios';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,

  ) {
  }

  @Get()
  async getHello() {
    // const result = await admin.messaging().sendToDevice("d-NgeXJZBhJMJbb9_WeBpY:APA91bFSHn1wQMkYVFFER02RMq3pqCz34_R0IBH1QufUoq4oaHXqIiktzKpD6HRfIyLAicbKB0Yxyfl9wjiWDEeTVLj_2JTD5jm9q3J_AbazV2aaPi1vZrQGG_VPaM2XhfgpHmDVipfI", {
    //   notification: {
    //     title: 'Thông báo',
    //     body: 'Nội dung thông báo'
    //   }
    // })
    // console.log("🚀 ~ file: app.controller.ts:21 ~ AppController ~ result ~ result:", result.results)

    // return {}
    const result =
      await Promise.all([
        axios.get('http://127.0.0.1:5001/nestjs-96563/us-central1/api/trans', {
          headers: {
            lang: "vn"
          }
        }),
        axios.get('http://127.0.0.1:5001/nestjs-96563/us-central1/api/trans', {
          headers: {
            lang: "en"
          }
        }),

      ])
    return result.map((item) => item.data)
  }

  @Get('captcha')
  async captcha() {
    const captcha = svgCaptcha.create();
    console.log(captcha);
  }
  @Get('trans')
  trans(@Request() request) {
    setAsyncLocalStorageValue("lang", request.headers.lang)
    const result = this.appService.getHello()
    return result;
  }


}
