<template>
  <v-container style="max-width: 100vw; height: auto;">
    <v-card class="py-8 px-5 mx-auto" style="max-width: 100vw;">
      <v-row align="center">
        <!-- Imagem -->
        <v-col cols="12" md="4" class="d-flex justify-center align-center">
          <v-img
            width="50vw"
            height=""
            src="../assets/vinicius_sobre.jpg"
            alt="Foto de Vinícius"
            style="border-radius: 8px; border: 2px solid #ccc;"
          ></v-img>
        </v-col>

        <!-- Conteúdo de texto -->
        <v-col cols="12" md="8">
          <v-card flat>
            <v-card-title class="text-h4 font-weight-bold text-wrap">Sobre mim 💭</v-card-title>
            <v-card-subtitle class="text-h6 text-wrap mb-4">
              Sou Desenvolvedor e estudante de Engenharia de Computação
            </v-card-subtitle>

            <v-card-text>
              <!-- Texto resumido -->
              <span v-if="!dialogoAberto" style="font-size: 1rem; line-height: 1.6;">
                <p>
                  Durante minha carreira, passei por diversas oportunidades que me possibilitaram aplicar e expandir
                  meus conhecimentos. Na SICOOB SAROM, atuei como Assistente de Desenvolvimento, focando no
                  desenvolvimento front-end com Vue.js, HTML, JavaScript e MySQL...
                </p>
              </span>

              <!-- Botão "Ler mais" -->
              <v-btn v-if="!dialogoAberto" color="primary" @click="abrirDialogo" class="mt-2">
                Ler mais <v-icon icon="mdi-chevron-down" end></v-icon>
              </v-btn>

              <!-- Texto completo -->
              <span v-if="dialogoAberto" style="font-size: 1rem; line-height: 1.6;">
                <p>
                  Durante minha carreira, passei por diversas oportunidades que me possibilitaram aplicar e expandir
                  meus conhecimentos. Na SICOOB SAROMCREDI, atuei como Assistente de Desenvolvimento, focando no
                  desenvolvimento front-end com Vue.js, HTML, JavaScript e MySQL. Nessa função, fui responsável pelo
                  design e implementação de interfaces de usuário eficientes, colaborando estreitamente com a equipe
                  para garantir uma experiência de alto desempenho e usabilidade.
                </p>
                <br>
                <p>
                  Depois, como Estagiário de Desenvolvimento na FUSION Tecnologia, desempenhei um papel fundamental no desenvolvimento de aplicações web como Desenvolvedor Full Stack, utilizando Vue.js e Ruby on Rails. Minha responsabilidade era criar interfaces de usuário integradas ao back-end, proporcionando uma experiência coesa para os usuários. Essa posição foi essencial para consolidar minha expertise em tecnologias de front-end e back-end.
                </p>
                <br>
                <p>
                  Atualmente, atuo como Desenvolvedor de Software Júnior no Sítio Recanto do Queijo, onde trabalho com Angular, Spring Boot e SQL Server. Minha função envolve a criação de interfaces dinâmicas e a integração com o back-end, sempre buscando inovação e excelência técnica nos projetos. A experiência acumulada em cada uma dessas funções me permitiu desenvolver uma sólida compreensão de práticas de desenvolvimento de software e me tornar um profissional resiliente, adaptável e comprometido com a evolução constante na área.
                </p>
                <br>
                <p>
                  Com conhecimento em várias tecnologias, incluindo Java, Python, JavaScript, SQL e familiaridade com
                  Git/GitHub, continuo buscando novos desafios e oportunidades para impactar positivamente a vida das
                  pessoas através da tecnologia.
                </p>
              </span>

              <!-- Botão "Ler menos" -->
              <v-btn v-if="dialogoAberto" color="primary" @click="dialogoAberto = false" class="mt-2">
                Ler menos <v-icon icon="mdi-chevron-up" end></v-icon>
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Sobre",
  data() {
    return {
      dialogoAberto: false,
    };
  },
  methods: {
    abrirDialogo() {
      this.dialogoAberto = true;
    },
  },
};
</script>

<style scoped>
/* Estilos adicionais para melhorar a apresentação */
.v-card-title {
  color: #1976d2;
}
.v-card-subtitle {
  color: #555;
}
</style>
