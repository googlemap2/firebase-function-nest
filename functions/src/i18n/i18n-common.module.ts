import { Module } from "@nestjs/common";
import * as path from 'path';
import { I18nModule, AcceptLanguageResolver, QueryResolver, HeaderResolver } from 'nestjs-i18n';
import { I18nCommonService } from "./i18n-common.service";
@Module({
  imports: [
    I18nModule.forRootAsync({
      useFactory: () => (
        {
          fallbackLanguage: 'vn',
          loaderOptions: {
            path: path.resolve('src', 'i18n', 'locales').replaceAll('\\', '/'),
            watch: true,
          },
        }
      ),
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
        new HeaderResolver(['x-lang']),
      ],
    })
  ],
  providers: [
    I18nCommonService
  ],
  exports: [
    I18nCommonService
  ],
})

export class I18nCommonModule {
}