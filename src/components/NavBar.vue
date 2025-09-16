<template>
  <!-- NavBar Mobile -->
  <v-app-bar
    flat
    class="dark-bg"
    v-if="isMobile"
  >
    <div class="ml-4 navbar-profile-img">Foto 3x4</div>
    <v-spacer></v-spacer>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  </v-app-bar>
  <!-- Drawer Mobile -->
  <v-navigation-drawer
    v-model="drawer"
    class="dark-bg"
    v-if="isMobile"
  >
    <v-list>
      <v-list-item
        v-for="item in menuItens" :key="item.id"
      >
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <!-- Navbar Desktop -->
  <v-navigation-drawer
    v-else
    class="dark-bg"
  >
    <v-list>
      <v-list-item>Foto 3x4</v-list-item>
      <v-divider></v-divider>
      <v-list-item
        v-for="item in menuItens" :key="item.id"
      >
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
/**
 * Barra de navegação (superior e lateral) da aplicação.
 */
export default {
  name: 'NavBar',
  data() {
    return {
      drawer: false,
      windowWidth: window.innerWidth,
      menuItens: [
        { text: 'Início', id: 'home'},
        { text: 'Sobre', id: 'about'},
        { text: 'Projetos', id: 'projects'},
        { text: 'Contato', id: 'contact'}
      ]
    }
  },
  computed: {
    isMobile() {
      return this.windowWidth <= 960;
    },
  },
  methods: {}
}
</script>

<style scoped>
.dark-bg {
  background-color: #011518;
  color: rgb(175, 175, 175);
}
</style>
