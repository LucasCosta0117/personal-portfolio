<template>
  <!-- NavBar Mobile -->
  <v-app-bar
    app
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
        :class="{ activeSection: currentSection == item.id }"
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
        :class="{ activeSection: currentSection == item.id }"
        class="ml-4 mt-2"
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
      ],
      currentSection: 'home'
    }
  },
  computed: {
    isMobile() {
      return this.windowWidth <= 960;
    },
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.currentSection = entry.target.id;
        }
      });
    }, options);

    this.menuItens.forEach(item => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });
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
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  border: 1px solid #afafafad;
  background-image: url("@/assets/images/profile_1.webp");
  background-position: center;
  background-size: cover;
}
.activeSection {
  color: gold;
}

/**
 * Dispositivos médios/grandes
 * Vuetify 'md' Break Point
 */
@media (min-width: 960px) {
  .navbar-profile-img {
    height: 10rem;
    width: 10rem;
    margin-left: 2rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    border: 3px solid #afafafad;
  }
}
</style>
