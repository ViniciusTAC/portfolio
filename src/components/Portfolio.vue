<template>
  <v-container style="max-width: 100vw; height: 100vh;background-color: #110d11;">
    <br>
    <v-container style="max-width: 100vw;" align="center">
      <v-row justify="center">
        <h1>
          Meus <span style="color: #cd00cd;">Projetos</span>
        </h1>
      </v-row>
      <br>
      <br>
      <v-card style="border-radius: 16px;" variant="outlined" class="px-3 py-6">

        <v-row style="max-width: 100vw; height: 75vh">
          <v-col>
            <v-card style="
                      border-radius: 16px;
                      background-image: url('projeto_vue.png');
                      background-size: contain;
                      background-repeat: no-repeat;
                      background-position: center;
                      width: 100%;
                      height: 100%;
                    " variant="outlined" align="center" class="botao-expandir" :color="corCardVue"
              @mouseover="mudarCorCard('Vue')" @mouseleave="mudarCorCardAoSair('Vue')">

              <v-container v-if="textoVue"
                :style="{ backgroundColor: textoVue ? 'rgba(205, 0, 205, 0.8)' : 'transparent', borderRadius: '16px', height: '100%' }">
                <span style="font-size: x-large; color: white;">Projeto de Quadro de Atividades de Kanban, no estilo
                  Trello e
                  Asana. Utilizando Vue versão 2 e Vuetify</span>
                <br>
                <br>
                <span style="font-size: large; color: white;">
                  Eu desenvolvi um projeto em Vue 2 com Vuetify 2, onde criei um quadro de atividades no estilo Kanban.
                  O objetivo era organizar tarefas em colunas, representando diferentes estados de progresso, como "A
                  Fazer," "Fazendo" e "Prontas."
                </span>
                <br>
                <v-btn variant="outlined" color="white" icon="mdi-link-variant"
                  href="https://github.com/ViniciusTAC/ProjetoVue" target="_blank" rel="noopener noreferrer">
                </v-btn>
              </v-container>
            </v-card>
          </v-col>

          <v-col>
            <v-card style="
                      border-radius: 16px;
                      background-image: url('projeto_backend.png');
                      background-size: contain;
                      background-repeat: no-repeat;
                      background-position: center;
                      width: 100%;
                      height: 100%;
                    " variant="outlined" align="center" class="botao-expandir" :color="corCardRuby"
              @mouseover="mudarCorCard('Ruby')" @mouseleave="mudarCorCardAoSair('Ruby')">

              <v-container v-if="textoRuby"
                :style="{ backgroundColor: textoRuby ? 'rgba(205, 0, 205, 0.8)' : 'transparent', borderRadius: '16px', height: '100%' }">
                <span style="font-size: xx-large; color: white;">Backend em Ruby on Rails do Quadro de Atividade</span>
                <br>
                <br>
                <span style="font-size: large; color: white;">
                  Para o backend desse projeto, utilizei Ruby on Rails, com PostgreSQL como banco de dados. Rails
                  facilitou o desenvolvimento das APIs necessárias para gerenciar as tarefas e colunas do quadro Kanban,
                  enquanto o PostgreSQL garantiu um armazenamento eficiente e seguro dos dados de atividade.
                </span>
                <br>
                <v-btn variant="outlined" color="white" icon="mdi-link-variant"
                  href="https://github.com/ViniciusTAC/backend" target="_blank" rel="noopener noreferrer">
                </v-btn>
              </v-container>
            </v-card>
          </v-col>

          <v-col>
            <v-card style="
                      border-radius: 16px;
                      background-image: url('minicurso_web.png');
                      background-size: contain;
                      background-repeat: no-repeat;
                      background-position: center;
                      width: 100%;
                      height: 100%;
                    " variant="outlined" align="center" class="botao-expandir" :color="corCardMinicurso"
              @mouseover="mudarCorCard('Minicurso')" @mouseleave="mudarCorCardAoSair('Minicurso')">

              <v-container v-if="textoMinicurso"
                :style="{ backgroundColor: textoMinicurso ? 'rgba(205, 0, 205, 0.8)' : 'transparent', borderRadius: '16px', height: '100%' }">
                <span style="font-size: xx-large; color: white;">Mini-Curso Web</span>
                <br>
                <br>
                <span style="font-size: large; color: white;">
                  Ministrei um minicurso introdutório sobre desenvolvimento web, onde os participantes puderam obter uma
                  visão geral dos conceitos e tecnologias fundamentais para criação de sites. <br>
                  Este curso foi planejado para ser uma introdução, com o objetivo de preparar os participantes para
                  explorar o universo do desenvolvimento web com confiança e curiosidade. Embora introdutório, ele é o
                  ponto de partida ideal para quem deseja avançar nessa área fascinante e cheia de possibilidades!
                </span>
                <br>
                <v-btn variant="outlined" color="white" icon="mdi-link-variant"
                  href="https://github.com/ViniciusTAC/MiniCurso-Web" target="_blank" rel="noopener noreferrer">
                </v-btn>
              </v-container>
            </v-card>
          </v-col>


        </v-row>
      </v-card>

    </v-container>
  </v-container>

</template>
<script>
export default {
  name: "Servicos",
  data() {
    return {
      corCardVue: '',
      corCardRuby: '',
      corCardMinicurso: '',
      textoVue: false,
      textoRuby: false,
      textoMinicurso: false,
    };
  },
  methods: {
    mudarCorCard(elemento) {
      if (elemento === 'Vue') {
        this.corCardVue = 'primary';
        this.textoVue = true;
      }
      else if (elemento === 'Ruby') {
        this.corCardRuby = 'primary';
        this.textoRuby = true;
      }

      else if (elemento === 'Minicurso') {
        this.corCardMinicurso = 'primary';
        this.textoMinicurso = true
      }

    },
    mudarCorCardAoSair(elemento) {
      if (elemento === 'Vue') {
        this.corCardVue = '';
        this.textoVue = false;
      }
      else if (elemento === 'Ruby') {
        this.corCardRuby = '';
        this.textoRuby = false;
      }

      else if (elemento === 'Minicurso') {
        this.corCardMinicurso = '';
        this.textoMinicurso = false
      }

    }
  },
};
</script>
<style scoped>
.botao-expandir {
  transition: transform 0.3s;
  /* Animação suave */
}

.botao-expandir:hover {
  transform: scale(1.05);
  /* Aumenta o tamanho do botão */
}
</style>
