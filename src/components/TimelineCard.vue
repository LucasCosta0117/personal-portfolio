<template>
  <div class="timeline-card-container">
    <div class="timeline-marker"></div>
    <h2 class="timeline-card-title">{{ title }}</h2>
    <span class="timeline-card-dates">{{ dates.start }} - {{ dates.end }}</span>
    <span class="timeline-card-company">{{ company }}</span>
    <p class="timeline-card-description">{{ description }}</p>
  </div>
</template>
<script>
export default { 
  name: 'TimelineCard',
  props: {
    title: {
      type: String
    },
    dates: {
      type: Object
    },
    company: {
      type: String
    },
    description: {
      type: String
    }
  }
}
</script>
<style scoped>
.timeline-card-container {
  /* Variables */
  --cinza-transp: #afafaf30;
  --cinza-escuro: #4e4e4e;
  --cinza: #afafaf;
  --azul-escuro: #070D1B;
  --azul-claro: #101624b7;

  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  padding-bottom: 3rem;
  margin-left: 1rem;
  border-left: 1px solid var(--cinza-transp);
}
.timeline-marker {
  position: absolute;
  left: -0.45rem;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  border: 1px solid var(--cinza-transp);
  background-color: var(--cinza-escuro);
}
.timeline-card-title {
  font-weight: 400;
  color: gold;
  margin-top: -0.75rem;
}
.timeline-card-dates {
  color: var(--cinza);
  font-size: 1.2rem;
}
.timeline-card-company {
  font-size: 1.25rem;
  margin: 1rem 0rem;
}
.timeline-card-description {
  color: var(--cinza);
  font-size: 1rem;
}
</style>