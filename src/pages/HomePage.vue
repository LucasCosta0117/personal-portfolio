<template>
  <div class="home-container">
    <!-- Fixed Background Layer -->
    <div class="bg-layer" aria-hidden="true"></div>

    <!-- Main Content -->
    <div class="main-content">
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
        <div class="presentation">
          <div class="presentation-profile-img"></div>
          <div class="presentation-info">
            <div class="presentation-text">
              <h3 class="presentation-text-greet">{{ aboutGreet }}</h3>
              <h4 class="presentation-text-position">{{ aboutPosition }}</h4>
              <p class="presentation-text-desc"> {{ aboutPresentation }}</p>
            </div>
            <img
              class="langs-stats"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=lucascosta0117&layout=compact&langs_count=4&theme=vision-friendly-dark&locale=pt-br"
            />
            <BtnDownloadFile/>
          </div>
        </div>
        <div class="resume-info">
          <div class="education-resume">
            <div class="resume-info-title">
              <span class="mdi mdi-school"></span>
              <h3>{{ educationTitle }}</h3>
            </div>
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
            <div class="resume-info-title">
              <span class="mdi mdi-badge-account-horizontal-outline"></span>
              <h3>{{ experienceTitle }}</h3>
            </div>
            <div v-for="exp in experienceList" :key="exp.title">
              <TimelineCard
                :title="exp.title"
                :dates="exp.dates"
                :company="exp.company"
                :description="exp.description"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="services">
        <SectionTitle :title="servicesTitle"/>
        <div class="section-service-cards">
          <div v-for="serv in servicesList" :key="serv.title" class="service-card-item">
            <ServiceCard
              :title="serv.title"
              :icon="serv.icon"
              :description="serv.description"
            />
          </div>
        </div>
      </section>
      <section id="projects">
        <SectionTitle :title="projectsTitle"/>
        <div class="projects-cards">
          <div v-for="proj in projectsList" :key="proj.name" class="project-card-item">
            <ProjectCard
              :imgPath="proj.imgPath"
              :name="proj.name"
              :type="proj.type"
              @click="openModal(proj)"
            />
          </div>
        </div>
        <ProjectModal
          v-model:showModal="showModal"
          :project="selectedProject"
        />
      </section>
      <section id="contact">
        <SectionTitle :title="contactTitle"/>
        <div class="contact-container">
          <div class="contact-form">
            <h3 class="contact-info-title ml-4 mb-1">{{ formTitle }}</h3>
            <ContactForm />
          </div>
          <div class="contact-info-container">
            <h3 class="contact-info-title">{{ infoTitle }}</h3>
            <p class="contact-info-description">{{ infoDescription }}</p>
            <div class="contact-info-item">
              <span class="mdi mdi-email-check-outline contact-info-icon"></span>
              <div>
                <h4>{{ infoEmail.layer }}</h4>
                <p>{{ infoEmail.value }}</p>
              </div>
            </div>
            <div class="contact-info-item">
              <span class="mdi mdi-phone-dial contact-info-icon"></span>
              <div class="contact-info-phone-text">
                <h4>{{ infoPhone.layer }}</h4>
                <a :href="infoPhone.whatsUrl" target="_blank" :title="infoPhone.layer">
                  <p>{{ infoPhone.value }}</p>
                </a>
              </div>
            </div>
            <div class="contact-info-item">
              <span class="mdi mdi-linkedin contact-info-icon"></span>
              <div class="contact-info-address-text">
                <h4>{{ linkedin.title }}</h4>
                <a :href="linkedin.url" target="_blank" :title="linkedin.title">
                  <p>{{ linkedin.tinyUrl }}</p>
                </a>
              </div>
            </div>
            <div class="contact-info-item">
              <span class="mdi mdi-map-marker contact-info-icon"></span>
              <div class="contact-info-address-text">
                <h4>{{ infoAddress.layer }}</h4>
                <p>{{ infoAddress.value }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterPage :urlGithub="github.url"/>
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue';
import ServiceCard from '@/components/ServiceCard.vue';
import TimelineCard from '@/components/TimelineCard.vue';
import BtnDownloadFile from '@/components/BtnDownloadFile.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import ProjectModal from '@/components/ProjectModal.vue';
import ContactForm from '@/components/ContactForm.vue';
import FooterPage from '@/components/FooterPage.vue';

/**
 * Página principal da aplicação, contem os componentes e os dados utilizados no portfólio.
 */
export default {
  name: 'HelloWorld',
  components: {
    SectionTitle,
    ServiceCard,
    TimelineCard,
    BtnDownloadFile,
    ProjectCard,
    ProjectModal,
    ContactForm,
    FooterPage
  },
  data() {
    return {
      linkedin: {
        title: 'Linkedin',
        url: 'https://www.linkedin.com/in/lucas-costa-5a14a8239/',
        tinyUrl: 'linkedin.com/in/lucas-costa-5a14a8239'
      },
      github: {
        title: 'Github',
        url: 'https://github.com/LucasCosta0117',
      },
      aboutTitle: 'Sobre',
      aboutGreet: 'Olá, satisfação tê-lo aqui!',
      aboutPosition: 'Desenvolvedor de Software',
      aboutPresentation: 'Sou um Desenvolvedor de Software Full Stack com mais de 3 anos de experiência.'
        + ' Entrego código limpo, arquiteturas robustas e interfaces responsivas.'
        + ' Minhas habilidades abragem websites profissionais, soluções SaaS, APIs seguras e integração com bancos de dados diversos.'
        + ' Meu objetivo é entregar softwares confiáveis, eficientes e de fácil usabilidade.',
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
      educationTitle: 'Formação',
      educationList: [
        {
          title: 'Análise e Desenvolvimento de Sistemas',
          dates: { start: '2022', end: '2025' },
          company: 'UNIFACS',
          description: 'Curso Superior de Tecnologia em Análise de Sistemas de Computação pela Universidade Salvador.'
        },
        {
          title: 'Engenharia Civil',
          dates: { start: '2014', end: '2025' },
          company: 'UFBA',
          description: 'Bacharelado em Engenharia Civil pela Universidade Federal da Bahia.'
        }
      ],
      experienceTitle: 'Experiência',
      experienceList: [
        {
          title: 'Desenvolvedor de Software',
          dates: { start: '2022', end: 'Atual' },
          company: 'Simova',
          description: 'Desenvolvedor Full Stack responsável pela implementação de novas features, suporte e correção de bugs em uma aplicação robusta de tipo SaaS.'+
          ' Atuando principalmente com as linguagens PHP e VueJs para garantir a melhoria contínua do produto.'
        },
        {
          title: 'Sócio e Diretor Comercial',
          dates: { start: '2021', end: '2022' },
          company: 'Moderna Manutenção Pedrial',
          description: 'Responsável pela gestão das operações comerciais e participação ativa na coordenação e acompanhamento técnico dos projetos da empresa.'
        }
      ],
      projectsTitle: 'Projetos',
      projectsList: [
        { 
          imgPath: require('@/assets/images/project-b2.webp'),
          name: 'B2 Engenharia', 
          type: 'Site Institucional',
          urlSite: 'https://engenhariab2.com/',
          urlGithub: 'https://github.com/LucasCosta0117/b2-engenharia',
          description: 'Site institucional desenvolvido para empresa B2 Engenharia e Construção. '+
            'Design elaborado no Figma e executado em VueJs 3 com Vuetify.'
        },
        { 
          imgPath: require('@/assets/images/project-salus.webp'),
          name: 'Salus Ebook', 
          type: 'Landing Page',
          urlSite: 'https://www.salusbooks.com.br/',
          urlGithub: 'https://github.com/LucasCosta0117/landing-page-enxaqueca',
          description: 'Landing Page criada para Salus Book para venda do livro digital sobre enxaqueca . '+
            'Design próprio e executado em VueJs 3.'
        },
        { 
          imgPath: require('@/assets/images/project-fin.webp'), 
          name: 'Simulador de Financiamento', 
          type: 'Aplicação Web',
          urlSite: 'https://lucascosta0117.github.io/Simulador-Financiamento/',
          urlGithub: 'https://github.com/LucasCosta0117/Simulador-Financiamento',
          description: 'Aplicação que permite realizar uma simulação de financiamento do tipo SAC (Sistema de Amortização Constante), '+
          'com e sem período de carência. Design próprio e executado em HTML + CSS + JS.'
        }
      ],
      showModal: false,
      selectedProject: null,
      contactTitle: 'Contato',
      formTitle: 'Envie sua mensagem',
      infoTitle: 'Informações Para Contato',
      infoDescription: 'Ficou interessado? Deseja me fazer uma proposta? Ou gostaria de desenvolver seu projeto comigo? '+
        'É fácil, basta mandar uma mensagem através do formulário, ou, para um dos canais abaixo, será um prazer falar com você!',
      infoEmail: { layer: 'Email', value: 'lucasscosta.dev@gmail.com' },
      infoPhone: { layer: 'Telefone / Whatsapp', value: '+55 75 991896258', whatsUrl: 'http://api.whatsapp.com/send/?phone=5575991896258' },
      infoAddress: { layer: 'Endereço', value: 'São Paulo, SP - Brasil' }
    }
  },
  methods: {
    openModal(proj) {
      this.showModal = true;
      this.selectedProject = proj;
    }
  }
}
</script>
<style scoped>
.home-container {
  /* Important Variables */
  --cinza: #afafaf;
  --cinza-escuro: #4e4e4e;
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
.main-content {
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
.presentation {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
}
.presentation-profile-img {
  width: 100%;
  height: 20rem;
  border-radius: 0.5rem;
  border: 1px solid var(--cinza-escuro);
  background-image: url("@/assets/images/profile_2.webp");
  background-position: top;
  background-size: cover;
}
.presentation-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
}
.presentation-text {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.presentation-text-greet {
  font-size: 1.75rem;
  font-weight: 400;
}
.presentation-text-position {
  font-size: 1.25rem;
  font-weight: 400;
  color: gold;
}
.presentation-text-desc {
  font-size: 1rem;
  font-weight: 300;
  color: var(--cinza);
}
.langs-stats {
  width: 100%;
}
.resume-info {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
.resume-info-title {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
}
.resume-info-title span {
  color: var(--cinza-escuro);
  font-size: 3rem;
}
.resume-info-title h3 {
  font-weight: 400;
  font-size: 2rem;
}
.section-service-cards {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.projects-cards {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.project-card-item {
  height: 20rem;
}
.contact-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
.contact-info-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.contact-info-title {
  font-size: 1.5rem;
  font-weight: 400;
}
.contact-info-description {
  font-size: 1rem;
  color: var(--cinza);
}
.contact-info-item {
  display: flex;
  align-items: start;
  gap: 2rem;
}
.contact-info-item h4 {
  font-size: 1.2rem;
  font-weight: 400;
}
.contact-info-item p {
  color: var(--cinza);
}
.contact-info-item a {
  text-decoration: none;
  cursor: pointer;
  color: goldenrod;
}
.contact-info-item a:hover p {
  color: goldenrod;
}
.contact-info-icon {
  color: var(--cinza);
  border: solid 1px var(--cinza);
  border-radius: 0.8rem;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
}
/**
 * Pequenos dispositivos
 * Vuetify 'sm' Break Point
 */
@media (min-width: 600px) {
  .main-content {
    padding: 0 2rem;
  }
  .presentation-profile-img {
    height: 36rem;
  }
  .langs-stats {
    width: 23rem;
  }
  .section-service-cards {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .service-card-item {
    width: 47.5%;
    height: 22rem;
  }
  .projects-cards {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .project-card-item {
    width: 47.5%;
  }
}

/**
 * Dispositivos médios/grandes
 * Vuetify 'md' Break Point
 */
@media (min-width: 960px) {
  .bg-layer {
    background:
      radial-gradient(
        ellipse 70% 65% at 60% 0%,
        rgba(120, 180, 255, 0.25),
        transparent 70%
      ),
      var(--azul-claro);
  }
  .main-content {
    max-width: 1100px;
  }
  .presentation {
    flex-direction: row;
    margin-bottom: 5rem;
  }
  .presentation-profile-img {
    width: 150rem;
    height: 33rem;
  }
  .resume-info {
    flex-direction: row;
  }
  .education-resume {
    width: 50%;
  }
  .experience-resume {
    width: 50%;
  }
  .service-card-item {
    width: 31%;
    height: 20rem;
  }
  .project-card-item {
    width: 31%;
  }
  .contact-container {
    flex-direction: row;
    gap: 1rem;
  }
  .contact-form {
    width: 60%;
  }
  .contact-info-container {
    width: 40%;
  }
}
</style>
