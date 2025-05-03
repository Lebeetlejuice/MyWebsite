import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import fr from './locales/fr.json'

const i18n = createI18n({
  locale: localStorage.getItem('app_lang') || 'fr', // Langue par défaut ou celle stockée
  fallbackLocale: 'fr',
  messages: {
    en,
    fr
  }
})

export default i18n
