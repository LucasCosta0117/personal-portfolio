<template>
  <div class="timeline-card-container">
    <div class="timeline-marker"></div>
    <h2 class="timeline-card-title">{{ title }}</h2>
    <span v-if="dates?.start && dates?.end" class="timeline-card-dates">{{ dates.start }} - {{ dates.end }}</span>
    <span class="timeline-card-company">{{ company }}</span>
    <p class="timeline-card-description">{{ description }}</p>
  </div>
</template>
<script>
/**
 * Componente, do tipo 'Card', usado para descrever um evento na timeline.
 * 
 * Ps.: Quando mais de um deste componente é aninhado, é então criado o efeito de 'Linha do tempo'.
 */
export default { 
  name: 'TimelineCard',
  props: {
    /**
     * Título/Nome do evento.
     */
    title: {
      type: String
    },
    /**
     * Objeto contendo as datas iniciais e fianis deste evento.
     *    Ex => dates: { start: '2022', end: '2025' },
     */
    dates: {
      type: Object
    },
    /**
     * Instituição/Local do evento.
     */
    company: {
      type: String
    },
    /**
     * Descrição do evento.
     */
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
  transition: all 0.3s ease-in;
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
  margin: 0.5rem 0rem;
}
.timeline-card-description {
  color: var(--cinza);
  font-size: 1rem;
}
.timeline-card-container:hover .timeline-marker {
  background-color: gold;
}
</style>