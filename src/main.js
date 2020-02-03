import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'
import moment from 'moment'
import ScrollAnimation from './directives/scrollanimation'

Vue.directive('scrollanimation', ScrollAnimation)
Vue.config.productionTip = false
Vue.use(VueI18n);

function loadLocaleMessages() {
  const locales = require.context('./lang', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

let locale = navigator.language.substring(0, 2);
moment.locale(locale);

const i18n = new VueI18n({
  fallbackLocale: 'en',
  locale: locale,
  messages: loadLocaleMessages()
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')

