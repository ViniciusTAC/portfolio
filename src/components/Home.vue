<template>
  <v-container fluid style="min-height: 100vh; background-color: #110d11;">
    <v-row class="pa-4">
      <h1>
        <span class="emoji">👋</span>
        Olá, eu sou Vinícius!
      </h1>
    </v-row>

    <v-row class="pa-0" justify="space-between" align="start">
      <v-col class="pl-2" cols="12" md="8">
        <h2>
          Um Desenvolvedor Full-Stack 👨‍💻
        </h2>
        <p>
          Sou apaixonado por transformar ideias em realidade através do código. Com ampla experiência em
          desenvolvimento de software, estou sempre buscando aprimorar minhas habilidades técnicas e acompanhar as
          últimas tendências da indústria.
          <br><br>
          Vamos trabalhar juntos para criar algo incrível?
        </p>
        <p style="color: #110d11;">Houve {{ contador }} acessos</p>

        <v-container class="d-flex justify-center flex-wrap">
          <v-btn variant="outlined" class="ml-3" color="primary" icon="mdi-instagram"
            href="https://www.instagram.com/vinicius.tac/" target="_blank" rel="noopener noreferrer"></v-btn>

          <v-btn variant="outlined" class="ml-3" color="primary" icon="mdi-linkedin"
            href="https://www.linkedin.com/in/vinícius-tadeu-andrade-costa/" target="_blank"
            rel="noopener noreferrer"></v-btn>

          <v-btn variant="outlined" class="ml-3" color="primary" icon="mdi-github" href="https://github.com/ViniciusTAC"
            target="_blank" rel="noopener noreferrer"></v-btn>

          <v-btn variant="outlined" class="ml-3" color="primary" icon="mdi-email"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=viniciustacosta@gmail.com" target="_blank"
            rel="noopener noreferrer"></v-btn>
        </v-container>

        <v-container class="d-flex justify-center mt-4">
          <v-btn style="background-color: rgba(205, 0, 205, 0.3);" href="/Currículo - Vinicius Tadeu Andrade Costa.pdf" download>
            <v-icon>mdi-download</v-icon>
            Baixar Currículo
          </v-btn>
        </v-container>
      </v-col>

      <v-col cols="12" md="4" class="d-flex justify-center align-center">
        <v-img width="50vw" src="../assets/vinicius-home.jpg" alt="Foto de Vinícius"
          style="border-radius: 8px; border: 2px solid #ccc;"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      contador: 0
    };
  },
  created() {
    this.inicializarContador();
  },
  methods: {
    inicializarContador() {
      // Verifica se há um contador salvo no localStorage
      const contadorSalvo = localStorage.getItem("contadorAcessos");
      this.contador = contadorSalvo ? parseInt(contadorSalvo) : 0;
      this.incrementarContador();
    },
    incrementarContador() {
      // Incrementa o contador e salva no localStorage
      this.contador++;
      localStorage.setItem("contadorAcessos", this.contador);
    }
  }
}
</script>

<style scoped>
/* Adicione estilos personalizados aqui, se necessário */
</style>
