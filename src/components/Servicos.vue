<template>
  <section class="secao">
    <div class="miolo">
      <h2 class="titulo"><span>04</span>Stack</h2>

      <div class="abas" role="group" aria-label="Escolha uma tecnologia">
        <button
          v-for="(item, i) in competencias"
          :key="item.titulo"
          type="button"
          :aria-pressed="aberta === i"
          @click="aberta = i"
        >
          {{ item.titulo }}
        </button>
      </div>

      <div class="painel" aria-live="polite">
        <dl class="dados">
          <div v-for="dado in atual.dados" :key="dado.nome">
            <dt class="rotulo">{{ dado.nome }}</dt>
            <dd>{{ dado.valor }}</dd>
          </div>
        </dl>

        <div class="texto">
          <p v-for="paragrafo in atual.texto" :key="paragrafo">
            {{ paragrafo }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Competencias",
  data() {
    return {
      aberta: 0,
      competencias: [
        {
          titulo: "Java + Spring",
          dados: [
            { nome: "Uso hoje", valor: "APIs e módulos back-end com Spring Boot" },
            { nome: "No dia a dia", valor: "APIs REST, regras de negócio, integrações, ERP" },
            { nome: "Primeiro contato", valor: "Técnico em Informática, Pronatec" },
            { nome: "Já implementei", valor: "Enxame de Partículas (PSO)" },
          ],
          texto: [
            "Java e Spring Boot são a base do meu trabalho. No Sítio Recanto do Queijo desenvolvo APIs e módulos back-end para os sistemas corporativos usados na operação: analiso a demanda e a regra de negócio, implemento, integro com banco de dados e outros sistemas e cuido da sustentação em produção.",
            "Como júnior, entrei contribuindo com a evolução do ERP da empresa, traduzindo regras de negócio em lógica back-end e construindo APIs REST para integrar os módulos. Como pleno, passei a participar também da definição técnica das soluções e da modernização de sistemas legados.",
            "Meu primeiro contato com Java foi no Técnico em Informática do Pronatec, e foi o que despertou meu interesse por programação. Na faculdade aprofundei em Programação Orientada a Objetos: encapsulamento, herança e polimorfismo.",
            "Nessa disciplina implementei o algoritmo de Otimização por Enxame de Partículas (PSO) para minimizar funções como Esfera, Rosenbrock e Rastrigin. Foi quando a teoria começou a fazer sentido para mim na prática.",
          ],
        },
        {
          titulo: "SQL",
          dados: [
            { nome: "Uso hoje", valor: "SQL Server" },
            { nome: "Já usei", valor: "MySQL" },
            { nome: "No dia a dia", valor: "Consultas, views, procedures, relatórios, modelagem relacional" },
          ],
          texto: [
            "Boa parte do valor de um sistema corporativo está no dado. Hoje crio e otimizo consultas, views, procedures e estruturas relacionais em SQL Server para atender às regras de negócio e dar suporte à operação.",
            "Como júnior no Sítio Recanto do Queijo, elaborei consultas avançadas e relatórios que organizaram os dados da operação para apoiar análises e decisões gerenciais.",
            "Antes disso, no Sicoob Sarom, construí consultas e relatórios complexos em MySQL para transformar dados operacionais em informação de apoio à decisão.",
          ],
        },
        {
          titulo: "Python",
          dados: [
            { nome: "Uso hoje", valor: "Automação e pipelines de integração" },
            { nome: "Primeiro contato", valor: "1º período da graduação" },
            { nome: "Já implementei", valor: "Árvore B+, compilador, ETL da CVM" },
          ],
          texto: [
            "Conheci Python no primeiro período da graduação, quando um colega comentou sobre uma linguagem nova que não exigia ponto e vírgula no final das linhas. Depois fiz um curso dado por um veterano e aprendi o básico.",
            "Em Cálculo Numérico a linguagem virou uma das minhas ferramentas favoritas, porque ali vi na prática como ela resolve problemas matemáticos complexos. Mais tarde usei Python também em Inteligência Artificial e no tratamento de grandes volumes de dados.",
            "Em Banco de Dados II implementei uma árvore B+, a estrutura usada no funcionamento dos bancos de dados. Em Compiladores, o trabalho final foi um programa que recebia um texto, fazia as análises e devolvia a árvore de sintaxe.",
            "No trabalho, uso Python para automatizar a coleta, o tratamento e a estruturação de dados, com scripts e pipelines de integração que reduzem o esforço manual da equipe. Também foi a linguagem do meu TCC.",
          ],
        },
        {
          titulo: "Web",
          dados: [
            { nome: "Uso hoje", valor: "Angular, PrimeNG, TypeScript" },
            { nome: "Já usei", valor: "Vue.js, Vuetify, Node.js, ASP Classic" },
            { nome: "Primeiro contato", valor: "Técnico em Informática, Pronatec" },
          ],
          texto: [
            "Comecei no curso Técnico em Informática do Pronatec, criando sites e sistemas simples com HTML, CSS e JavaScript. Eram projetos básicos, mas foi ali que aprendi lógica de programação e como ligar uma interface a alguma funcionalidade de verdade.",
            "O primeiro emprego veio no Sicoob Sarom, mantendo sistemas em ASP Classic e participando da migração de um ERP legado para uma arquitetura web mais moderna, com Vue.js, Vuetify e Node.js.",
            "O Vue.js me levou ao estágio na Fusion Tecnologia, onde desenvolvi telas e componentes com Vuetify e integrei as interfaces a um back-end em Ruby on Rails.",
            "Hoje, no Sítio Recanto do Queijo, implemento interfaces em Angular, PrimeNG e TypeScript conectadas ao back-end em Spring Boot.",
          ],
        },
      ],
    };
  },
  computed: {
    atual() {
      return this.competencias[this.aberta];
    },
  },
};
</script>

<style scoped>
.abas {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.abas button {
  padding: 6px 24px 4px;
  border: 1px solid var(--linha);
  border-bottom: 0;
  background: var(--painel);
  color: var(--texto-2);
  font-family: var(--fonte-tela);
  font-size: 1.7rem;
  line-height: 1.1;
  cursor: pointer;
}

.abas button:hover {
  color: var(--texto);
}

.abas button[aria-pressed="true"] {
  background: var(--magenta);
  border-color: var(--magenta);
  color: #000;
}

.painel {
  display: grid;
  grid-template-columns: minmax(200px, 3fr) minmax(0, 7fr);
  gap: clamp(28px, 5vw, 64px);
  padding: clamp(20px, 4vw, 40px);
  border: 1px solid var(--magenta);
  /* mantém a altura estável ao trocar de aba */
  min-height: 430px;
}

.dados > div + div {
  margin-top: 20px;
}

.dados dd {
  line-height: 1.4;
  margin-top: 2px;
}

.texto {
  max-width: 68ch;
}

.texto p + p {
  margin-top: 16px;
}

@media (max-width: 820px) {
  .abas button {
    padding-inline: 14px;
  }

  .painel {
    grid-template-columns: minmax(0, 1fr);
    min-height: 0;
  }
}
</style>
