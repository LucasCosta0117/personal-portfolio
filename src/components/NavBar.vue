<template>
  <!-- NavBar Mobile -->
  <v-app-bar
    flat
    height="80"
    class="dark-bg"
    v-if="isMobile"
  >
    <div class="ml-4 navbar-profile-img"></div>
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
        v-for="item in menuItens" 
        :key="item.id"
        @click="scrollToSection(item.id)"
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
      <v-list-item>
        <div class="navbar-profile-img"></div>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item
        v-for="item in menuItens" 
        :key="item.id"
        @click="scrollToSection(item.id)"
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
        { text: 'Serviços', id: 'services'},
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
  methods: {
    scrollToSection(id) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        this.drawer = false;
      }
    }
  }
}
</script>

<style scoped>
.dark-bg {
  background-color: #070D1B;
  color: #afafaf;
}
.navbar-profile-img {
  height: 48px;
  width: 48px;
  border-radius: 1rem;
  border: 1px solid #afafafad;
  background-image: url("@/assets/profile_3x4.jpg");
  background-position: center;
  background-size: cover;
}
</style>
