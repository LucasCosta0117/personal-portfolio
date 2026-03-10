<template>
  <a :href="pathFile" :download="fileName" class="download-link">
    <button class="btn-download-file">
      {{ $t('BtnDownload.label') }}
    </button>
  </a>
</template>
<script>
import cvFile_pt from '@/assets/files/LUCAS_DA_SILVA_COSTA-DESENVOLVEDOR-CV_PT.pdf';
import cvFile_en from '@/assets/files/LUCAS_DA_SILVA_COSTA-DESENVOLVEDOR-CV_EN.pdf';

/**
 * Botão que realiza o download do currículo em formato PDF 
 */
export default {
  name: 'BtnDownloadFile',
  data() {
    return {}
  },
  computed: {
    // Retorna o arquivo com base no idioma atual
    pathFile() {
      return this.$i18n.locale === 'en' 
        ? cvFile_en 
        : cvFile_pt;
    },
    // Define o nome do arquivo que aparecerá para o usuário ao baixar.
    fileName() {
      return this.$i18n.locale === 'en' 
        ? 'LUCAS_COSTA_CV_EN.pdf' 
        : 'LUCAS_COSTA_CV_PT.pdf';
    }
  }
}
</script>
<style scoped>
  .btn-download-file a {
    text-decoration: none;
  }
  .btn-download-file {
    background-color: gold;
    color: black;
    padding: 0.625rem 2rem;
    border-radius: 1.2rem;
    font-weight: 300;
  }
  .btn-download-file:hover {
    opacity: 0.8;
  }
</style>