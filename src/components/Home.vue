<template>
  <section class="inicio">
    <div class="miolo">
      <div class="grade">
        <div>
          <p class="prompt">C:\KOVINE&gt; java -jar vinicius.jar</p>
          <h1 class="nome">Vinícius<br />Tadeu</h1>
          <p class="chamada">
            Engenheiro de Software Pleno com foco em back-end: APIs REST e
            sistemas corporativos em Java e Spring Boot. Hoje evoluo os sistemas
            internos do Sítio Recanto do Queijo, da regra de negócio ao SQL
            Server, com integrações e automações em Python.
          </p>

          <div class="acoes">
            <a
              class="btn"
              href="/Currículo - Vinicius Tadeu Andrade Costa.pdf"
              download
              >Baixar currículo (PDF)</a
            >
            <ul class="redes">
              <li v-for="rede in redes" :key="rede.nome">
                <a
                  class="link"
                  :href="rede.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  >{{ rede.nome }}</a
                >
              </li>
            </ul>
          </div>
        </div>

        <figure class="retrato">
          <img
            :src="foto"
            alt="Vinícius de boné preto e rosa, em frente a uma cachoeira"
            width="900"
            height="1200"
          />
          <figcaption class="rotulo">Fig. 01: fora do expediente</figcaption>
        </figure>
      </div>

      <dl class="ficha">
        <div v-for="item in ficha" :key="item.nome">
          <dt class="rotulo">{{ item.nome }}</dt>
          <dd>{{ item.valor }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script>
import foto from "../assets/vinicius-home-900.jpg";

export default {
  name: "Home",
  data() {
    return {
      foto,
      redes: [
        { nome: "GitHub", url: "https://github.com/ViniciusTAC" },
        {
          nome: "LinkedIn",
          url: "https://www.linkedin.com/in/vinicius-tadeu-andrade-costa",
        },
        {
          nome: "E-mail",
          url: "https://mail.google.com/mail/?view=cm&fs=1&to=viniciustacosta@gmail.com",
        },
      ],
      ficha: [
        { nome: "Cargo atual", valor: "Engenheiro de Software Pleno" },
        { nome: "Back-end", valor: "Java, Spring Boot, Node.js, APIs REST" },
        { nome: "Dados", valor: "SQL Server, MySQL, Python" },
        { nome: "Front-end", valor: "Angular, PrimeNG, TypeScript, Vue.js" },
        { nome: "Formação", valor: "Engenharia de Computação, IFMG" },
      ],
    };
  },
};
</script>

<style scoped>
.inicio {
  padding-block: clamp(32px, 6vw, 72px) clamp(48px, 7vw, 80px);
}

.grade {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(240px, 360px);
  gap: clamp(32px, 6vw, 80px);
  align-items: end;
}

.prompt {
  font-family: var(--fonte-mono);
  font-size: 0.92rem;
  color: var(--ambar);
}

.nome {
  margin-top: 14px;
  font-family: var(--fonte-tela);
  font-size: clamp(6rem, 17vw, 14rem);
  font-weight: 400;
  line-height: 0.8;
  text-transform: uppercase;
  text-shadow: 4px 0 0 var(--magenta-base);
}

.chamada {
  max-width: 56ch;
  margin-top: 30px;
  font-size: 1.15rem;
}

.acoes {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px 32px;
  margin-top: 34px;
}

.redes {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
}

.retrato {
  position: relative;
}

.retrato img {
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  object-position: 50% 80%;
  border: 1px solid var(--magenta);
  box-shadow: 10px 10px 0 var(--magenta-base);
  filter: contrast(1.08) saturate(0.9);
}

.retrato figcaption {
  margin-top: 22px;
}

.ficha {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  margin-top: clamp(40px, 6vw, 64px);
  border-top: 1px solid var(--linha);
  border-bottom: 1px solid var(--linha);
}

.ficha > div {
  padding: 16px 16px 16px 0;
}

.ficha > div + div {
  padding-left: 16px;
  border-left: 1px solid var(--linha);
}

.ficha dd {
  margin-top: 4px;
  font-size: 0.98rem;
  line-height: 1.4;
}

@media (max-width: 820px) {
  .grade {
    grid-template-columns: 1fr;
  }

  .retrato {
    max-width: 320px;
  }

  .ficha {
    grid-template-columns: 1fr;
  }

  .ficha > div,
  .ficha > div + div {
    padding: 12px 0;
    border-left: 0;
  }

  .ficha > div + div {
    border-top: 1px solid var(--linha);
  }
}
</style>
