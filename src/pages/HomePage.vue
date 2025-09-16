<template>
  <div class="min-h-screen w-full relative app-background">
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
.app-background {
  min-height: 100vh;
  width: 100%;
  position: relative;
  background: #000;
  color: white;
}
.app-background::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  background: radial-gradient(
    ellipse 80% 60% at 50% 0%,
    rgba(120, 180, 255, 0.25),
    transparent 70%
  );
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
