<template>
  <div class="footer-container">
    <p>Copyright © 2025 Todos os direitos reservados</p>
    <p>Developed by <a :href="urlGithub" target="_blank">Lucas Costa</a></p>
  </div>
</template>
<script>
export default {
  name: 'FooterPage',
  props: {
    urlGithub: {
      type: String
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