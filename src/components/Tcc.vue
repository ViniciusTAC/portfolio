<template>
  <section id="TCC" class="py-12">
    <v-container>
      <!-- Título -->
      <h2 class="text-h4 text-md-h3 font-weight-bold mb-4">
        TCC – Automação de Coleta e Estruturação de Dados da CVM para Análise
        Fundamentalista
      </h2>

      <!-- Resumo breve -->
      <p class="text-body-1 mb-6">
        Desenvolvimento de um software em <strong>Python</strong> para coletar,
        estruturar e integrar dados financeiros públicos da CVM, permitindo a
        aplicação prática da <em>análise fundamentalista</em> em empresas de
        capital aberto. O sistema utiliza uma arquitetura <strong>ETL</strong>,
        banco de dados <strong>SQLite</strong> e suporte a indicadores
        quantitativos.
      </p>

      <!-- Botões principais -->
      <div class="mb-6">
        <v-btn
          color="primary"
          variant="flat"
          prepend-icon="mdi-open-in-new"
          :href="tccRepo"
          target="_blank"
          rel="noopener"
          class="mr-3"
        >
          Repositório Biblioteca
        </v-btn>

        <v-btn
          color="primary"
          variant="flat"
          prepend-icon="mdi-file-pdf-box"
          :href="tccPdf"
          target="_blank"
          rel="noopener"
          class="mr-3"
        >
          Baixar PDF
        </v-btn>

        <v-btn
          color="primary"
          variant="flat"
          prepend-icon="mdi-github"
          :href="tccGithub"
          target="_blank"
          rel="noopener"
        >
          GitHub
        </v-btn>
      </div>

      <v-expand-transition>
        <div v-if="mostrarMais" class="mt-6">
          <!-- Detalhes técnicos -->
          <h3 class="text-h6 font-weight-bold mb-2">Detalhes do Projeto</h3>
          <p class="text-body-2 mb-3">
            O sistema segue o fluxo de
            <strong>coleta → extração → armazenamento → análise</strong>. Os
            dados da CVM (DFPs, ITRs, FCA, IPE, FRE) são processados e inseridos
            em banco relacional. Logs detalhados garantem rastreabilidade de
            sucessos e falhas.
          </p>

          <!-- Estrutura -->
          <h4 class="text-subtitle-1 font-weight-bold mt-4 mb-2">
            Estrutura do Projeto
          </h4>
          <ul class="text-body-2">
            <li><code>collectors/</code> – Scripts de coleta e download</li>
            <li><code>extractor/</code> – Extração e transformação de dados</li>
            <li><code>models/</code> – Definições das entidades</li>
            <li><code>service/</code> – Regras de processamento</li>
            <li><code>repository/</code> – Controle do banco</li>
            <li><code>utils/</code> – Funções auxiliares e logger</li>
            <li><code>main.py</code> – Script principal</li>
          </ul>

          <!-- Tecnologias -->
          <h4 class="text-subtitle-1 font-weight-bold mt-4 mb-2">
            Tecnologias
          </h4>
          <div>
            <v-chip color="primary" text-color="white">Python</v-chip>
            <v-chip color="primary" text-color="white">BeautifulSoup</v-chip>
            <v-chip color="primary" text-color="white">Requests</v-chip>
            <v-chip color="primary" text-color="white">Pandas</v-chip>
            <v-chip color="primary" text-color="white">SQLAlchemy</v-chip>
            <v-chip color="primary" text-color="white">SQLite</v-chip>
          </div>

          <!-- Requisitos -->
          <h4 class="text-subtitle-1 font-weight-bold mt-4 mb-2">Requisitos</h4>
          <ul class="text-body-2">
            <li>Python 3.11+</li>
            <li>Mínimo de 16 GB de espaço livre</li>
            <li>Recomendado 8 GB de RAM</li>
          </ul>
        </div>
      </v-expand-transition>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Tcc",
  data() {
    return {
      mostrarMais: true,
      tccRepo:
        "https://repositorio.ifmg.edu.br/items/0a3a3ec7-1072-4986-8b7c-588560290569",
      tccPdf:
        "https://repositorio.ifmg.edu.br/bitstreams/0c9d6010-5bef-4d33-9f78-5ed2f45791cc/download",
      tccGithub: "https://github.com/ViniciusTAC/cvm-fundamentalist-analysis",
    };
  },
};
</script>
