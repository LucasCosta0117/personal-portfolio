<template>
  <div class="home-container">
    <!-- Fixed Background Layer -->
    <div class="bg-layer" aria-hidden="true"></div>

    <!-- Main Content -->
    <div class="home-content">
      <NavBar></NavBar>
      <div>
        <p>
          Page body content
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique vehicula feugiat. Fusce rutrum gravida
          libero, at maximus lorem ultrices non. Phasellus et nunc rhoncus, consectetur odio id, tristique magna. Sed
          consequat accumsan magna eget aliquam. Fusce a consectetur erat. Morbi feugiat, mauris at porttitor ullamcorper,
          nisl magna facilisis ante, eget sollicitudin arcu enim vel neque. Etiam nec diam orci. Ut ac massa fringilla nunc
          mattis blandit. Aenean id velit quis est sodales congue nec vel nulla. Proin volutpat, ante et euismod cursus,
          nunc massa maximus purus, sit amet auctor sapien leo eu lectus.
        </p>
      </div>
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
