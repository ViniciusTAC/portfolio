<template>
  <section class="secao contato">
    <div class="miolo">
      <h2 class="titulo"><span>06</span>Contato</h2>

      <form novalidate @submit.prevent="enviar">
        <div class="campos">
          <div v-for="campo in campos" :key="campo.nome" class="campo">
            <label :for="campo.nome">{{ campo.rotulo }}</label>
            <input
              v-if="campo.nome === 'telefone'"
              id="telefone"
              v-model="dados.telefone"
              v-mask="'(##) # ####-####'"
              type="tel"
              autocomplete="tel"
              placeholder="(00) 0 0000-0000"
              :aria-invalid="!!erros.telefone"
              aria-describedby="erro-telefone"
            />
            <input
              v-else
              :id="campo.nome"
              v-model="dados[campo.nome]"
              :type="campo.tipo"
              :autocomplete="campo.auto"
              :aria-invalid="!!erros[campo.nome]"
              :aria-describedby="`erro-${campo.nome}`"
            />
            <p :id="`erro-${campo.nome}`" class="erro">
              {{ erros[campo.nome] }}
            </p>
          </div>

          <div class="campo inteiro">
            <label for="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              v-model="dados.mensagem"
              rows="6"
              :aria-invalid="!!erros.mensagem"
              aria-describedby="erro-mensagem"
            ></textarea>
            <p id="erro-mensagem" class="erro">{{ erros.mensagem }}</p>
          </div>
        </div>

        <div class="envio">
          <button class="btn" type="submit" :disabled="enviando">
            {{ enviando ? "Enviando..." : "Enviar mensagem" }}
          </button>
          <p
            class="retorno"
            :class="{ falhou: retorno.tipo === 'erro' }"
            role="status"
          >
            {{ retorno.texto }}
          </p>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import emailjs from "emailjs-com";

const vazio = () => ({
  nome: "",
  email: "",
  telefone: "",
  assunto: "",
  mensagem: "",
});

export default {
  name: "Contato",
  data: () => ({
    campos: [
      { nome: "nome", rotulo: "Nome completo", tipo: "text", auto: "name" },
      { nome: "email", rotulo: "E-mail", tipo: "email", auto: "email" },
      { nome: "telefone", rotulo: "Telefone" },
      { nome: "assunto", rotulo: "Assunto", tipo: "text", auto: "off" },
    ],
    dados: vazio(),
    erros: {},
    enviando: false,
    retorno: { tipo: "", texto: "" },
  }),
  methods: {
    validar() {
      const d = this.dados;
      const obrigatorio = "Campo obrigatório";
      const erros = {};
      ["nome", "email", "telefone", "assunto", "mensagem"].forEach((c) => {
        if (!d[c].trim()) erros[c] = obrigatorio;
      });
      const regexEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      if (!erros.email && !regexEmail.test(d.email)) {
        erros.email = "E-mail inválido";
      }
      if (!erros.telefone && d.telefone.length !== 16) {
        erros.telefone = "Telefone incompleto";
      }
      this.erros = erros;
      return Object.keys(erros).length === 0;
    },
    enviar() {
      this.retorno = { tipo: "", texto: "" };
      if (!this.validar()) return;

      this.enviando = true;
      emailjs.init("Y3ToB7YpKMHwfV__d");
      emailjs
        .send("service_4c9jfwh", "template_rnaa6q6", { ...this.dados })
        .then(() => {
          this.dados = vazio();
          this.retorno = { tipo: "ok", texto: "Mensagem enviada. Obrigado!" };
        })
        .catch((erro) => {
          console.error("Erro ao enviar email:", erro);
          this.retorno = {
            tipo: "erro",
            texto:
              "Não consegui enviar. O que você escreveu continua aqui, é só tentar de novo.",
          };
        })
        .finally(() => {
          this.enviando = false;
        });
    },
  },
};
</script>

<style scoped>
.contato {
  background: var(--painel);
}

form {
  max-width: 820px;
}

.campos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px 28px;
}

.inteiro {
  grid-column: 1 / -1;
}

label {
  display: block;
  margin-bottom: 4px;
  font-family: var(--fonte-mono);
  font-size: 0.85rem;
  color: var(--ambar);
}

label::before {
  content: "> ";
  color: var(--magenta);
}

input,
textarea {
  display: block;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--linha);
  border-radius: 0;
  background: var(--fundo);
  font-family: var(--fonte-mono);
  font-size: 1rem;
  resize: vertical;
}

input:focus,
textarea:focus {
  border-color: var(--ambar);
  outline: none;
}

input::placeholder {
  color: #6f6570;
}

[aria-invalid="true"] {
  border-color: var(--magenta);
}

.erro {
  min-height: 1.6em;
  font-family: var(--fonte-mono);
  font-size: 0.8rem;
  color: var(--magenta);
}

.envio {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px 28px;
  margin-top: 10px;
}

.retorno {
  font-family: var(--fonte-mono);
  font-size: 0.88rem;
  color: var(--ambar);
}

.retorno.falhou {
  color: var(--magenta);
}

@media (max-width: 620px) {
  .campos {
    grid-template-columns: 1fr;
  }
}
</style>
