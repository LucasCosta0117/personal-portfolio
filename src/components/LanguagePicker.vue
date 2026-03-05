<template>
  <v-menu transition="slide-y-transition">
    <template v-slot:activator="{ props }">
      <v-btn variant="text" v-bind="props">
        <v-icon start>mdi-translate</v-icon>
        {{ $i18n.locale }}
      </v-btn>
    </template>

    <v-list shadow="lg">
      <v-list-item @click="changeLanguage('pt-BR')">
        <v-list-item-title>🇧🇷 Português</v-list-item-title>
      </v-list-item>
      
      <v-list-item @click="changeLanguage('en')">
        <v-list-item-title>🇺🇸 English</v-list-item-title>
      </v-list-item>

      <v-list-item @click="changeLanguage('es')">
        <v-list-item-title>🇪🇸 Español</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'LanguagePicker',
  methods: {
    /**
     * Altera o idioma globalmente e persiste a escolha no navegador
     * @param {string} lang - O código do idioma (ex: 'pt-BR')
     */
    changeLanguage(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem('lucascosta-dev_lang', lang);
    }
  }
}
</script>