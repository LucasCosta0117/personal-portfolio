import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import 'aos/dist/aos.css';
import AOS from 'aos';

loadFonts()
AOS.init();

createApp(App)
  .use(vuetify)
  .mount('#app')
