import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import i18n, { setLanguage } from './i18n' // Import the setLanguage function
import { useLanguageStore } from './stores/languageStore'
import PrimeVue from 'primevue/config'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(i18n)
app.use(PrimeVue)

const languageStore = useLanguageStore(pinia)

app.mount('#app')

languageStore.initLanguage()

languageStore.$subscribe((mutation, state) => {
  if (state.language !== i18n.global.locale) {
    setLanguage(state.language) // This updates the language both in i18n and localStorage
  }
})
