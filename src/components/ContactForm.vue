<template>
  <v-container>
    <form @submit.prevent="submit">
      <v-text-field
        v-model="form.name"
        :counter="20"
        :error-messages="errors.name"
        :label="$t('ContactForm.labels.name')"
        :placeholder="$t('ContactForm.placeholders.name')"
      ></v-text-field>

      <v-text-field
        v-model="form.phone"
        :counter="11"
        :error-messages="errors.phone"
        :label="$t('ContactForm.labels.phone')"
        :placeholder="$t('ContactForm.placeholders.phone')"
      ></v-text-field>

      <v-text-field
        v-model="form.email"
        :error-messages="errors.email"
        :label="$t('ContactForm.labels.email')"
        :placeholder="$t('ContactForm.placeholders.email')"
      ></v-text-field>

      <v-text-field
        v-model="form.subject"
        :error-messages="errors.subject"
        :label="$t('ContactForm.labels.subject')"
        :placeholder="$t('ContactForm.placeholders.subject')"
      ></v-text-field>

      <v-textarea
        class="message-area"
        v-model="form.message"
        :counter="300"
        :error-messages="errors.message"
        :label="$t('ContactForm.labels.message')"
        :placeholder="$t('ContactForm.placeholders.message')"
      ></v-textarea>

      <v-row justify="space-around">
        <v-btn type="submit" class="btn-submit-form">
          {{ $t('ContactForm.buttons.send') }}
        </v-btn>

        <v-btn class="btn-clear-form" @click.prevent="handleReset">
          {{ $t('ContactForm.buttons.clear') }}
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

/**
 * Formulário de contato que permite envio de mensagens por e-mail.
 * Utiliza a lib emailjs como api externa para gerenciar o envio dos emails.
 */
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
        this.errors.name = [this.$t('ContactForm.errors.name')];
        valid = false;
      }

      // phone: permite apenas numeros e hífen e tamanho mínimo 11
      if (!/^[0-9-]{11,}$/.test(String(this.form.phone || ''))) {
        this.errors.phone = [this.$t('ContactForm.errors.phone')];
        valid = false;
      }

      // email
      if (!/.+@.+\..+/.test(String(this.form.email || ''))) {
        this.errors.email = [this.$t('ContactForm.errors.email')];
        valid = false;
      }

      // subject
      if (!this.form.subject || this.form.subject.trim().length < 2) {
        this.errors.subject = [this.$t('ContactForm.errors.subject')];
        valid = false;
      }

      // message (máximo 300)
      if (this.form.message && this.form.message.length > 300) {
        this.errors.message = [this.$t('ContactForm.errors.message')];
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
          this.showMessage(this.$t('ContactForm.feedback.success'), 'success');
          this.handleReset();
        })
        .catch(error => {
           this.showMessage(this.$t('ContactForm.feedback.error') + (error?.text || error), 'error');
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
