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
                Full Stack, trago uma base sólida de conhecimento técnico com
                aplicação direta na melhoria de sistemas que aumentaram a
                eficiência operacional, a usabilidade e os resultados de negócio
                das empresas onde atuei. Tenho experiência prática em todo o
                ciclo de vida do desenvolvimento de software, com entregas
                orientadas a valor e impacto real.
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
  <strong>
    Este projeto pode ser visto em detalhes na seção acima, ou clicando
    em "TCC" no menu superior (ou na barra lateral, caso esteja no
    celular).
  </strong>
                  </p>
                  <p class="mb-4">
                    <strong>Minha jornada profissional</strong> inclui passagens
                    por:
                    <ul class="ml-5 mt-4 mb-4">
                      <li class="mb-2">
                        <strong>SICOOB SAROMCREDI (Assistente de
                          Desenvolvimento):</strong>
                        Participei da criação de interfaces bancárias internas
                        com <strong>Vue.js</strong>, <strong>HTML</strong>,
                        <strong>JavaScript</strong> e <strong>MySQL</strong>.
                        As soluções melhoraram a navegação, reduziram erros
                        operacionais e aumentaram a confiabilidade dos processos
                        administrativos.
                      </li>
                      <li class="mb-2">
                        <strong>FUSION Tecnologia (Estagiário de Desenvolvimento
                          Full Stack):</strong>
                        Atuei no desenvolvimento de aplicações web modernas com
                        <strong>Vue.js</strong> e <strong>Ruby on Rails</strong>.
                        Reestruturei fluxos e componentes que reduziram o tempo
                        de execução de tarefas críticas em até 40%, com
                        integração fluida entre front-end e back-end.
                      </li>
                      <li>
                        <strong>Sítio Recanto do Queijo (Desenvolvedor de Software
                          Júnior - Atual):</strong>
                        Implantei sistemas internos com
                        <strong>Angular</strong>, <strong>Spring Boot</strong> e
                        <strong>SQL Server</strong>, otimizando o controle de
                        produção e a rastreabilidade de dados, apoiando decisões
                        estratégicas com base em dados integrados e confiáveis.
                      </li>
                    </ul>
                  </p>
                  <p class="mb-4">
                    A experiência acumulada nessas funções fortaleceu minha
                    capacidade de construir soluções que realmente resolvem
                    problemas. Tenho domínio em <strong>Java</strong>,
                    <strong>Python</strong>, <strong>JavaScript</strong>,
                    <strong>SQL</strong> e uso avançado de <strong>Git/GitHub</strong>,
                    atuando com foco em eficiência, clareza de código e valor de
                    entrega.
                  </p>
                  <p>
                    Busco desafios que permitam aplicar tecnologia para
                    <strong>resolver problemas reais, escalar processos e
                      contribuir diretamente para o crescimento das
                      empresas</strong>.
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
};
</script>

<style scoped>
.v-card-title {
  color: #1976d2;
}
.v-card-subtitle {
  color: #555;
}
</style>
