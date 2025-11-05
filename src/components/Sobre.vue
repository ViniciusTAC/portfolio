<template>
  <v-container style="height: auto">
    <v-card class="py-8 px-5 mx-auto">
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
            <v-card-title class="text-h4 font-weight-bold text-wrap">
              Sobre mim 💭
            </v-card-title>
            <v-card-subtitle class="text-h6 text-wrap mb-4">
              Engenheiro de Computação Formado e Desenvolvedor Full Stack
            </v-card-subtitle>

            <v-card-text class="text-body-1" style="line-height: 1.6">
              <p class="mb-4">
                Como <strong>Engenheiro de Computação</strong> e Desenvolvedor
                Full Stack, trago uma base sólida de conhecimento técnico e a
                experiência prática de ter atuado em todo o ciclo de vida do
                desenvolvimento de software. Minha formação foi marcada pela
                <strong>excelência acadêmica</strong>...
              </p>

              <v-expand-transition>
                <div v-show="dialogoAberto">
                  <p class="mb-4">
                    Minha formação foi marcada pela
                    <strong>excelência acadêmica</strong> e
                    <strong>dedicação a projetos de alto impacto</strong>,
                    culminando em um
                    <strong>Trabalho de Conclusão de Curso (TCC) de
                      destaque</strong>
                    focado na
                    <strong>Automação de Coleta e Estruturação de Dados da CVM
                      para Análise Fundamentalista</strong>.
                  </p>
                  <p class="mb-4">
                    Neste projeto, desenvolvi um software completo em
                    <strong>Python</strong> seguindo uma arquitetura
                    <strong>ETL (Extração, Transformação e Carga)</strong>. O
                    sistema é capaz de coletar, processar e integrar grandes
                    volumes de dados financeiros públicos da CVM (DFPs, ITRs,
                    etc.) em um banco <strong>SQLite</strong>, permitindo a
                    aplicação prática de análise fundamentalista e o cálculo de
                    indicadores quantitativos. Esta realização demonstra minha
                    proficiência em
                    <strong>arquitetura de software robusta, processamento de
                      dados e otimização de sistemas</strong>
                    para fins de análise de negócios.
                  </p>
                  <p class="mb-4">
                    <strong>Minha jornada profissional</strong> inclui passagens
                    por:
                    <ul class="ml-5 mt-4 mb-4">
                      <li class="mb-2">
                        <strong>SICOOB SAROMCREDI (Assistente de
                          Desenvolvimento):</strong>
                        Foco no desenvolvimento front-end (Vue.js, HTML,
                        JavaScript e MySQL), responsável pelo design e
                        implementação de interfaces de usuário eficientes,
                        garantindo alto desempenho e usabilidade.
                      </li>
                      <li class="mb-2">
                        <strong>FUSION Tecnologia (Estagiário de Desenvolvimento
                          Full Stack):</strong>
                        Desenvolvimento de aplicações web utilizando Vue.js e
                        Ruby on Rails, atuando na integração do front-end e
                        back-end para uma experiência coesa.
                      </li>
                      <li>
                        <strong>Sítio Recanto do Queijo (Desenvolvedor de Software
                          Júnior - Atual):</strong>
                        Criação de interfaces dinâmicas e integração com
                        back-end usando Angular, Spring Boot e SQL Server, com
                        foco em inovação e excelência técnica.
                      </li>
                    </ul>
                  </p>
                  <p class="mb-4">
                    A experiência acumulada nessas funções me permitiu
                    desenvolver uma
                    <strong>sólida compreensão de práticas de desenvolvimento de
                      software, arquitetura de sistemas</strong>
                    e me tornar um profissional
                    <strong>resiliente, adaptável e comprometido com a evolução
                      constante</strong>. Possuo proficiência em Java, Python,
                    JavaScript, SQL e familiaridade com Git/GitHub.
                  </p>
                  <p>
                    Busco novos desafios para
                    <strong>impactar positivamente a vida das pessoas através de
                      soluções tecnológicas eficientes e escaláveis</strong>.
                  </p>
                </div>
              </v-expand-transition>

              <v-btn
                color="primary"
                @click="dialogoAberto = !dialogoAberto"
                class="mt-4"
              >
                {{ dialogoAberto ? 'Ler menos' : 'Ler mais' }}
                <v-icon
                  :icon="dialogoAberto ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                  end
                ></v-icon>
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
  // O 'methods' não é mais necessário para esta funcionalidade simples
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
