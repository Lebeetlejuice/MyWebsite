import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import i18n from './i18n'
import { useLanguageStore } from './stores/languageStore'
import PrimeVue from 'primevue/config'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(i18n)
app.use(PrimeVue)
const languageStore = useLanguageStore(pinia)
languageStore.initLanguage()
app.mount('#app')
