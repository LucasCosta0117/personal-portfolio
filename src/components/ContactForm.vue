<template>
  <v-container>
    <form @submit.prevent="submit">
      <v-text-field
        v-model="form.name"
        :counter="20"
        :error-messages="errors.name"
        :label="label.name"
        :placeholder="placeholder.name"
      ></v-text-field>

      <v-text-field
        v-model="form.phone"
        :counter="11"
        :error-messages="errors.phone"
        :label="label.phone"
        :placeholder="placeholder.phone"
      ></v-text-field>

      <v-text-field
        v-model="form.email"
        :error-messages="errors.email"
        :label="label.email"
        :placeholder="placeholder.email"
      ></v-text-field>

      <v-text-field
        v-model="form.subject"
        :error-messages="errors.subject"
        :label="label.subject"
        :placeholder="placeholder.subject"
      ></v-text-field>

      <v-textarea
        class="message-area"
        v-model="form.message"
        :counter="300"
        :error-messages="errors.message"
        :label="label.message"
        :placeholder="placeholder.message"
      ></v-textarea>

      <v-row justify="space-around">
        <v-btn
          type="submit"
          class="btn-submit-form"
        >
          Enviar
        </v-btn>

        <v-btn
          class="btn-clear-form"
          @click.prevent="handleReset"
        >
          Limpar
        </v-btn>
      </v-row>
    </form>

    <v-snackbar
      v-model="snackbar"
      :timeout="3000"
      :color="snackbarColor"
      location="top"
    >
      {{ snackbarText }}
      <template v-slot:actions>
        <v-btn icon @click="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  name: 'ContactForm',
  data() {
    return {
      snackbar: false,
      snackbarText: '',
      snackbarColor: 'success',
      form: {
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      },
      errors: {
        name: null,
        phone: null,
        email: null,
        subject: null,
        message: null
      },
      label: {
        name: 'Nome',
        phone: 'Telefone',
        email: 'E-mail',
        subject: 'Assunto',
        message: 'Mensagem'
      },
      placeholder: {
        name: 'Lucas Costa',
        phone: '75 99189-6258',
        email: 'contato@mail.com',
        subject: 'Sobre o que deseja falar?',
        message: 'Compartilhe seu sonho ou envie sua proposta'
      }
    }
  },
  methods: {
    resetErrors() {
      this.errors = {
        name: null,
        phone: null,
        email: null,
        subject: null,
        message: null
      }
    },
    validateAll() {
      // reseta erros
      this.resetErrors();
      let valid = true;

      // name
      if (!this.form.name || this.form.name.trim().length < 2) {
        this.errors.name = ['O nome precisa ter pelo menos 2 caracteres.'];
        valid = false;
      }

      // phone: permite apenas numeros e hífen e tamanho mínimo 11
      if (!/^[0-9-]{11,}$/.test(String(this.form.phone || ''))) {
        this.errors.phone = ['O número precisa ter pelo menos 11 dígitos (Incluindo o DDD e sem espaços).'];
        valid = false;
      }

      // email
      if (!/.+@.+\..+/.test(String(this.form.email || ''))) {
        this.errors.email = ['E-mail fornecido não é válido.'];
        valid = false;
      }

      // subject
      if (!this.form.subject || this.form.subject.trim().length < 2) {
        this.errors.subject = ['O assunto para o e-mail precisa ter pelo menos 2 caracteres.'];
        valid = false;
      }

      // message (máximo 300)
      if (this.form.message && this.form.message.length > 300) {
        this.errors.message = ['Mensagem muito longa, reduza para 300 caracteres.'];
        valid = false;
      }

      return valid;
    },
    formatDateNow() {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const year = now.getFullYear();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      return `${day}/${month}/${year} - ${hours}:${minutes}`;
    },
    submit() {
      if (!this.validateAll()) {
        return;
      }

      const serviceID = process.env.VUE_APP_EMAILJS_SERVICE_ID;
      const templateID = process.env.VUE_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.VUE_APP_EMAILJS_PUBLIC_KEY;

      const dateFormated = this.formatDateNow();

      const templateParams = {
        title: 'Portfolio Contact',
        time: dateFormated,
        name: this.form.name,
        email: this.form.email,
        phone: this.form.phone,
        subject: this.form.subject,
        message: this.form.message
      }
      // inicia o emailjs com a public_key
      emailjs.init(publicKey);

      // chama emailjs
      emailjs.send(serviceID, templateID, templateParams)
        .then(() => {
          this.showMessage('Mensagem enviada com sucesso!', 'success');
          this.handleReset();
        })
        .catch(error => {
           this.showMessage('Erro ao enviar: ' + (error?.text || error), 'error');
        });
    },
    handleReset() {
      this.form = {
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      }
      this.resetErrors()
    },
    showMessage(message, color) {
      this.snackbarText = message;
      this.snackbarColor = color;
      this.snackbar = true;
    },
  }
}
</script>

<style scoped>
.message-area {
  margin-bottom: 1.5rem;
}
.btn-submit-form {
  background-color: goldenrod;
  color: white;
}
.btn-clear-form {
  background-color: #4e4e4e;
}

/* Breakpoints */
@media (min-width: 600px) {
  .btn-submit-form {
    min-width: 12rem;
  }
  .btn-clear-form {
    min-width: 12rem;
  }
}
</style>
