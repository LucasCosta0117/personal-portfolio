<template>
  <div class="home-container">
    <!-- Fixed Background Layer -->
    <div class="bg-layer" aria-hidden="true"></div>

    <!-- Main Content -->
    <div class="home-content">
      <NavBar></NavBar>
      <section id="home">
        <div class="main-title">
          <p>
            Oi, Eu sou
          </p>
          <div class="my-name">Lucas Costa</div>
        </div>
        <div class="sub-title">
          <p>
            Desenvolvedor de Software
          </p>
        </div>
        <div class="social-media">
          <span>Linkedin</span> |
          <span>Github</span>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'HelloWorld',
  components: {
    NavBar
  },
  data() {
    return {
      //
    }
  },
}
</script>
<style scoped>
.home-container {
  height: 100%;
  background: transparent;
}
.bg-layer {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(
      ellipse 80% 60% at 50% 0%,
      rgba(120, 180, 255, 0.25),
      transparent 70%
    ),
    #000000;
  background-repeat: no-repeat;
  background-size: cover;
}
.home-content {
  position: relative;
  z-index: 1;
  color: white;
  padding: 0 1rem;
}
.my-name {
  color: goldenrod;
  font-weight: 800;
  font-size: 6rem;
  line-height: 0.8;
}
.main-title {
  font-weight: bold;
  font-size: 2rem;
}
.sub-title {
  color: #afafaf;
  font-size: 1.3rem;
}
.social-media {
  color: #afafaf;
  font-size: 1.3rem;
}

/**
 * Pequenos dispositivos
 * Vuetify 'sm' Break Point
 */
@media (min-width: 600px) {

}

/**
 * Dispositivos médios/grandes
 * Vuetify 'md' Break Point
 */
@media (min-width: 960px) {

}
</style>
