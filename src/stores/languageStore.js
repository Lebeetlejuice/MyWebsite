// src/stores/languageStore.js
import { defineStore } from 'pinia'
import i18n from '../i18n'

export const useLanguageStore = defineStore('language', {
  actions: {
    setLanguage(lang) {
      i18n.global.locale.value = lang
      localStorage.setItem('app_lang', lang)
    },
    initLanguage() {
      const saved = localStorage.getItem('app_lang')
      const lang = saved || 'en'
      this.setLanguage(lang)
    },
    getCurrentLocale() {
      return i18n.global.locale.value
    }
  }
})
