<template>
  <div 
    class="section-title-container" 
    data-aos="fade-down"
    data-aos-duration="800"
    data-aos-anchor-placement="bottom-bottom"
  >
    <span  class="background-text">{{ title }}</span>
    <span class="main-text">{{ title }}</span>
    <div class="underline-highlight"></div>
  </div>
</template>
<script>
/**
 * Padroniza e estiliza o título usado para nomear uma seção.
 */
export default {
  name: 'SectionTitle',
  props: {
    /**
     * Título da seção
     */
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style  scoped>
.section-title-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0rem;
}
.background-text {
  position: absolute;
  top: -0.75rem;
  text-align: center;
  text-wrap: nowrap;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 3.5rem;
  color: #afafaf20;
  letter-spacing: 0.25rem;
}
.main-text {
  width: 12rem;
  text-align: center;
  text-wrap: nowrap;
  text-transform: uppercase;
  font-size: 2rem;
  color: gold;
  border-bottom: 2px solid gray;
}
.underline-highlight {
  position: relative;
  bottom: 2px;
  width: 4.5rem;
  border-bottom: 2px solid gold;
}

/**
 * Pequenos dispositivos
 * Vuetify 'sm' Break Point
 */
@media (min-width: 600px) {
  .section-title-container {
    margin: 4rem 0rem;
  }
}

/**
 * Dispositivos médios/grandes
 * Vuetify 'md' Break Point
 */
@media (min-width: 960px) {
  .background-text {
    top: -2rem;
    font-size: 5.5rem;
    letter-spacing: 0.5rem;
  }
}
</style>