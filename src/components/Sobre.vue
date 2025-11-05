<template>
  <v-container style="max-width: 100vw; height: auto;">
    <v-card class="py-8 px-5 mx-auto" style="max-width: 100vw;">
      <v-row align="center">
        <v-col cols="12" md="4" class="d-flex justify-center align-center">
          <v-img
            width="50vw"
            height=""
            src="../assets/vinicius_sobre.jpg"
            alt="Foto de Vinícius"
            style="border-radius: 8px; border: 2px solid #ccc;"
          ></v-img>
        </v-col>

        <v-col cols="12" md="8">
          <v-card flat>
            <v-card-title class="text-h4 font-weight-bold text-wrap">Sobre mim 💭</v-card-title>
            <v-card-subtitle class="text-h6 text-wrap mb-4">
              Engenheiro de Computação Formado e Desenvolvedor Full Stack
            </v-card-subtitle>

            <v-card-text>
              <span v-if="!dialogoAberto" style="font-size: 1rem; line-height: 1.6;">
                <p>
                  Como **Engenheiro de Computação** e Desenvolvedor Full Stack, trago uma base sólida de
                  conhecimento técnico e a experiência prática de ter atuado em todo o ciclo de vida do
                  desenvolvimento de software. Minha formação foi marcada pela **excelência acadêmica**...
                </p>
              </span>

              <v-btn v-if="!dialogoAberto" color="primary" @click="abrirDialogo" class="mt-2">
                Ler mais <v-icon icon="mdi-chevron-down" end></v-icon>
              </v-btn>

              <span v-if="dialogoAberto" style="font-size: 1rem; line-height: 1.6;">
                <p>
                  Como **Engenheiro de Computação** e Desenvolvedor Full Stack, trago uma base sólida de conhecimento
                  técnico e a experiência prática de ter atuado em todo o ciclo de vida do desenvolvimento de software.
                </p>
                <br>
<p>
  Minha formação foi marcada pela **excelência acadêmica** e **dedicação a projetos de alto impacto**,
  culminando em um **Trabalho de Conclusão de Curso (TCC) de destaque** focado na **Automação de Coleta e Estruturação de Dados da CVM para Análise Fundamentalista**.
</p>
<p>
  Neste projeto, desenvolvi um software completo em **Python** seguindo uma arquitetura **ETL (Extração, Transformação e Carga)**. O sistema é capaz de coletar, processar e integrar grandes volumes de dados financeiros públicos da CVM (DFPs, ITRs, etc.) em um banco **SQLite**, permitindo a aplicação prática de análise fundamentalista e o cálculo de indicadores quantitativos. Esta realização demonstra minha proficiência em **arquitetura de software robusta, processamento de dados e otimização de sistemas** para fins de análise de negócios.
</p>
                <br>
                <p>
                  **Minha jornada profissional** inclui passagens por:
                  <ul>
                    <li>**SICOOB SAROMCREDI (Assistente de Desenvolvimento):** Foco no desenvolvimento front-end (Vue.js, HTML, JavaScript e MySQL), responsável pelo design e implementação de interfaces de usuário eficientes, garantindo alto desempenho e usabilidade.</li>
                    <li>**FUSION Tecnologia (Estagiário de Desenvolvimento Full Stack):** Desenvolvimento de aplicações web utilizando Vue.js e Ruby on Rails, atuando na integração do front-end e back-end para uma experiência coesa.</li>
                    <li>**Sítio Recanto do Queijo (Desenvolvedor de Software Júnior - Atual):** Criação de interfaces dinâmicas e integração com back-end usando Angular, Spring Boot e SQL Server, com foco em inovação e excelência técnica.</li>
                  </ul>
                </p>
                <br>
                <p>
                  A experiência acumulada nessas funções me permitiu desenvolver uma **sólida compreensão de práticas de
                  desenvolvimento de software, arquitetura de sistemas** e me tornar um profissional **resiliente,
                  adaptável e comprometido com a evolução constante**. Possuo proficiência em Java, Python, JavaScript,
                  SQL e familiaridade com Git/GitHub.
                </p>
                <br>
                <p>
                  Busco novos desafios para **impactar positivamente a vida das pessoas através de soluções tecnológicas
                  eficientes e escaláveis**.
                </p>
              </span>

              <v-btn v-if="dialogoAberto" color="primary" @click="dialogoAberto = false" class="mt-2">
                Ler menos <v-icon icon="mdi-chevron-up" end></v-icon>
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Sobre",
  data() {
    return {
      dialogoAberto: false,
    };
  },
  methods: {
    abrirDialogo() {
      this.dialogoAberto = true;
    },
  },
};
</script>

<style scoped>
/* Estilos adicionais para melhorar a apresentação */
.v-card-title {
  color: #1976d2;
}
.v-card-subtitle {
  color: #555;
}
</style>
