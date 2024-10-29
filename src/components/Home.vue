<template>
  <v-container style="max-width: 100vw; height: 100vh; background-color: #110d11;">
    <v-row>
      <h1 class="pl-4">
        <span class="emoji">👋</span>
        Olá, eu sou Vinícius!
      </h1>

    </v-row>
    <v-row class="pa-0 ma-3" justify="space-between">
      <v-col class="pl-15" cols="8">

        <h2>
          Um Desenvolvedor Full-Stack 👨‍💻
        </h2>
        <p>
          Sou apaixonado por transformar ideias em realidade através do código. Com ampla experiência em
          desenvolvimento
          de
          software, estou sempre buscando aprimorar minhas habilidades técnicas e acompanhar as últimas tendências da
          indústria.
          <br><br>
          Vamos trabalhar juntos para criar algo incrível?

        </p>

        <br>
        <v-container class="d-flex justify-center">

          <v-btn variant="outlined" class="ml-3" color="primary" icon="mdi-instagram"
            href="https://www.instagram.com/vinicius.tac/" target="_blank" rel="noopener noreferrer">
          </v-btn>

          <v-btn variant="outlined" class="ml-3" color="primary" icon="mdi-linkedin" density="default"
            href="https://www.linkedin.com/in/vinícius-tadeu-andrade-costa/" target="_blank" rel="noopener noreferrer">
          </v-btn>

          <v-btn variant="outlined" class="ml-3" color="primary" icon="mdi-github" density="default"
            href="https://github.com/ViniciusTAC" target="_blank" rel="noopener noreferrer">
          </v-btn>

          <v-btn variant="outlined" class="ml-3" color="primary" icon="mdi-email" density="default"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=viniciustacosta@gmail.com" target="_blank"
            rel="noopener noreferrer">
          </v-btn>
        </v-container>

        <v-container class="d-flex justify-center">
          <v-btn style="background-color: rgba(205, 0, 205, 0.3);" href="/ViniciusTadeuAndradeCosta.pdf" download>
            <v-icon>mdi-download</v-icon>
            Baixar Currículo
          </v-btn>



        </v-container>

      </v-col>
      <v-col cols="4">
        <v-img class="justify-end" aspect-ratio="4/3" cover src="../assets/vinicius-home.jpg"></v-img>
      </v-col>

    </v-row>






  </v-container>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      texto: ''
    };
  },

  methods: {
    teste(texto) {
      this.texto = texto
      console.log(this.texto)
    }
  },
}
</script>
<style scoped>
/* 
.emoji {
    font-size: 50px;       
    display: inline-block;  
    animation: shake 0.5s infinite;  
}

Animação de balançar 
@keyframes shake {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(15deg); }
    50% { transform: rotate(0deg); }
    75% { transform: rotate(-15deg); }
    100% { transform: rotate(0deg); }
} */
</style>