<template>
  <div class="service-card-container">
    <div class="service-card-icon">
      <span :class="icon"></span>
    </div>
    <p class="service-card-title">{{ title }}</p>
    <p class="service-card-description">{{ description }}</p>
  </div>
</template>
<script>
export default {
  name: 'ServiceCard',
  props: {
    title: {
      type: String
    },
    icon: {
      type: String
    },
    description: {
      type: String
    }
  }
}
</script>
<style scoped>
.service-card-container {
  /* Variables */
  --cinza-claro: #afafaf30;
  --cinza: #afafafb2;
  --azul: #101624b7;

  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px var(--cinza-claro);
  border-radius: 0.25rem;
  background-color: var(--azul);
  padding: 3rem;
  gap: 1rem;
}
.service-card-icon {
  border: solid 1px var(--cinza-claro);
  border-radius: 50%;
  color: var(--cinza);
  font-size: 3rem;
  padding: 0.25rem 1rem;
  background-color: #000000;
}
.service-card-title {
  font-size: 1.25rem;
  text-align: center;
}
.service-card-description {
  color: var(--cinza);
  font-size: 0.875rem;
  font-weight: 300;
  text-align: center;
}
</style>