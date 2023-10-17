import { BadGatewayException, CallHandler, ExecutionContext, Injectable, InternalServerErrorException, NestInterceptor } from '@nestjs/common';
import { Observable, catchError, tap, throwError } from 'rxjs';
import * as functions from 'firebase-functions';


@Injectable()
export class LogingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle()
      .pipe(
        tap(() => console.log(`After... ${Date.now()}ms`)),
        catchError(
          err => throwError(() => {
            functions.logger.error('ass');
            return new InternalServerErrorException({
              status: false
            })
          })
        ),
      );
  }
}
