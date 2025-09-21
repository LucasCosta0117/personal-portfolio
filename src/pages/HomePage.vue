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
        <div class="education-resume">
          <div v-for="educ in educationList" :key="educ.title">
            <TimelineCard
              :title="educ.title"
              :dates="educ.dates"
              :company="educ.company"
              :description="educ.description"
            />
          </div>
        </div>
        <div class="experience-resume">

        </div>
      </section>
      <section id="services">
        <SectionTitle :title="servicesTitle"/>
        <div class="section-service-cards">
          <div v-for="serv in servicesList" :key="serv.title">
            <ServiceCard
              :title="serv.title"
              :icon="serv.icon"
              :description="serv.description"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue';
import ServiceCard from '@/components/ServiceCard.vue';
import TimelineCard from '@/components/TimelineCard.vue';

export default {
  name: 'HelloWorld',
  components: {
    SectionTitle,
    ServiceCard,
    TimelineCard
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
          icon: 'mdi mdi-monitor-cellphone',
          description: 'Sites institucionais e landing pages otimizadas para performance e SEO, garantindo boa experiência ao usuário em qualquer dispositivo.'
        },
        {
          title: 'Integração de APIs',
          icon: 'mdi mdi-lan-connect',
          description: 'Conexão de sistemas através de APIs RESTful e integrações seguras entre diferentes plataformas e ferramentas.'
        },
        {
          title: 'Banco de Dados',
          icon: 'mdi mdi-database-arrow-left',
          description: 'Modelagem, implementação e otimização de bancos de dados relacionais e não-relacionais.'
        },
        {
          title: 'Desenvolvimento Full Stack',
          icon: 'mdi mdi-webpack',
          description: 'Criação de aplicações modernas, seguras e escaláveis, unindo back-end robusto com front-end responsivo e otimizado.'
        },
        {
          title: 'DevOps & Deploy',
          icon: 'mdi mdi-console',
          description: 'Conhecimento de processos de build, testes e deploy, com experiência em Docker, CI/CD e serviços em nuvem.'
        },
        {
          title: 'Soluções SaaS',
          icon: 'mdi mdi-hexagon-multiple',
          description: 'Experiência no desenvolvimento e manutenção de sistemas SaaS multi-tenant para o mercado.'
        }
      ],
      educationList: [
        {
          title: 'Desenvolvedor de Software',
          dates: { start: '2023', end: 'Atual' },
          company: 'Simova',
          description: 'Experiência no desenvolvimento e manutenção de sistemas SaaS multi-tenant para o mercado.'
        },
        {
          title: 'Estágio Desenv. Software',
          dates: { start: '2021', end: '2023' },
          company: 'Simova',
          description: 'Experiência no desenvolvimento e manutenção de sistemas SaaS multi-tenant para o mercado.'
        }
      ]
    }
  },
}
</script>
<style scoped>
.home-container {
  /* Important Variables */
  --cinza: #afafaf;
  --azul-claro: #0A101E;

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
      ellipse 80% 50% at 50% 0%,
      rgba(120, 180, 255, 0.25),
      transparent 70%
    ),
    var(--azul-claro);
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
.section-service-cards {
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
