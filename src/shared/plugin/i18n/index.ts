import { createI18n } from 'vue-i18n'
import { LOCALE_STORAGE_KEY } from '@/shared'
import './i18n.d'
import enUS from './en-US'
import uaUa from './ua-UA'
import { useItemStorage } from '@/shared'

const ENGLISH_LOCALE = 'en-US'
const UKRAINE_LOCALE = 'ua-UA'

export const DEFAULT_LOCALE = UKRAINE_LOCALE

type MessageSchema = typeof enUS

const messages = {
  [ENGLISH_LOCALE]: enUS,
  [UKRAINE_LOCALE]: uaUa
}

export const i18nPlugin = createI18n<[MessageSchema]>({
  legacy: false,
  fallbackWarn: false,
  fallbackLocale: UKRAINE_LOCALE,
  locale: getLocaleFromStorage(),
  messages
})

export function useLocaleStorage() {
  return useItemStorage(LOCALE_STORAGE_KEY)
}

function getLocaleFromStorage() {
  const storage = useLocaleStorage()
  const item = storage.getItem()

  for (const lang of Object.keys(messages)) {
    if (lang === item) {
      return lang
    }
  }

  return DEFAULT_LOCALE
}
