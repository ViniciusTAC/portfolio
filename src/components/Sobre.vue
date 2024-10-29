<template>
  <v-container style="max-width: 100vw; height: 100vh;">
    <br>
    <v-container style="max-width: 100vw;">
      <v-row justify="center">
      </v-row>
      <br>
      <br>
      <v-card class="px-3 py-6">

        <v-row style="width: 100%;">
          <v-col cols="4" class="text-center d-flex justify-end align-center">
            <v-img width="55%" src="../assets/vinicius_sobre.jpg" style="border-radius: 8px;"></v-img>
          </v-col>
          <v-col>
            <v-card>
              <v-card-item>
              </v-card-item>

              <v-card-text>
                <span class="d-flex text-subtitle-1 text-sm-body-1">
                  Sobre mim 💭
                </span>
                <span class="d-flex text-h4 text-md-h5 text-sm-h6">
                  Sou Desenvolvedor e estudante de Engenharia de Computação
                </span>
                <span v-if="!dialogoAberto" style="font-size: large;">
                  <br>
                  <p>
                    Durante minha carreira, passei por diversas oportunidades que me possibilitaram aplicar e expandir
                    meus
                    conhecimentos. Na SICOOB SAROMCREDI, atuei como Assistente de Desenvolvimento, focando no
                    desenvolvimento
                    front-end com Vue.js, HTML, JavaScript e MySQL. Nessa função, fui responsável pelo design e
                    implementação
                    de interfaces de usuário eficientes, colaborando estreitamente com a equipe para garantir uma
                    experiência de
                    alto ...
                  </p>
                </span>
                <br />
                <v-btn v-if="!dialogoAberto" color="primary" @click="abrirDialogo">
                  Ler mais <v-icon icon="mdi-chevron-down" end></v-icon>
                </v-btn>

                <span v-if="dialogoAberto" style="font-size: large;">

                  <p>
                    Durante minha carreira, passei por diversas oportunidades que me possibilitaram aplicar e expandir
                    meus
                    conhecimentos. Na SICOOB SAROMCREDI, atuei como Assistente de Desenvolvimento, focando no
                    desenvolvimento
                    front-end com Vue.js, HTML, JavaScript e MySQL. Nessa função, fui responsável pelo design e
                    implementação
                    de
                    interfaces de usuário eficientes, colaborando estreitamente com a equipe para garantir uma
                    experiência de
                    alto desempenho e usabilidade.
                  </p>

                  <br>

                  <p>
                    Depois, como Estagiário de Desenvolvimento na FUSION Tecnologia, desempenhei um papel fundamental no
                    desenvolvimento de aplicações web como Desenvolvedor Full Stack, utilizando Vue.js e Ruby on Rails.
                    Minha
                    responsabilidade era criar interfaces de usuário integradas ao back-end, proporcionando uma
                    experiência
                    coesa para os usuários. Essa posição foi essencial para consolidar minha expertise em tecnologias de
                    front-end e back-end.
                  </p>

                  <br>

                  <p>
                    Atualmente, atuo como Desenvolvedor de Software Júnior no Sítio Recanto do Queijo, onde trabalho com
                    Angular, Spring Boot e SQL Server. Minha função envolve a criação de interfaces dinâmicas e a
                    integração
                    com
                    o back-end, sempre buscando inovação e excelência técnica nos projetos. A experiência acumulada em
                    cada
                    uma
                    dessas funções me permitiu desenvolver uma sólida compreensão de práticas de desenvolvimento de
                    software e
                    me tornar um profissional resiliente, adaptável e comprometido com a evolução constante na área.
                  </p>

                  <br>

                  <p>
                    Com conhecimento em várias tecnologias, incluindo Java, Python,  JavaScript, SQL e familiaridade
                    com
                    Git/GitHub, continuo buscando novos desafios e oportunidades para impactar positivamente a vida das
                    pessoas
                    através da tecnologia.
                  </p>

                </span>
                <br>
                <v-btn v-if="dialogoAberto" color="primary" @click="dialogoAberto = false">
                  Ler menos <v-icon icon="mdi-chevron-up" end></v-icon>
                </v-btn>


              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

      </v-card>
    </v-container>
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

      this.dialogoAberto = true

    },
  },
};
</script>
<style scoped></style>
