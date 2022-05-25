import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'

const i18n = new createI18n({
  locale: 'en-us',
  fallbackLocale: 'en-us',
  messages
})

const app = createApp({
  // ...
})
app.use(i18n)

export { i18n }
