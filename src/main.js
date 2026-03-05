import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import 'aos/dist/aos.css';
import AOS from 'aos';
import i18n from './i18n/i18n';

loadFonts()
AOS.init();

createApp(App)
  .use(vuetify)
  .use(i18n)
  .mount('#app')
