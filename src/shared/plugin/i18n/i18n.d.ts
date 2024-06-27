import { DefineComponent } from 'vue'
import { Composer, TranslateResult } from 'vue-i18n'

declare module 'vue' {
  interface GlobalComponents {
    'i18n-t': DefineComponent<
      {
        keypath: string
        tag?: string
        scope?: 'global'
        plural?: number
        locale?: string
      },
      {
        i18n: Composer
        list: (path: string, options?: { [key: string]: unknown }) => TranslateResult[]
      },
      Record<string, never>,
      Record<string, never>,
      {
        interpolate: (value: string) => string
        translate: (path: string, locale?: string) => TranslateResult
        getLocaleMessage: (locale: string) => Record<string, unknown>
        setLocaleMessage: (locale: string, message: Record<string, unknown>) => void
      }
    >
  }
}
