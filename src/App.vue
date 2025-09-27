<template>
  <v-app>
    <NavBar></NavBar>
    <v-main>
      <HomePage/>
    </v-main>
  </v-app>
</template>

<script>
import HomePage from './pages/HomePage.vue'
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    HomePage,
    NavBar
  },
  data: () => ({
    //
  }),
}
</script>
<style>
</style>
