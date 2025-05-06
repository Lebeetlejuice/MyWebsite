// stores/languageStore.js

import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    language: localStorage.getItem('app_lang') || 'fr'
  }),
  actions: {
    initLanguage() {
      this.language = localStorage.getItem('app_lang') || 'fr'
    },
    setLanguage(language) {
      this.language = language
      localStorage.setItem('app_lang', language)
    }
  }
})
