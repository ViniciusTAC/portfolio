<template>
  <div class="shell">
    <a class="pular" href="#conteudo">Pular para o conteúdo</a>

    <header class="barra">
      <button class="marca" type="button" @click="ir('Home')">
        KOVINE<span class="cursor" aria-hidden="true"></span>
      </button>

      <button
        class="abrir-menu"
        type="button"
        aria-controls="nav-principal"
        :aria-expanded="menuAberto"
        @click="menuAberto = !menuAberto"
      >
        {{ menuAberto ? "FECHAR" : "MENU" }}
      </button>

      <nav
        id="nav-principal"
        class="nav"
        :class="{ aberto: menuAberto }"
        aria-label="Seções do site"
      >
        <a
          v-for="(item, i) in itens"
          :key="item.rota"
          :href="item.caminho"
          :class="{ ativo: ativo === item.rota }"
          :aria-current="ativo === item.rota ? 'true' : null"
          @click.prevent="ir(item.rota)"
        >
          <kbd>{{ i + 1 }}</kbd>{{ item.rotulo }}
        </a>
      </nav>
    </header>

    <main id="conteudo">
      <home id="Home" />
      <sobre id="Sobre" />
      <tcc />
      <servicos id="Servicos" />
      <portfolio id="Portfolio" />
      <contato id="Contato" />
    </main>

    <footer class="rodape">
      <div class="miolo rodape-linha">
        <span>© {{ ano }} Vinícius Tadeu Andrade Costa (Kovine)</span>
        <span v-if="visitas">
          visita nº {{ visitas }} neste navegador
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Servicos from "./components/Servicos.vue";
import Portfolio from "./components/Portfolio.vue";
import Contato from "./components/Contato.vue";
import Sobre from "./components/Sobre.vue";
import Tcc from "./components/Tcc.vue";

export default {
  components: { Tcc, Home, Servicos, Portfolio, Contato, Sobre },
  data() {
    return {
      menuAberto: false,
      ativo: "Home",
      visitas: "",
      ano: new Date().getFullYear(),
      itens: [
        { rota: "Home", rotulo: "Início", caminho: "/" },
        { rota: "Sobre", rotulo: "Sobre", caminho: "/sobre" },
        { rota: "TCC", rotulo: "TCC", caminho: "/tcc" },
        { rota: "Servicos", rotulo: "Stack", caminho: "/servico" },
        { rota: "Portfolio", rotulo: "Projetos", caminho: "/portfolio" },
        { rota: "Contato", rotulo: "Contato", caminho: "/contato" },
      ],
    };
  },
  watch: {
    $route(to) {
      this.rolarPara(to.name);
    },
  },
  created() {
    this.contarVisita();
  },
  mounted() {
    window.addEventListener("keydown", this.atalho);

    // Marca no menu a seção que está no meio da tela
    this.observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) this.ativo = e.target.id;
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    this.itens.forEach((item) => {
      const el = document.getElementById(item.rota);
      if (el) this.observador.observe(el);
    });

    // Link direto (ex.: /sobre): espera fontes e layout para acertar a posição
    this.$router
      .isReady()
      .then(() => document.fonts.ready)
      .then(() => {
        if (this.$route.name !== "Home") this.rolarPara(this.$route.name, "auto");
      });
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.atalho);
    if (this.observador) this.observador.disconnect();
  },
  methods: {
    ir(rota) {
      this.menuAberto = false;
      if (this.$route.name === rota) {
        this.rolarPara(rota);
      } else {
        this.$router.push({ name: rota }).catch(() => {});
      }
    },
    rolarPara(rota, comportamento) {
      const el = document.getElementById(rota);
      if (!el) return;
      const semAnimacao = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      el.scrollIntoView({
        behavior: comportamento || (semAnimacao ? "auto" : "smooth"),
        block: "start",
      });
    },
    // Teclas 1 a 6 navegam entre as seções, como num menu de BIOS
    atalho(e) {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (/^(INPUT|TEXTAREA)$/.test(e.target.tagName)) return;
      const item = this.itens[Number(e.key) - 1];
      if (item) this.ir(item.rota);
    },
    contarVisita() {
      try {
        const total = (parseInt(localStorage.getItem("contadorAcessos")) || 0) + 1;
        localStorage.setItem("contadorAcessos", total);
        this.visitas = String(total).padStart(4, "0");
      } catch (erro) {
        this.visitas = "";
      }
    },
  },
};
</script>

<style scoped>
.pular {
  position: fixed;
  top: -60px;
  left: 16px;
  z-index: 60;
  padding: 8px 14px;
  background: var(--ambar);
  color: #000;
}

.pular:focus {
  top: 8px;
}

.barra {
  position: sticky;
  top: 0;
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--barra);
  padding-inline: var(--margem);
  background: var(--fundo);
  border-bottom: 1px solid var(--linha);
}

.marca {
  padding: 0;
  border: 0;
  background: none;
  color: var(--texto);
  font-family: var(--fonte-tela);
  font-size: 1.9rem;
  line-height: 1;
  cursor: pointer;
}

.abrir-menu {
  display: none;
  padding: 6px 12px;
  border: 1px solid var(--magenta);
  background: none;
  color: var(--magenta);
  font-family: var(--fonte-mono);
  font-size: 0.85rem;
  cursor: pointer;
}

.nav {
  display: flex;
  height: 100%;
}

.nav a {
  display: flex;
  align-items: center;
  gap: 7px;
  padding-inline: 14px;
  font-family: var(--fonte-mono);
  font-size: 0.88rem;
  text-decoration: none;
  color: var(--texto-2);
}

.nav a:hover {
  color: var(--texto);
}

.nav a.ativo {
  background: var(--ambar);
  color: #000;
  font-weight: 600;
}

kbd {
  font-family: inherit;
  font-size: 0.75rem;
  color: var(--magenta);
}

.ativo kbd {
  color: #000;
}

.rodape {
  border-top: 1px solid var(--linha);
  padding-block: 22px;
  font-family: var(--fonte-mono);
  font-size: 0.8rem;
  color: var(--texto-2);
}

.rodape-linha {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 6px 32px;
}

@media (max-width: 820px) {
  .abrir-menu {
    display: block;
  }

  .nav {
    display: none;
    position: absolute;
    top: var(--barra);
    left: 0;
    right: 0;
    height: auto;
    flex-direction: column;
    background: var(--painel);
    border-bottom: 2px solid var(--magenta);
  }

  .nav.aberto {
    display: flex;
  }

  .nav a {
    padding: 14px var(--margem);
    border-top: 1px solid var(--linha);
    font-size: 1rem;
  }
}
</style>
