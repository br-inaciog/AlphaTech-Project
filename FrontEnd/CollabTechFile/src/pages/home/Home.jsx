import React from "react";
import "./Home.css";
import Logo from "../../assets/img/Logo.png";

export default function Home() {
  return (
    <>
      {/* CABEÇALHO */}
      <header className="cabecalho">
        <div className="bloco-logo">
          <img src={Logo} alt="Logo da CollabTechFille" className="imagem-logo" />
          <h1 className="titulo-logo">
            COLLABTECHFILLE <span className="slogan-logo">&gt; Levantando o futuro</span>
          </h1>
        </div>

        <nav className="menu-navegacao">
          <a href="#" className="link-navegacao">Início</a>
          <a href="#sobre" className="link-navegacao">Sobre</a>
          <a href="#servicos" className="link-navegacao">Serviços</a>
          <a href="#contato" className="link-navegacao">Contato</a>
        </nav>
      </header>

      {/* SEÇÃO PRINCIPAL */}
      <section className="secao-principal">
        <h1 className="titulo-principal">Compreendendo necessidades, construindo soluções</h1>
        <p className="texto-principal">
          Da análise à entrega: transformamos ideias em requisitos claros que orientam o desenvolvimento de
          soluções eficazes.
        </p>
        <button className="botao-principal">Saiba Mais</button>
      </section>

      {/* ETAPAS */}
      <section className="secao-etapas">
        <div className="cartao-etapa">
          <h2 className="titulo-etapa">Entendimento</h2>
          <p className="texto-etapa">
            Nosso processo começa ouvindo e compreendendo cada necessidade do cliente, garantindo que cada
            requisito reflita o verdadeiro objetivo do projeto.
          </p>
        </div>
        <div className="cartao-etapa">
          <h2 className="titulo-etapa">Documentação</h2>
          <p className="texto-etapa">
            Estruturamos informações com clareza e precisão, criando uma base sólida para o desenvolvimento
            técnico e o sucesso da entrega.
          </p>
        </div>
        <div className="cartao-etapa">
          <h2 className="titulo-etapa">Validação</h2>
          <p className="texto-etapa">
            Validamos cada requisito junto ao cliente, assegurando que a solução final atenda às expectativas e
            gere resultados reais.
          </p>
        </div>
      </section>

      {/* SOBRE */}
      <section className="secao-sobre" id="sobre">
        <div className="bloco-sobre">
          <h1 className="titulo-sobre">Sobre a CollabTechFille</h1>
          <p className="texto-sobre branco">
            A CollabTechFille nasceu com o propósito de transformar comunicação em compreensão. Somos uma equipe
            especializada em levantamento e análise de requisitos, traduzindo ideias em soluções práticas e bem
            definidas.
          </p>
          <p className="texto-sobre branco">
            Acreditamos que todo grande sistema começa com um bom entendimento. Por isso, trabalhamos lado a lado
            com nossos clientes, mapeando processos, identificando necessidades e documentando cada detalhe de
            forma clara, colaborativa e estratégica.
          </p>
          <p className="texto-sobre branco">
            Nossa missão é garantir que o desenvolvimento seja orientado por informações precisas — reduzindo
            retrabalhos, otimizando tempo e aumentando a qualidade do produto final.
          </p>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="secao-servicos" id="servicos">
        <h1 className="titulo-servicos">Nossos Serviços</h1>
        <div className="bloco-servicos">
          <div className="cartao-servico">
            <h2 className="titulo-servico">Levantamento de Requisitos</h2>
            <p className="texto-servico">
              Entrevistas, questionários e observações para entender profundamente o que seu sistema precisa
              resolver.
            </p>
          </div>
          <div className="cartao-servico">
            <h2 className="titulo-servico">Análise e Modelagem</h2>
            <p className="texto-servico">
              Organizamos e estruturamos as informações em modelos e fluxos que facilitam o entendimento técnico e
              funcional do projeto.
            </p>
          </div>
          <div className="cartao-servico">
            <h2 className="titulo-servico">Validação com o Cliente</h2>
            <p className="texto-servico">
              Garantimos que cada requisito reflita exatamente o que o cliente espera, validando e refinando antes
              da fase de desenvolvimento.
            </p>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="secao-depoimentos">
        <h1 className="titulo-depoimentos">O que dizem nossos parceiros</h1>
        <div className="bloco-depoimentos">
          <div className="cartao-depoimento">
            <p className="texto-depoimento">
              “Com o processo de levantamento da CollabTechFille, conseguimos alinhar nossas ideias e reduzir
              falhas no desenvolvimento.”
            </p>
            <h3 className="autor-depoimento">- João Silva</h3>
          </div>
          <div className="cartao-depoimento">
            <p className="texto-depoimento">
              “A equipe trouxe clareza e organização ao nosso projeto. Hoje desenvolvemos com base em requisitos
              bem definidos.”
            </p>
            <h3 className="autor-depoimento">- Maria Célia</h3>
          </div>
          <div className="cartao-depoimento">
            <p className="texto-depoimento">
              “O trabalho de análise foi essencial para transformar nossas necessidades em um sistema completo e
              funcional.”
            </p>
            <h3 className="autor-depoimento">- Pedro Lima</h3>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section className="secao-contato" id="contato">
        <h1 className="titulo-contato">Fale Conosco</h1>
        <p className="texto-contato">
          Quer transformar suas ideias em um projeto bem estruturado? Entre em contato e descubra como o
          levantamento de requisitos pode fazer a diferença.
        </p>
        <form className="formulario-contato">
          <input type="text" placeholder="Seu Nome" required className="campo-formulario" />
          <input type="email" placeholder="Seu Email" required className="campo-formulario" />
          <textarea placeholder="Descreva brevemente sua necessidade" required className="campo-texto"></textarea>
          <button type="submit" className="botao-enviar">Enviar</button>
        </form>
      </section>

      {/* RODAPÉ */}
      <footer className="rodape">
        <p className="texto-rodape">© 2025 CollabTechFille. Transformando necessidades em soluções.</p>
        <div className="redes-sociais">
          <a href="#" className="icone-social"><i className="fab fa-facebook"></i></a>
          <a href="#" className="icone-social"><i className="fab fa-instagram"></i></a>
          <a href="#" className="icone-social"><i className="fab fa-linkedin"></i></a>
        </div>
      </footer>
    </>
  );
}
