import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogingModule } from './loging/loging.module';

@Module({
  imports: [LogingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
