import { createI18n } from 'vue-i18n'
import ptBR from './locales/pt-BR.json'
import en from './locales/en.json'
import es from './locales/es.json'

const getInitialLocale = () => {
  const savedLocale = localStorage.getItem('lucascosta-dev_lang');
  if (savedLocale) return savedLocale;

  const browserLocale = navigator.language.split('-')[0];
  const supportedLocales = ['pt', 'en', 'es'];

  if (supportedLocales.includes(browserLocale)) {
    return browserLocale === 'pt' ? 'pt-BR' : browserLocale;
  }

  return 'pt-BR';
}

const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: 'en',
  messages: {
    'pt-BR': ptBR,
    'en': en,
    'es': es
  }
})

export default i18n;