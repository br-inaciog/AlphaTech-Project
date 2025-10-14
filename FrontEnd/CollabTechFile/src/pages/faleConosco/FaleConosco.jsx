import { useState } from "react";
import Seta from "../../assets/img/SetaBranca.png"
import { Link } from "react-router"

import Doczinho from "../../assets/img/ImgFaleConosco.png";
import Mapinha from "../../assets/img/Mapinha.png";
import Arrobinha from "../../assets/img/@.png";
import "./FaleConosco.css";

export default function FaleConosco() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function enviarEmail(e) {
    e.preventDefault();
    

    const destinatario = "collabtechfile@gmail.com";
    const assunto = `Contato de ${nome}`;
    const corpo = `Nome: ${nome}\nEmail: ${email}\n\nMensagem:\n${mensagem}`;

    window.location.href = `mailto:${destinatario}?subject=${encodeURIComponent(
      assunto
    )}&body=${encodeURIComponent(corpo)}`;
  }

  return (
    <section className="tudao">
      <div className="caixaEsquerda">
        <Link className="setaFaleConosco" to="/InicioCliente">
          <img src={Seta} alt="Seta" />
        </Link>
        <h1>Fale Conosco</h1>
        <h2>
          Caso tenha dúvidas ou tenha interesse em nosso serviço
          <br />
          entre em contato!
        </h2>
        <form className="formularioFC" onSubmit={enviarEmail}>
          <div className="nomeFaleConosco">
            <label>Seu nome</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="emailFaleConosco">
            <label>Email</label>
            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mensagemFaleConosco">
            <label>Mensagem</label>
            <textarea
              placeholder="Escreva aqui..."
              rows="4"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" className="botaozinho">
            Enviar
          </button>
        </form>
      </div>

      <div className="caixaDireita">
        <div className="doczinho">
          <img src={Doczinho} alt="Fale Conosco" />
        </div>

        <div className="caixaDeContato">
          <div className="infoFaleConosco">
            <img src={Mapinha} alt="Localização" />
            <p>R. Niterói, 180 - Centro, São Caetano do Sul - SP</p>
          </div>

          <div className="infoFaleConosco">
            <img src={Arrobinha} alt="Email" />
            <p>collabtechfile@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
