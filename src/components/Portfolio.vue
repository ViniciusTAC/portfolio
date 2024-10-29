<template>
  <v-container style="max-width: 100vw; height: auto; background-color: #110d11;">
    <v-container max-width="100vw" align="center">
      <v-row justify="center" class="py-6">
        <h1 class="text-h3 text-center white--text">
          Meus <span style="color: #cd00cd;">Projetos</span>
        </h1>
      </v-row>

      <v-card class="py-6 px-4" style="border-radius: 16px; max-width: 100vw; background-color: transparent;">
        <v-row justify="center" class="py-5">
          <v-col cols="12" md="4" v-for="projeto in projetos" :key="projeto.nome">
            <v-card
              :style="{
                backgroundImage: `url(${projeto.imagem})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '50vh',
                borderRadius: '16px',
              }"
              align="center"
              class="botao-expandir"
              :color="projeto.cor"
              @mouseover="ativarTexto(projeto)"
              @mouseleave="desativarTexto(projeto)"
            >
              <v-container
                v-if="projeto.exibirTexto"
                :style="{
                  backgroundColor: 'rgba(205, 0, 205, 0.8)',
                  borderRadius: '16px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '16px',
                }"
              >
                <span class="text-h5 white--text font-weight-bold">{{ projeto.titulo }}</span>
                <p class="white--text" style="font-size: large;">{{ projeto.descricao }}</p>
                <v-btn
                  variant="outlined"
                  color="white"
                  icon="mdi-link-variant"
                  :href="projeto.link"
                  target="_blank"
                  rel="noopener noreferrer"
                ></v-btn>
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
      projetos: [
        {
          nome: "Vue",
          imagem: "projeto_vue.png", // Verifique o caminho da imagem
          titulo: "Projeto de Quadro de Atividades de Kanban",
          descricao:
            "Eu desenvolvi um projeto em Vue 2 com Vuetify 2, onde criei um quadro de atividades no estilo Kanban. O objetivo era organizar tarefas em colunas, representando diferentes estados de progresso, como 'A Fazer,' 'Fazendo' e 'Prontas.'",
          link: "https://github.com/ViniciusTAC/ProjetoVue",
          cor: "",
          exibirTexto: false,
        },
        {
          nome: "Ruby",
          imagem: "projeto_backend.png", // Verifique o caminho da imagem
          titulo: "Backend em Ruby on Rails do Quadro de Atividade",
          descricao:
            "Para o backend desse projeto, utilizei Ruby on Rails, com PostgreSQL como banco de dados. Rails facilitou o desenvolvimento das APIs necessárias para gerenciar as tarefas e colunas do quadro Kanban.",
          link: "https://github.com/ViniciusTAC/backend",
          cor: "",
          exibirTexto: false,
        },
        {
          nome: "Minicurso",
          imagem: "minicurso_web.png", // Verifique o caminho da imagem
          titulo: "Minicurso de Desenvolvimento Web",
          descricao:
            "Ministrei um minicurso introdutório sobre desenvolvimento web, onde os participantes puderam obter uma visão geral dos conceitos e tecnologias fundamentais para criação de sites.",
          link: "https://github.com/ViniciusTAC/MiniCurso-Web",
          cor: "",
          exibirTexto: false,
        },
      ],
    };
  },
  methods: {
    ativarTexto(projeto) {
      projeto.cor = "primary";
      projeto.exibirTexto = true;
    },
    desativarTexto(projeto) {
      projeto.cor = "";
      projeto.exibirTexto = false;
    },
  },
};
</script>

<style scoped>
.botao-expandir {
  transition: transform 0.3s ease-in-out;
}

.botao-expandir:hover {
  transform: scale(1.05);
}
</style>
