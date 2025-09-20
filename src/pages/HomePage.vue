<template>
  <div class="home-container">
    <!-- Fixed Background Layer -->
    <div class="bg-layer" aria-hidden="true"></div>

    <!-- Main Content -->
    <div class="home-content">
      <section id="home">
        <div class="main-title">
          <p>
            Olá, Eu sou
          </p>
          <div class="my-name">Lucas Costa</div>
        </div>
        <div class="sub-title">
          <p>
            Desenvolvedor de Software
          </p>
        </div>
        <div class="social-media">
          <a :href="linkedin.url" target="_blank" :title="linkedin.title">
            <span class="mdi mdi-linkedin"></span>
          </a>
          <a :href="github.url" target="_blank" :title="github.title">
            <span class="mdi mdi-github"></span>
          </a>
        </div>
      </section>
      <section id="about">
        <SectionTitle :title="aboutTitle"/>
      </section>
      <section id="about">
        <SectionTitle :title="servicesTitle"/>
        <ServiceCard
          v-for="serv in servicesList" :key="serv.title"
          :title="serv.title"
          :icon="serv.icon"
          :description="serv.description"
        />
      </section>
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue';
import ServiceCard from '@/components/ServiceCard.vue';

export default {
  name: 'HelloWorld',
  components: {
    SectionTitle,
    ServiceCard
  },
  data() {
    return {
      linkedin: {
        title: 'Linkedin',
        url: 'https://www.linkedin.com/in/lucas-costa-5a14a8239/',
      },
      github: {
        title: 'Github',
        url: 'https://github.com/LucasCosta0117',
      },
      aboutTitle: 'Sobre',
      servicesTitle: 'Serviços',
      servicesList: [
        {
          title: 'Criação de Websites',
          icon: 'mdi mdi-webpack',
          description: 'Sites institucionais e landing pages otimizadas para performance e SEO, garantindo boa experiência ao usuário em qualquer dispositivo'
        },
        {
          title: 'Criação de Websites',
          icon: 'mdi mdi-webpack',
          description: 'Sites institucionais e landing pages otimizadas para performance e SEO, garantindo boa experiência ao usuário em qualquer dispositivo'
        },
        {
          title: 'Criação de Websites',
          icon: 'mdi mdi-webpack',
          description: 'Sites institucionais e landing pages otimizadas para performance e SEO, garantindo boa experiência ao usuário em qualquer dispositivo'
        },
        {
          title: 'Criação de Websites',
          icon: 'mdi mdi-webpack',
          description: 'Sites institucionais e landing pages otimizadas para performance e SEO, garantindo boa experiência ao usuário em qualquer dispositivo'
        },
        {
          title: 'Criação de Websites',
          icon: 'mdi mdi-webpack',
          description: 'Sites institucionais e landing pages otimizadas para performance e SEO, garantindo boa experiência ao usuário em qualquer dispositivo'
        },
        {
          title: 'Criação de Websites',
          icon: 'mdi mdi-webpack',
          description: 'Sites institucionais e landing pages otimizadas para performance e SEO, garantindo boa experiência ao usuário em qualquer dispositivo'
        },
      ]
    }
  },
}
</script>
<style scoped>
.home-container {
  /* Important Variables */
  --cinza: #afafaf;

  /* CSS */
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
#home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
}
.my-name {
  color: goldenrod;
  font-weight: bold;
  font-size: 7rem;
  line-height: 0.8;
}
.main-title {
  font-weight: bold;
  font-size: 2rem;
}
.sub-title {
  color: var(--cinza);
  font-size: 1.2rem;
}
.social-media {
  display: flex;
  gap: 2rem;
}
.social-media a {
  background: transparent;
  color: var(--cinza);
  border: solid 1px var(--cinza);
  border-radius: 0.8rem;
  padding: 0.2rem 0.6rem;
  text-decoration: none;
  font-size: 1.5rem;
}
.social-media a:hover{
  color: goldenrod;
  border: solid 1px goldenrod;
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
