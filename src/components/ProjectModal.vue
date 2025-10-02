<template>
  <v-dialog v-model="isOpen" persistent class="project-modal-container">
    <v-card class="project-modal-card">
      <v-card-title class="d-flex justify-space-between align-center">
        <span>{{ project?.name }}</span>
        <v-btn flat icon @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <v-img
          v-if="project?.imgPath"
          :src="project.imgPath"
          height="250"
          cover
          class="mb-4"
        ></v-img>
        <p class="project-modal-description">{{ project?.description }}</p>
      </v-card-text>

      <v-card-actions>
        <v-btn
          v-if="project?.urlSite"
          :href="project.urlSite"
          target="_blank"
          prepend-icon="mdi-web"
        >
          Site
        </v-btn>
        <v-btn
          v-if="project?.urlGithub"
          :href="project.urlGithub"
          target="_blank"
          prepend-icon="mdi-github"
        >
          GitHub
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
/**
 * Modal/Dialog aberto ao clickar sobre um card de projeto (ProjectCard.vue),
 * este irá apresentar em maiores detalhes as informações sobre o projeto selecionado.
 */
export default {
  name: 'ProjectModal',
  props: {
    /**
     * Flag para controle de exibição do modal/dialog.
     */
    showModal: {
      type: Boolean, 
      default: false 
    },
    /**
     * Informações do projeto 'clickado'.
     */
    project: {
      type: Object, 
      default: null 
    }
  },
  emits: ['update:showModal'],
  computed: {
    /**
     * Responsável por obter e também manipular, de forma indireta, o valor da props 'showModal'.
     */
    isOpen: {
      get() {
        return this.showModal;
      },
      set(val) {
        this.$emit('update:showModal', val);
      }
    }
  },
  methods: {
    /**
     * Fecha o modal/dialog.
     */
    close() {
      this.isOpen = false;
    }
  }
}
</script>
<style scoped>
.project-modal-container {
  max-width: 35rem;
  height: 37rem;
}
.project-modal-description {
  font-size: 0.875rem;
}
</style>