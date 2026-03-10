<template>
  <div class="home-container">
    <!-- Fixed Background Layer -->
    <div class="bg-layer" aria-hidden="true"></div>

    <!-- Main Content -->
    <div class="main-content">
      <section id="home">
        <div class="main-title">
          <p data-aos="fade-right" data-aos-duration="1500">
            {{ $t('home.greet') }}
          </p>
          <div class="my-name" data-aos="fade-down" data-aos-duration="1200" data-aos-easing="linear">Lucas Costa</div>
        </div>
        <div class="sub-title" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in">
          <p>{{ $t('home.role') }}</p>
        </div>
        <div class="social-media" data-aos="fade-up" data-aos-duration="1400" data-aos-easing="ease-in">
          <a :href="linkedin.url" target="_blank" :title="linkedin.title">
            <span class="mdi mdi-linkedin"></span>
          </a>
          <a :href="github.url" target="_blank" :title="github.title">
            <span class="mdi mdi-github"></span>
          </a>
        </div>
      </section>

      <section id="about">
        <SectionTitle :title="$t('about.title')"/>
        <div class="presentation">
          <div class="presentation-profile-img" data-aos="fade-up" data-aos-duration="800" data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-in"></div>
          <div class="presentation-info" data-aos="fade-up" data-aos-duration="1300" data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-in">
            <div class="presentation-text">
              <h3 class="presentation-text-greet">{{ $t('about.greet') }}</h3>
              <h4 class="presentation-text-position">{{ $t('home.role') }}</h4>
              <p class="presentation-text-desc">{{ $t('about.presentation') }}</p>
            </div>
            <GithubStats />
            <BtnDownloadFile/>
          </div>
        </div>
        <div class="resume-info">
          <div class="education-resume" data-aos="fade-right" data-aos-duration="1500">
            <div class="resume-info-title">
              <span class="mdi mdi-school"></span>
              <h3>{{ $t('about.educationTitle') }}</h3>
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
          <div class="experience-resume" data-aos="fade-down" data-aos-duration="1500">
            <div class="resume-info-title">
              <span class="mdi mdi-badge-account-horizontal-outline"></span>
              <h3>{{ $t('about.experienceTitle') }}</h3>
            </div>
            <div v-for="exp in experienceList" :key="exp.title">
              <TimelineCard
                :title="exp.title"
                :dates="exp.dates"
                :company="exp.company"
                :description="exp.description"
                :tags="exp.tags"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <SectionTitle :title="$t('services.title')"/>
        <div class="section-service-cards">
          <div 
            v-for="serv in servicesList" :key="serv.title" 
            class="service-card-item"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-anchor-placement="bottom-bottom"
          >
            <ServiceCard
              :title="serv.title"
              :icon="serv.icon"
              :description="serv.description"
            />
          </div>
        </div>
      </section>

      <section id="projects">
        <SectionTitle :title="$t('projects.title')"/>
        <div class="projects-cards">
          <div 
            v-for="proj in projectsList" :key="proj.name" 
            class="project-card-item"
            data-aos="flip-up"
            data-aos-duration="800"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-easing="ease-in"
            @click="openModal(proj)"
          >
            <ProjectCard
              :imgPath="proj.imgPath"
              :name="proj.name"
              :type="proj.type"
            />
          </div>
        </div>
        <ProjectModal
          v-model:showModal="showModal"
          :project="selectedProject"
        />
      </section>

      <section id="contact">
        <SectionTitle :title="$t('contact.title')"/>
        <div class="contact-container">
          <div class="contact-form" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in">
            <h3 class="contact-info-title ml-4 mb-1">{{ $t('contact.formTitle') }}</h3>
            <ContactForm />
          </div>
          <div class="contact-info-container" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in">
            <h3 class="contact-info-title">{{ $t('contact.infoTitle') }}</h3>
            <p class="contact-info-description">{{ $t('contact.infoDescription') }}</p>
            <div class="contact-info-item">
              <span class="mdi mdi-email-check-outline contact-info-icon"></span>
              <div>
                <h4>{{ $t('contact.emailLabel') }}</h4>
                <p>lucasscosta.dev@gmail.com</p>
              </div>
            </div>
            <div class="contact-info-item">
              <span class="mdi mdi-phone-dial contact-info-icon"></span>
              <div class="contact-info-phone-text">
                <h4>{{ $t('contact.phoneLabel') }}</h4>
                <a href="http://api.whatsapp.com/send/?phone=5575991896258" target="_blank" :title="$t('contact.phoneLabel')">
                  <p>+55 75 99189-6258</p>
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
                <h4>{{ $t('contact.addressLabel') }}</h4>
                <p>{{ $t('contact.addressValue') }}</p>
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
import GithubStats from '@/components/GithubStats.vue';

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
    FooterPage,
    GithubStats
  },
  data() {
    return {
      showModal: false,
      selectedProject: null,
      linkedin: {
        title: 'Linkedin',
        url: 'https://www.linkedin.com/in/lucas-costa-5a14a8239/',
        tinyUrl: 'linkedin.com/in/lucas-costa-5a14a8239'
      },
      github: {
        title: 'Github',
        url: 'https://github.com/LucasCosta0117',
      }
    }
  },
  computed: {
    // Listas baseadas no idioma atual
    educationList() { 
      return this.$tm('about.educationList');
    },
    experienceList() { 
      return this.$tm('about.experienceList'); 
    },
    servicesList() {
      return this.$tm('services.items').map((s, index) => ({ ...s, icon: this.getServiceIcon(index) }));
    },
    projectsList() {
      const images = [
        require('@/assets/images/project-b2.webp'),
        require('@/assets/images/project-salus.webp'),
        require('@/assets/images/project-pdv.webp')
      ];
      return this.$tm('projects.items').map((p, i) => ({ ...p, imgPath: images[i] }));
    }
  },
  methods: {
    openModal(proj) {
      this.showModal = true;
      this.selectedProject = proj;
    },
    getServiceIcon(index) {
      const icons = ['mdi-monitor-cellphone', 'mdi-lan-connect', 'mdi-database-arrow-left', 'mdi-webpack', 'mdi-console', 'mdi-hexagon-multiple'];
      return `mdi ${icons[index]}`;
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
    height: 35rem;
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
