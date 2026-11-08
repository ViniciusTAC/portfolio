<template>
  <section id="TCC" class="secao tcc">
    <div class="miolo">
      <h2 class="titulo"><span>03</span>TCC</h2>

      <div class="grade">
        <div>
          <h3 class="nome-tcc">
            Automação de Coleta e Estruturação de Dados da CVM para Análise
            Fundamentalista
          </h3>
          <p class="resumo">
            Software em Python que coleta, estrutura e integra dados financeiros
            públicos da CVM, para aplicar análise fundamentalista em empresas de
            capital aberto. Os documentos (DFP, ITR, FCA, IPE e FRE) passam por
            uma arquitetura ETL e vão para um banco relacional. Logs detalhados
            registram cada sucesso e cada falha.
          </p>

          <ol class="fluxo" aria-label="Fluxo do sistema">
            <li v-for="etapa in etapas" :key="etapa">{{ etapa }}</li>
          </ol>

          <div class="links">
            <a :href="tccRepo" target="_blank" rel="noopener">Repositório IFMG</a>
            <a :href="tccPdf" target="_blank" rel="noopener">Baixar PDF</a>
            <a :href="tccGithub" target="_blank" rel="noopener">GitHub</a>
          </div>
        </div>

        <div class="tecnico">
          <pre tabindex="0" aria-label="Estrutura de pastas do projeto">{{ arvore }}</pre>

          <div class="colunas">
            <div>
              <h4>Tecnologias</h4>
              <ul>
                <li v-for="t in tecnologias" :key="t">{{ t }}</li>
              </ul>
            </div>
            <div>
              <h4>Requisitos</h4>
              <ul>
                <li>Python 3.11+</li>
                <li>16 GB livres em disco</li>
                <li>8 GB de RAM (recomendado)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Tcc",
  data() {
    return {
      tccRepo:
        "https://repositorio.ifmg.edu.br/items/0a3a3ec7-1072-4986-8b7c-588560290569",
      tccPdf:
        "https://repositorio.ifmg.edu.br/bitstreams/0c9d6010-5bef-4d33-9f78-5ed2f45791cc/download",
      tccGithub: "https://github.com/ViniciusTAC/cvm-fundamentalist-analysis",
      etapas: ["Coleta", "Extração", "Armazenamento", "Análise"],
      tecnologias: [
        "Python",
        "BeautifulSoup",
        "Requests",
        "Pandas",
        "SQLAlchemy",
        "SQLite",
      ],
      arvore: `cvm-fundamentalist-analysis/
├── collectors/   coleta e download
├── extractor/    extração e transformação
├── models/       entidades
├── service/      regras de processamento
├── repository/   controle do banco
├── utils/        auxiliares e logger
└── main.py       script principal`,
    };
  },
};
</script>

<style scoped>
.tcc {
  background: var(--ambar);
  color: var(--tinta);
}

.tcc .titulo {
  border-bottom-color: var(--tinta);
}

.tcc .titulo span {
  color: var(--tinta);
}

.grade {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(36px, 6vw, 72px);
}

.nome-tcc {
  font-family: var(--fonte-tela);
  font-size: clamp(2.2rem, 4vw, 3.1rem);
  font-weight: 400;
  line-height: 1;
}

.resumo {
  margin-top: 20px;
}

.fluxo {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 0;
  margin-top: 26px;
  font-family: var(--fonte-mono);
  font-size: 0.86rem;
  font-weight: 600;
}

.fluxo li {
  padding: 5px 10px;
  border: 1.5px solid var(--tinta);
}

.fluxo li + li {
  margin-left: 18px;
  position: relative;
}

.fluxo li + li::before {
  content: ">";
  position: absolute;
  left: -15px;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
}

.links a {
  padding: 10px 16px;
  background: var(--tinta);
  color: var(--ambar);
  font-family: var(--fonte-mono);
  font-size: 0.88rem;
  text-decoration: none;
}

.links a:hover {
  background: var(--magenta-base);
  color: #fff;
}

.tcc :focus-visible {
  outline-color: var(--tinta);
}

pre {
  padding: 20px;
  overflow-x: auto;
  background: var(--tinta);
  color: var(--ambar);
  font-family: var(--fonte-mono);
  font-size: 0.84rem;
  line-height: 1.6;
}

.colunas {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 24px;
  font-size: 0.96rem;
}

h4 {
  margin-bottom: 6px;
  font-family: var(--fonte-mono);
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

@media (max-width: 820px) {
  .grade {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
