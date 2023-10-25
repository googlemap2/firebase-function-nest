import { Injectable } from "@nestjs/common";
import { I18nContext, I18nService } from "nestjs-i18n";

@Injectable()
export class I18nCommonService {
  constructor(
    private readonly i18n: I18nService
  ) {
  }

  async translate(key, args = {}): Promise<string> {
    return this.i18n.t(key, { lang: I18nContext.current().lang, args });
  }
}