import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogingModule } from './loging/loging.module';
import { I18nCommonModule } from './i18n/i18n-common.module';

@Module({
  imports: [LogingModule, I18nCommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
