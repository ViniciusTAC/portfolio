<template>
  <v-container style="max-width: 100vw; height: auto;">
    <br>
    <v-container>
      <v-row justify="center">
        <h1>
          Entre em contato <span style="color: #cd00cd;">Comigo!</span>
        </h1>
      </v-row>
      <br><br>
      <v-form v-model="form" @submit.prevent="enviar">
        <v-row justify="center">
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="dados.nome"
              clearable
              variant="outlined"
              :rules="[obrigatorio]"
              label="Nome completo"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="dados.email"
              clearable
              variant="outlined"
              :rules="[obrigatorio, emailValido]"
              label="Email"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="dados.telefone"
              clearable
              variant="outlined"
              v-mask="'(##) # ####-####'"
              :rules="[obrigatorio, telefoneCompleto]"
              label="Telefone de contato"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="dados.assunto"
              clearable
              variant="outlined"
              :rules="[obrigatorio]"
              label="Assunto"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" sm="12" md="12">
            <v-textarea
              auto-grow
              v-model="dados.mensagem"
              counter
              clearable
              :rules="[obrigatorio]"
              label="Mensagem..."
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-btn variant="tonal" color="primary" type="submit">
            <v-icon icon="mdi-send" start></v-icon> Enviar mensagem
          </v-btn>
        </v-row>
      </v-form>
    </v-container>
    <v-dialog v-model="dialog" width="auto">
      <v-card max-width="400" :color="this.colorRetorno" prepend-icon="mdi-account-box-outline" :text="this.texto"
        title="Retorno do envio de contato">
        <template v-slot:actions>
          <v-btn class="ms-auto" text="Fechar" @click="dialog = false"></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
// Importando emailjs-com
import emailjs from 'emailjs-com';

export default {
  name: "Contato",
  data: () => ({
    form: false,
    dados: {
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: '',
    },
    dialog: false,
    texto: '',
    colorRetorno: '',
    // Regras de validação
    obrigatorio: v => !!v || 'Campo é obrigatório',
    telefoneCompleto: v => (v && v.length === 16) || 'Telefone incompleto',
    emailValido: v => {
      const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      return regex.test(v) || 'E-mail inválido';
    }
  }),

  methods: {
    enviar() {
      if (!this.form) return;

      emailjs.init("Y3ToB7YpKMHwfV__d");

      emailjs.send('service_4c9jfwh', 'template_rnaa6q6', {
        nome: this.dados.nome,
        email: this.dados.email,
        telefone: this.dados.telefone,
        assunto: this.dados.assunto,
        mensagem: this.dados.mensagem,
      })
        .then(response => {
          this.dados = {
            nome: '',
            email: '',
            telefone: '',
            assunto: '',
            mensagem: ''
          };

          this.dialog = true;
          this.colorRetorno = 'success';
          this.texto = 'Contato enviado com sucesso!';
        })
        .catch(error => {
          console.error('Erro ao enviar email:', error);
          this.dados = {
            nome: '',
            email: '',
            telefone: '',
            assunto: '',
            mensagem: ''
          };

          this.dialog = true;
          this.colorRetorno = 'error';
          this.texto = 'Erro ao enviar o contato!';
        });
    },
  }
};
</script>

<style scoped>
/* Você pode adicionar estilos personalizados aqui, se necessário */
</style>
