<template>
  <v-app class="teste">
    <v-main>
      <v-app-bar app class="pr-3">
        <v-spacer></v-spacer>

        <v-chip class="pa-0 ma-0 mr-3" color="primary" variant="outlined">
          <v-btn color="primary" @click="adicionarRota('Home')">
            <v-icon icon="mdi-home" start></v-icon>
            Início</v-btn>
        </v-chip>

        <v-chip class="pa-0 ma-0 mr-3" color="primary" variant="outlined">
          <v-btn color="primary" @click="adicionarRota('Servicos')"> <v-icon icon="mdi-room-service-outline"
              start></v-icon>Serviços</v-btn>
        </v-chip>

        <v-chip class="pa-0 ma-0 mr-3" color="primary" variant="outlined">
          <v-btn color="primary" @click="adicionarRota('Portfolio')"> <v-icon icon="mdi-cards"
              start></v-icon>Portfólio</v-btn>
        </v-chip>

        <v-chip class="pa-0 ma-0 mr-3" color="primary" variant="outlined">
          <v-btn color="primary" @click="adicionarRota('Contato')"> <v-icon icon="mdi-phone" start></v-icon>Contato</v-btn>
        </v-chip>

        <v-chip class="pa-0 ma-0 mr-3" color="primary" variant="outlined">
          <v-btn color="primary" @click="adicionarRota('Sobre')"> <v-icon icon="mdi-information" start></v-icon>Sobre</v-btn>
        </v-chip>
      </v-app-bar>

      <home id="Home" />
      <servicos id="Servicos" />
      <portfolio id="Portfolio" />
      <contato id="Contato" />
      <sobre id="Sobre" />

      <v-bottom-navigation app fixed class="d-flex align-center">
        <span style="font-size: 150%;">
          Copyright <span style="font-size: 12px; vertical-align: super; font-weight: bold;">©</span> 2024 feito por
          Vinícius Tadeu Andrade Costa (Kovine). Todos os direitos reservados.
        </span>
      </v-bottom-navigation>
    </v-main>
  </v-app>
</template>

<script>
import Home from "./components/Home.vue";
import Servicos from "./components/Servicos.vue";
import Portfolio from "./components/Portfolio.vue";
import Contato from "./components/Contato.vue";
import Sobre from "./components/Sobre.vue";

export default {
  components: {
    Home,
    Servicos,
    Portfolio,
    Contato,
    Sobre
  },
  data() {
    return {
      currentPage: 'Home'
    };
  },
  methods: {
    adicionarRota(texto) {
      this.$router.push({ name: texto }).then(() => {
        this.rolarParaSecao(texto);
      }).catch(() => { });
    },
    rolarParaSecao(texto) {
      const elemento = document.getElementById(texto);
      if (elemento) {
        // Ajusta o scroll para desconsiderar a altura do app-bar
        const alturaAppBar = 64; // altura do app-bar em pixels
        const posicaoElemento = elemento.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: posicaoElemento - alturaAppBar,
          behavior: 'smooth'
        });
      }
    }
  },
  watch: {
    $route(to) {
      // Desce a página para a seção correspondente ao mudar a rota
      this.rolarParaSecao(to.name);
    },
  }
}
</script>

<style></style>
