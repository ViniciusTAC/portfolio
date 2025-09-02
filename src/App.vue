<template>
  <v-app class="teste">
    <v-main>
      <v-app-bar app class="pr-3">
        <!-- Ícone de menu que aparece em telas menores -->
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          class="d-md-none"
        ></v-app-bar-nav-icon>

        <!-- Espaço para alinhar o conteúdo à direita -->
        <v-spacer></v-spacer>

        <!-- Botões que aparecem somente em telas maiores -->
        <div class="d-none d-md-flex">
          <v-chip class="pa-0 ma-0 mr-3" color="primary" variant="outlined">
            <v-btn color="primary" @click="adicionarRota('Home')">
              <v-icon icon="mdi-home" start></v-icon>
              Início
            </v-btn>
          </v-chip>

          <v-chip class="pa-0 ma-0 mr-3" color="primary" variant="outlined">
            <v-btn color="primary" @click="adicionarRota('TCC')">
              <v-icon icon="mdi-book" start></v-icon>
              TCC
            </v-btn>
          </v-chip>

          <v-chip class="pa-0 ma-0 mr-3" color="primary" variant="outlined">
            <v-btn color="primary" @click="adicionarRota('Servicos')">
              <v-icon icon="mdi-room-service-outline" start></v-icon>
              Serviços
            </v-btn>
          </v-chip>

          <v-chip class="pa-0 ma-0 mr-3" color="primary" variant="outlined">
            <v-btn color="primary" @click="adicionarRota('Portfolio')">
              <v-icon icon="mdi-cards" start></v-icon>
              Portfólio
            </v-btn>
          </v-chip>

          <v-chip class="pa-0 ma-0 mr-3" color="primary" variant="outlined">
            <v-btn color="primary" @click="adicionarRota('Contato')">
              <v-icon icon="mdi-phone" start></v-icon>
              Contato
            </v-btn>
          </v-chip>

          <v-chip class="pa-0 ma-0 mr-3" color="primary" variant="outlined">
            <v-btn color="primary" @click="adicionarRota('Sobre')">
              <v-icon icon="mdi-information" start></v-icon>
              Sobre
            </v-btn>
          </v-chip>
        </div>
      </v-app-bar>

      <!-- Menu lateral para telas menores -->
      <v-navigation-drawer v-model="drawer" app temporary class="d-md-none">
        <v-list-item @click="adicionarRota('Home')">Início</v-list-item>
        <v-list-item @click="adicionarRota('TCC')">TCC</v-list-item>
        <v-list-item @click="adicionarRota('Servicos')">Serviços</v-list-item>
        <v-list-item @click="adicionarRota('Portfolio')">Portfólio</v-list-item>
        <v-list-item @click="adicionarRota('Contato')">Contato</v-list-item>
        <v-list-item @click="adicionarRota('Sobre')">Sobre</v-list-item>
      </v-navigation-drawer>

      <home id="Home" />
      <Tcc />
      <servicos id="Servicos" />
      <portfolio id="Portfolio" />
      <contato id="Contato" />
      <sobre id="Sobre" />

      <v-bottom-navigation fluid app fixed class="bottom-navigation-custom">
        <br />
        <span class="copyright-text">
          Copyright <span class="copyright-symbol">©</span> 2024 feito por
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
import Tcc from "./components/Tcc.vue";

export default {
  components: {
    Tcc,
    Home,
    Servicos,
    Portfolio,
    Contato,
    Sobre,
  },
  data() {
    return {
      currentPage: "Home",
      drawer: false, // Controle do menu lateral para telas pequenas
    };
  },
  methods: {
    adicionarRota(texto) {
      this.$router
        .push({ name: texto })
        .then(() => {
          this.rolarParaSecao(texto);
          this.drawer = false; // Fecha o menu após a navegação
        })
        .catch(() => {});
    },
    rolarParaSecao(texto) {
      const elemento = document.getElementById(texto);
      if (elemento) {
        const alturaAppBar = 64; // altura do app-bar em pixels
        const posicaoElemento =
          elemento.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: posicaoElemento - alturaAppBar,
          behavior: "smooth",
        });
      }
    },
  },
  watch: {
    $route(to) {
      this.rolarParaSecao(to.name);
    },
  },
};
</script>

<style scoped>
.bottom-navigation-custom .copyright-text {
  font-size: 1rem;
  /* Tamanho padrão */
}

.bottom-navigation-custom .copyright-symbol {
  font-size: 0.75rem;
  /* Tamanho padrão para o símbolo */
  vertical-align: super;
  font-weight: bold;
}

/* Tamanho menor para telas pequenas */
@media (max-width: 600px) {
  .bottom-navigation-custom .copyright-text {
    font-size: 0.8rem;
  }

  .bottom-navigation-custom .copyright-symbol {
    font-size: 0.65rem;
  }
}

/* Tamanho maior para telas médias */
@media (min-width: 600px) and (max-width: 960px) {
  .bottom-navigation-custom .copyright-text {
    font-size: 0.9rem;
  }
}
</style>
