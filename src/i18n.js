import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import fr from './locales/fr.json'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('app_lang') || 'fr',
  fallbackLocale: 'fr',
  messages: {
    en,
    fr
  }
})

export function setLanguage(language) {
  const { locale } = i18n.global
  locale.value = language

  localStorage.setItem('app_lang', language)
}

const savedLang = localStorage.getItem('app_lang') || 'fr'

i18n.global.locale.value = savedLang

export default i18n
