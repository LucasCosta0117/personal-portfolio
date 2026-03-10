<template>
  <div class="footer-container">
    <p>{{ $t('FooterPage.copyright') }}</p>
    <p>
      {{ $t('FooterPage.developedBy') }} 
      <a :href="urlGithub" target="_blank">Lucas Costa</a>
    </p>
  </div>
</template>
<script>
/**
 * Rodapé da página com as insformações básicas de Copyright e Desenvolvimento da aplicação.
 */
export default {
  name: 'FooterPage',
  props: {
    /**
     * URL do perfil do Github.
     */
    urlGithub: {
      type: String,
      default: 'https://github.com/LucasCosta0117'
    }
  },
  date() {
    return {
      //
    }
  }
}
</script>
<style scoped>
.footer-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #4e4e4e;
  padding-top: 3rem;
  padding-bottom: 1rem;
  font-size: 0.875rem;
}
.footer-container a {
  text-decoration: none;
  color: goldenrod;
}
</style>