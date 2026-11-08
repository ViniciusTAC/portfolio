<template>
  <section class="secao">
    <div class="miolo">
      <h2 class="titulo"><span>05</span>Projetos</h2>

      <p class="nota">
        Meus sistemas em Java e Spring Boot são internos das empresas onde
        trabalho, então o código não é público. Aqui ficam os projetos abertos.
      </p>

      <ul>
        <li v-for="projeto in projetos" :key="projeto.nome" class="projeto">
          <pre aria-hidden="true">{{ projeto.diagrama }}</pre>
          <div>
            <h3>{{ projeto.titulo }}</h3>
            <p>{{ projeto.descricao }}</p>
            <p class="rotulo pilha">{{ projeto.pilha }}</p>
          </div>
          <a
            class="link"
            :href="projeto.link"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`Ver ${projeto.titulo} no GitHub`"
            >Ver código</a
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      projetos: [
        {
          nome: "Vue",
          titulo: "Quadro Kanban",
          descricao:
            "Quadro de atividades com colunas para cada estado da tarefa: A Fazer, Fazendo e Prontas.",
          pilha: "Vue 2 / Vuetify 2",
          link: "https://github.com/ViniciusTAC/ProjetoVue",
          diagrama: `A FAZER  FAZENDO  PRONTAS
[====]   [===]    [==]
[==]     [=]      [====]
[===]             [=]`,
        },
        {
          nome: "Ruby",
          titulo: "API do Quadro Kanban",
          descricao:
            "Back-end do quadro: as APIs que gerenciam tarefas e colunas, em Rails com PostgreSQL.",
          pilha: "Ruby on Rails / PostgreSQL",
          link: "https://github.com/ViniciusTAC/backend",
          diagrama: `front-end
    │
    ▼
rails api ──► postgresql`,
        },
        {
          nome: "Minicurso",
          titulo: "Minicurso de Desenvolvimento Web",
          descricao:
            "Minicurso introdutório que ministrei, com uma visão geral dos conceitos e tecnologias usados para criar sites.",
          pilha: "Material de aula",
          link: "https://github.com/ViniciusTAC/MiniCurso-Web",
          diagrama: `<aula>
  conceitos
  tecnologias
</aula>`,
        },
      ],
    };
  },
};
</script>

<style scoped>
.nota {
  max-width: 68ch;
  margin-bottom: 32px;
  color: var(--texto-2);
}

.projeto {
  display: grid;
  grid-template-columns: 250px minmax(0, 1fr) auto;
  gap: clamp(20px, 4vw, 48px);
  align-items: center;
  padding-block: 28px;
  border-bottom: 1px solid var(--linha);
}

.projeto:first-child {
  padding-top: 0;
}

pre {
  color: var(--ambar);
  font-family: var(--fonte-mono);
  font-size: 0.8rem;
  line-height: 1.5;
}

h3 {
  font-family: var(--fonte-tela);
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 1.1;
  margin-bottom: 6px;
}

.pilha {
  margin-top: 8px;
  text-transform: none;
  letter-spacing: 0;
}

.link {
  white-space: nowrap;
}

@media (max-width: 820px) {
  .projeto {
    grid-template-columns: 1fr;
    gap: 14px;
  }
}
</style>
