import { AppService } from './app.service';
import 'reflect-metadata';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): Promise<any[]>;
    captcha(): Promise<void>;
    trans(request: any): {
        lang: unknown;
    };
}
