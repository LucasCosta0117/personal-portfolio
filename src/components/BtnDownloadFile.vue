<template>
  <a :href="pathFile" download>
    <button class="btn-download-file">
      {{ btnLayer }}
    </button>
  </a>
</template>
<script>
import cvFile_pt from '@/assets/files/LUCAS_DA_SILVA_COSTA-DESENVOLVEDOR-CV_PT.pdf';
// import cvFile_en from '@/assets/files/LUCAS_DA_SILVA_COSTA-DESENVOLVEDOR-CV_EN.pdf';

export default {
  name: 'BtnDownloadFile',
  data() {
    return {
      btnLayer: 'Baixar Currículo',
      pathFile: cvFile_pt
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
</style>