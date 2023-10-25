import { AppService } from './app.service';
import { I18nCommonService } from './i18n/i18n-common.service';
export declare class AppController {
    private readonly appService;
    private readonly i18nCommonService;
    constructor(appService: AppService, i18nCommonService: I18nCommonService);
    getHello(): Promise<string>;
}
