<template>
  <div class="project-card-container" :style="{ backgroundImage: `url(${imgPath})` }">
    <div class="project-card-hover">
      <span class="mdi mdi-plus-circle-outline"></span>
      <h3>{{ name }}</h3>
      <p>{{ type }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProjectCard',
  props: {
    imgPath: {
      type: String
    },
    name: {
      type: String
    },
    type: {
      type: String
    }
  }
}
</script>
<style scoped>
  .project-card-container {
    /* Important Variables */
    --cinza: #afafaf;
    --cinza-opaco: #4e4e4ee1;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .project-card-container:hover {
    background-size: 102%;
  }
  .project-card-container::after {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--cinza-opaco);
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  .project-card-container:hover::after {
    opacity: 1;
  }
  .project-card-hover {
    display: none;
  }
  .project-card-hover span {
    margin-bottom: 2rem;
    font-size: 3.5rem;
    color: gold;
  }
  .project-card-hover h3 {
    font-size: 1.25rem;
    font-weight: 400;
  }
  .project-card-hover p {
    color: var(--cinza);
    font-size: 0.875rem;
  }
  .project-card-container:hover .project-card-hover {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 90%;
    justify-content: end;
    align-items: center;
    padding: 1.5rem;
    border: 1px solid var(--cinza);
    z-index: 1;
  }
</style>