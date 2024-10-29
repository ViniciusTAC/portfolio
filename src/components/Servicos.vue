<template>
  <v-container style="max-width: 100vw; height: 100vh;">
    <br>
    <v-container style="max-width: 100vw;" align="center">
      <v-row justify="center">
        <h1>
          Minhas <span style="color: #cd00cd;">Competências</span>
        </h1>
      </v-row>
      <br>
      <br>
      <v-card style="border-radius: 16px;" variant="outlined" class="px-3 py-6">

        <v-row style="width: 100%;">
          <v-col>
            <v-card style="border-radius: 16px;" variant="outlined" align="center" class="botao-expandir"
              :color="corCardWeb" @mouseover="mudarCorCard('Web')" @mouseleave="mudarCorCardAoSair('Web')"
              @click="abrirDialogo('Web')">
              <v-card-item>
                <v-card-title>
                  <v-icon size="x-large" color="primary" icon="mdi-code-tags" end></v-icon>
                  <br />
                  <h2 style="color: white;">Desenvolvimento Web</h2>
                </v-card-title>
              </v-card-item>

              <v-card-text>
                <!-- Exibe apenas o início do texto -->
                <span style="font-size: large; color: white;">

                  <p>
                    Minha jornada no desenvolvimento web começou com o curso Técnico em Informática oferecido pelo
                    Pronatec do Governo Federal. Foi nesse ambiente que tive meu primeiro contato com a criação de
                    websites e sistemas simples, utilizando tecnologias fundamentais como HTML, CSS e JavaScript. Esses
                    primeiros projetos, apesar de básicos, foram cruciais para construir uma compreensão sólida dos
                    princípios do desenvolvimento web, ...
                  </p>
                  <br>
                  <br>
                </span>
                <br /><br />
                <v-btn color="primary" @click="abrirDialogo('Web')">
                  Ver mais <v-icon icon="mdi-chevron-down" end></v-icon>
                </v-btn>
              </v-card-text>

              <!-- Diálogo com o texto completo -->
              <v-dialog v-model="dialogoAbertoWeb" max-width="95vw">
                <v-card>
                  <v-card-title align="center">
                    <h2>Desenvolvimento Web</h2>
                  </v-card-title>
                  <v-card-text>

                    <p>
                      Minha jornada no desenvolvimento web começou com o curso Técnico em Informática oferecido pelo
                      Pronatec do Governo Federal. Foi nesse ambiente que tive meu primeiro contato com a criação de
                      websites e sistemas simples, utilizando tecnologias fundamentais como HTML, CSS e JavaScript.
                      Esses
                      primeiros projetos, apesar de básicos, foram cruciais para construir uma compreensão sólida dos
                      princípios do desenvolvimento web, tanto no front-end quanto no back-end. Através deles, pude
                      aprimorar minhas habilidades em lógica de programação, design de interfaces e na integração de
                      funcionalidades dinâmicas em páginas.
                    </p>

                    <br>

                    <p>
                      Após essa formação, ingressei na faculdade, onde aprofundei meus conhecimentos e descobri novas
                      ferramentas e práticas. Minha primeira experiência profissional foi como Assistente de
                      Desenvolvimento
                      no SICOOB Saromcredi, onde trabalhei com Vue.js, Node.js, JavaScript e MySQL. Nesse papel, fui
                      responsável por projetar e implementar interfaces web de usuário eficientes e atraentes, sempre
                      buscando soluções que atendessem às necessidades dos usuários finais.

                    </p>

                    <br>

                    <p>
                      Os conhecimentos adquiridos em Vue.js me levaram a uma nova oportunidade como Estagiário de
                      Desenvolvimento na Fusion Tecnologia. Lá, atuei como desenvolvedor full-stack, aplicando meus
                      conhecimentos em Vue.js e Ruby on Rails para criar aplicações web dinâmicas e interativas. A
                      experiência de trabalhar em equipe e desenvolver soluções integradas foi fundamental para meu
                      crescimento profissional.
                    </p>

                    <br>

                    <p>
                      Atualmente, sou Desenvolvedor de Software Júnior no Sítio Recanto do Queijo, onde utilizo Angular,
                      Spring Boot e SQL Server para criar aplicativos dinâmicos e eficientes. Estou sempre em busca de
                      inovações e aprendizados, e cada novo projeto me motiva a explorar ainda mais as possibilidades do
                      desenvolvimento web. A evolução constante da tecnologia me inspira a criar soluções sofisticadas e
                      eficazes, entregando experiências web que realmente fazem a diferença.
                    </p>

                    <br>

                    <p>
                      Estou animado para continuar essa jornada, sempre aprendendo e enfrentando novos desafios no mundo
                      do
                      desenvolvimento web.
                    </p>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="dialogoAbertoWeb = false">Fechar</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card>
          </v-col>
          <v-col>
            <v-card style="border-radius: 16px;" variant="outlined" align="center" class="botao-expandir"
              :color="corCardPython" @mouseover="mudarCorCard('Python')" @mouseleave="mudarCorCardAoSair('Python')"
              @click="abrirDialogo('Python')">
              <v-card-item>
                <v-card-title>
                  <v-icon size="x-large" color="primary" icon="mdi-language-python" end></v-icon>
                  <br />
                  <h2 style="color: white;">Python</h2>
                </v-card-title>
              </v-card-item>

              <v-card-text>
                <!-- Exibe apenas o início do texto -->
                <span style="font-size: large; color: white;">

                  <p>
                    Minha jornada com Python começou no primeiro período da graduação, quando um colega mencionou uma
                    linguagem nova que não exigia o uso de ponto e vírgula no final das linhas. Depois, fiz um curso
                    ministrado por um veterano, onde aprendi os conceitos básicos da linguagem. Durante a disciplina
                    de Cálculo Numérico, me aproximei ainda mais do Python, e desde então, ele se tornou uma das minhas
                    ferramentas favoritas. Essa ...
                  </p>
                  <br>
                  <br>
                </span>
                <br /><br />
                <v-btn color="primary" @click="abrirDialogo('Python')">
                  Ver mais <v-icon icon="mdi-chevron-down" end></v-icon>
                </v-btn>
              </v-card-text>

              <!-- Diálogo com o texto completo -->
              <v-dialog v-model="dialogoAbertoPython" max-width="95vw">
                <v-card>
                  <v-card-title align="center">
                    <h2>Python</h2>
                  </v-card-title>
                  <v-card-text>

                    <p>
                      Minha jornada com Python começou no primeiro período da graduação, quando um colega mencionou uma
                      linguagem nova que não exigia o uso de ponto e vírgula no final das linhas. Depois, fiz um curso
                      ministrado por um veterano, onde aprendi os conceitos básicos da linguagem. Durante a disciplina
                      de
                      Cálculo Numérico, me aproximei ainda mais do Python, e desde então, ele se tornou uma das minhas
                      ferramentas favoritas. Essa disciplina me permitiu visualizar de forma prática o quão poderosa e
                      versátil Python é, especialmente para resolver problemas matemáticos complexos.
                    </p>

                    <br>

                    <p>
                      Fiquei profundamente impressionado com a quantidade de bibliotecas e recursos disponíveis, que
                      parecem não ter fim. Isso me fez perceber como Python se adapta a diversas áreas do conhecimento.
                      Posteriormente, mergulhei ainda mais no universo dessa linguagem, explorando seu uso em aplicações
                      mais avançadas, como no campo da Inteligência Artificial.
                    </p>

                    <br>


                    <p>
                      O Python novamente se destacou, provando ser uma ferramenta extremamente eficiente para lidar com
                      grandes volumes de dados, permitindo desde a manipulação e análise de conjuntos massivos de dados
                      até a criação de algoritmos complexos para machine learning. Essa flexibilidade fez com que Python
                      se tornasse uma escolha comum entre desenvolvedores, cientistas de dados e pesquisadores.
                    </p>

                    <br>

                    <p>
                      Ao longo do tempo, na disciplina de Banco de Dados II, tivemos que implementar uma árvore B+, que
                      é
                      utilizada no funcionamento dos bancos de dados. Esse desenvolvimento me fez perceber como essas
                      estruturas complexas podem ser manipuladas nesta linguagem. Também tive a oportunidade de
                      trabalhar
                      na disciplina de Compiladores, onde o trabalho final envolvia a criação de um compilador que
                      recebia
                      um texto e simulava o comportamento de um compilador, realizando análises e retornando como seria
                      a
                      árvore de sintaxe.
                    </p>

                    <br>


                    <p>
                      Atualmente, Python é uma das minhas principais ferramentas utilizadas em projetos no meu trabalho
                      como desenvolvedor júnior no Sítio Recanto do Queijo e também no desenvolvimento do meu TCC, sendo
                      essencial para ambas as experiências.
                    </p>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="dialogoAbertoPython = false">Fechar</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card>
          </v-col>
          <v-col>
            <v-card style="border-radius: 16px;" variant="outlined" align="center" class="botao-expandir"
              :color="corCardJava" @mouseover="mudarCorCard('Java')" @mouseleave="mudarCorCardAoSair('Java')"
              @click="abrirDialogo('Java')">
              <v-card-item>
                <v-card-title>
                  <v-icon size="x-large" color="primary" icon="mdi-language-python" end></v-icon>
                  <br />
                  <h2 style="color: white;">Java</h2>
                </v-card-title>
              </v-card-item>

              <v-card-text>
                <!-- Exibe apenas o início do texto -->
                <span style="font-size: large; color: white;">

                  <p>
                    Minha jornada com Java começou durante o curso Técnico em Informática oferecido pelo Pronatec, do
                    Governo Federal. Nesse curso, tive meu primeiro contato com a linguagem e suas características, o
                    que despertou meu interesse pela programação. Posteriormente, na faculdade, tive a oportunidade de
                    aprofundar meus conhecimentos na disciplina de Programação Orientada a Objetos (POO), onde
                    explorei conceitos fundamentais como ...
                    

                  </p>
                  <br>
                  <br>
                </span>
                <br /><br />
                <v-btn color="primary" @click="abrirDialogo('Java')">
                  Ver mais <v-icon icon="mdi-chevron-down" end></v-icon>
                </v-btn>
              </v-card-text>

              <!-- Diálogo com o texto completo -->
              <v-dialog v-model="dialogoAbertoJava" max-width="95vw">
                <v-card>
                  <v-card-title align="center">
                    <h2>Java</h2>
                  </v-card-title>
                  <v-card-text>

                    <p>
                      Minha jornada com Java começou durante o curso Técnico em Informática oferecido pelo Pronatec, do
                      Governo Federal. Nesse curso, tive meu primeiro contato com a linguagem e suas características, o
                      que despertou meu interesse pela programação. Posteriormente, na faculdade, tive a oportunidade de
                      aprofundar meus conhecimentos na disciplina de Programação Orientada a Objetos (POO), onde
                      explorei conceitos fundamentais como encapsulamento, herança e polimorfismo.
                    </p>

                    <br>

                    <p>
                      Durante essa disciplina, desenvolvi um trabalho utilizando o algoritmo de Otimização por Enxame de
                      Partículas (PSO) para calcular a potência mínima de funções como Esfera, Rosenbrock e Rastrigin. A
                      implementação desse algoritmo me permitiu aplicar conhecimentos teóricos de forma prática e
                      entender melhor como diferentes funções podem ser otimizadas.
                    </p>


                    <br>

                    <p>
                      Essa experiência não apenas aprimorou minhas habilidades em programação, mas também me
                      proporcionou uma compreensão prática de como a linguagem pode ser aplicada na resolução de
                      problemas matemáticos e computacionais.
                    </p>

                    <br>

                    <p>
                      Atualmente, no meu trabalho no Sítio Recanto do Queijo, utilizo Java como backend, empregando o
                      framework Spring Boot. Essa escolha tem sido essencial para o desenvolvimento de aplicações
                      robustas e escaláveis. O Spring Boot facilita a criação de microserviços, permitindo que eu
                      implemente funcionalidades de forma ágil e eficiente, proporcionando uma experiência mais rica e
                      responsiva aos usuários do sistema.
                    </p>

                    <br>

                    <p>
                      Essa trajetória com Java tem sido gratificante e continua a me motivar a explorar novos desafios e
                      inovações na área de desenvolvimento.
                    </p>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="dialogoAbertoJava = false">Fechar</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card>
          </v-col>
        </v-row>
      </v-card>

    </v-container>
  </v-container>

</template>
<script>
export default {
  name: "Servicos",
  data() {
    return {
      dialogoAbertoWeb: false,
      dialogoAbertoPython: false,
      dialogoAbertoJava: false,
      corCardWeb: '',
      corCardPython: '',
      corCardJava: '',
    };
  },
  methods: {
    abrirDialogo(elemento) {
      if (elemento === 'Web') {
        this.dialogoAbertoWeb = true
      }
      else if (elemento === 'Python') {
        this.dialogoAbertoPython = true
      }

      else if (elemento === 'Java') {
        this.dialogoAbertoJava = true
      }
    },
    mudarCorCard(elemento) {
      if (elemento === 'Web') {
        this.corCardWeb = 'primary';
      }
      else if (elemento === 'Python') {
        this.corCardPython = 'primary';
      }

      else if (elemento === 'Java') {
        this.corCardJava = 'primary';
      }
    },
    mudarCorCardAoSair(elemento) {
      if (elemento === 'Web') {
        this.corCardWeb = '';
      }
      else if (elemento === 'Python') {
        this.corCardPython = '';
      }

      else if (elemento === 'Java') {
        this.corCardJava = '';
      }
    }
  },
};
</script>
<style scoped>
.botao-expandir {
  transition: transform 0.3s;
  /* Animação suave */
}

.botao-expandir:hover {
  transform: scale(1.05);
  /* Aumenta o tamanho do botão */
}
</style>
