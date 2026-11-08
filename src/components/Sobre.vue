<template>
  <section class="secao">
    <div class="miolo">
      <h2 class="titulo"><span>02</span>Sobre</h2>

      <div class="grade">
        <div class="historia">
          <img
            :src="foto"
            alt="Vinícius usando headphone"
            width="900"
            height="1212"
          />
          <p>
            Sou formado em Engenharia de Computação pelo IFMG e trabalho
            principalmente no back-end, com Java, Spring Boot, SQL Server, Python
            e Node.js: regras de negócio, modelagem relacional, APIs, integração
            entre sistemas e sustentação de aplicações em produção.
          </p>
          <p>
            Comecei no Técnico em Informática do Pronatec. O primeiro emprego na
            área foi no Sicoob Sarom, mantendo sistemas em ASP Classic e
            participando da migração de um ERP legado. Foi a base prática da
            minha carreira em software corporativo.
          </p>
          <p>
            No front-end atuo quando precisa, com Angular, PrimeNG, TypeScript e
            Vue.js, principalmente em interfaces integradas ao back-end.
          </p>

          <dl class="extras">
            <div v-for="item in extras" :key="item.nome">
              <dt class="rotulo">{{ item.nome }}</dt>
              <dd>{{ item.valor }}</dd>
            </div>
          </dl>
        </div>

        <ol class="log" aria-label="Experiência profissional">
          <li v-for="item in experiencia" :key="item.cargo">
            <p class="estado" :class="{ atual: item.atual }">
              [{{ item.periodo }}]
            </p>
            <h3>{{ item.empresa }}</h3>
            <p class="cargo">{{ item.cargo }}</p>
            <ul class="feitos">
              <li v-for="feito in item.feitos" :key="feito">{{ feito }}</li>
            </ul>
            <p class="rotulo pilha">{{ item.pilha }}</p>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script>
import foto from "../assets/vinicius_sobre-900.jpg";

export default {
  name: "Sobre",
  data() {
    return {
      foto,
      extras: [
        { nome: "Formação", valor: "Bacharelado em Engenharia de Computação, IFMG (01/2017 a 09/2025)" },
        { nome: "Técnico", valor: "Técnico em Informática, Pronatec (2014 a 2015)" },
        { nome: "Certificações", valor: "Docker: criando e gerenciando containers; Python Avançado; TypeScript parte 3" },
        { nome: "Ferramentas", valor: "Git, GitHub, GitLab, Docker, CI/CD, Kanban" },
        { nome: "Idiomas", valor: "Inglês e espanhol intermediários" },
        { nome: "Local", valor: "São Roque de Minas, MG" },
      ],
      experiencia: [
        {
          empresa: "Sítio Recanto do Queijo",
          cargo: "Engenheiro de Software Pleno",
          periodo: "07/2025 - atual",
          atual: true,
          feitos: [
            "Desenvolvi e evoluí APIs e módulos back-end em Java, Spring Boot e Node.js, com as regras de negócio dos sistemas corporativos usados na operação.",
            "Integrei sistemas internos, bancos de dados e APIs REST para dar suporte aos fluxos operacionais e logísticos da empresa.",
            "Criei e otimizei consultas, views e procedures em SQL Server.",
            "Automatizei a coleta, o tratamento e a estruturação de dados com Python, reduzindo o esforço manual da equipe.",
            "Implementei interfaces em Angular, PrimeNG e TypeScript conectadas ao back-end.",
          ],
          pilha: "Java / Spring Boot / SQL Server / Python / Node.js / Angular / Docker / CI/CD",
        },
        {
          empresa: "Sítio Recanto do Queijo",
          cargo: "Engenheiro de Software Júnior",
          periodo: "02/2024 - 07/2025",
          feitos: [
            "Contribuí para a evolução do ERP da empresa com funcionalidades em Java e Spring Boot, traduzindo regras de negócio em lógica back-end.",
            "Implementei e mantive APIs REST para integrar os módulos do ERP.",
            "Desenvolvi scripts e pipelines de integração em Python para automatizar processos operacionais.",
            "Elaborei consultas SQL avançadas e relatórios para apoiar análises e decisões gerenciais.",
          ],
          pilha: "Java / Spring Boot / SQL Server / Python / Node.js / Docker",
        },
        {
          empresa: "Fusion Tecnologia",
          cargo: "Estagiário de Desenvolvimento de Software",
          periodo: "10/2023 - 01/2024",
          feitos: [
            "Desenvolvi telas e componentes reativos com Vue.js e Vuetify para aplicações web corporativas.",
            "Integrei as interfaces ao back-end em Ruby on Rails.",
            "Apoiei a manutenção e a evolução das aplicações, versionando com Git e GitLab.",
          ],
          pilha: "Vue.js / Vuetify / Ruby on Rails / Git / GitLab",
        },
        {
          empresa: "Sicoob Sarom",
          cargo: "Assistente de Desenvolvimento",
          periodo: "04/2021 - 02/2022",
          feitos: [
            "Contribuí para a modernização de um ERP legado, participando da migração de ASP Classic para uma arquitetura web moderna.",
            "Desenvolvi funcionalidades com Vue.js, Vuetify e Node.js para interfaces usadas nas rotinas internas.",
            "Construí consultas e relatórios complexos em MySQL para apoiar a tomada de decisão.",
          ],
          pilha: "ASP Classic / Vue.js / Vuetify / Node.js / MySQL",
        },
      ],
    };
  },
};
</script>

<style scoped>
.grade {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: clamp(36px, 7vw, 88px);
}

.historia img {
  float: left;
  width: 42%;
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: 40% 30%;
  margin: 6px 22px 12px 0;
  border: 1px solid var(--ambar);
  filter: grayscale(1) contrast(1.15);
}

.historia p + p {
  margin-top: 18px;
}

.extras {
  clear: both;
  padding-top: 28px;
}

.extras > div {
  padding-block: 10px;
  border-top: 1px solid var(--linha);
}

.extras dd {
  font-size: 0.96rem;
  line-height: 1.45;
}

.log > li {
  padding-left: 22px;
  padding-bottom: 34px;
  border-left: 1px solid var(--linha);
}

.log > li:last-child {
  padding-bottom: 0;
}

.estado {
  font-family: var(--fonte-mono);
  font-size: 0.78rem;
  color: var(--texto-2);
}

.estado.atual {
  color: var(--ambar);
}

.log h3 {
  font-family: var(--fonte-tela);
  font-size: 2.1rem;
  font-weight: 400;
  line-height: 1.1;
}

.cargo {
  margin-bottom: 8px;
  color: var(--magenta);
  font-size: 0.98rem;
}

.feitos li {
  position: relative;
  padding-left: 18px;
  font-size: 0.98rem;
  line-height: 1.55;
}

.feitos li + li {
  margin-top: 6px;
}

.feitos li::before {
  content: ">";
  position: absolute;
  left: 0;
  font-family: var(--fonte-mono);
  color: var(--magenta);
}

.pilha {
  margin-top: 10px;
  text-transform: none;
  letter-spacing: 0;
}

@media (max-width: 820px) {
  .grade {
    grid-template-columns: minmax(0, 1fr);
  }

  .historia img {
    width: 38%;
  }
}
</style>
