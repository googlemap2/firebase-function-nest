import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { I18nCommonService } from './i18n/i18n-common.service';
import * as path from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly i18nCommonService: I18nCommonService) {
    console.log(path.join('../'))
  }

  @Get()
  async getHello() {
    return this.i18nCommonService.translate('test.test');
  }
}
