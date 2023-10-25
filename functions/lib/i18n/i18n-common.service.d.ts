import { I18nService } from "nestjs-i18n";
export declare class I18nCommonService {
    private readonly i18n;
    constructor(i18n: I18nService);
    translate(key: any, args?: {}): Promise<string>;
}
