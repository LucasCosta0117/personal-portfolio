<template>
  <div class="section-title-container">
    <span  class="background-text">{{ title }}</span>
    <span class="main-text">{{ title }}</span>
    <div class="underline-highlight"></div>
  </div>
</template>
<script>
export default {
  name: 'SectionTitle',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style  scoped>
.section-title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.background-text {
  position: relative;
  top: 75px;
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
  .background-text {
    top: 6.25rem;
    font-size: 6rem;
    letter-spacing: 0.5rem;
  }
}
</style>