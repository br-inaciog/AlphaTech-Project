import { useState } from "react";
import { Link } from "react-router";
import "./MenuLateral.css";
import LogoMenu from "../../assets/img/logoMenu.png";
import Casinha from "../../assets/img/Casinha.png";
import Documents from "../../assets/img/Documents.png";
import Cliente from "../../assets/img/Cliente.png";
import Cadastrar from "../../assets/img/Cadastrar.png";
import FeedBack from "../../assets/img/Feedback.png";
import Logout from "../../assets/img/Logout.png";
import MenuHb from "../../assets/img/Menu.png";
import fonezinho from "../../assets/img/fone.png";

const acesso = "funcionario";

export default function MenuLateral() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      {/* Botão hamburguer visível apenas no mobile */}
      <button className="menuHb" onClick={() => setMenuAberto(!menuAberto)}>
        <img src={MenuHb} alt="Abrir menu" />
      </button>

      {/* Sidebar */}
      <header className={`menuLateral ${menuAberto ? "ativo" : ""}`}>
        <img src={LogoMenu} alt="Logo CollabTech Menu" className="logoMenu" />
        {acesso == "funcionario" ? (
          <div className="linksLateral">
            <Link
              to="/Inicio"
              className="links"
              onClick={() => setMenuAberto(false)}
            >
              <img src={Casinha} alt="Casinha" />
              Início
            </Link>

            <Link
              to="/CadastroCliente"
              className="links"
              onClick={() => setMenuAberto(false)}
            >
              <img src={Cadastrar} alt="Usuário" />
              Cadastrar Clientes
            </Link>

            <Link
              to="/Listagem"
              className="links"
              onClick={() => setMenuAberto(false)}
            >
              <img src={Documents} alt="Documentos" />
              Documentos
            </Link>

            <Link
              to="/TelaCliente"
              className="links"
              onClick={() => setMenuAberto(false)}
            >
              <img src={Cliente} alt="Clientes" />
              Clientes
            </Link>

            <Link
              to="/FeedBacks"
              className="links"
              onClick={() => setMenuAberto(false)}
            >
              <img src={FeedBack} alt="FeedBacks" />
              Comentários
            </Link>
          </div>
        ) : (
          <div className="linksLateral">
            <Link
              to="/InicioCliente"
              className="links"
              onClick={() => setMenuAberto(false)}
            >
              <img src={Casinha} alt="Casinha" />
              Início
            </Link>

            <Link
              to="/FaleConosco"
              className="links"
              onClick={() => setMenuAberto(false)}
            >
              <img src={fonezinho} alt="fonezinho" />
              Fale Conosco
            </Link>
          </div>
        )}

        <Link to="/" className="logout" onClick={() => setMenuAberto(false)}>
          <img src={Logout} alt="Logout" />
          Sair
        </Link>
      </header>

      {/* Fundo escuro para fechar menu ao clicar fora */}
      {menuAberto && (
        <div className="overlay" onClick={() => setMenuAberto(false)} />
      )}
    </>
  );
}
