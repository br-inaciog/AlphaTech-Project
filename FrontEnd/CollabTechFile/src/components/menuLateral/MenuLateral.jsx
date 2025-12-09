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
<<<<<<< HEAD
import { useAuth } from "../../contexts/AuthContext";
=======

const acesso = "funcionario"; // ou "cliente", se quiser trocar
>>>>>>> b4057c42bb6d03e0812a9307fa0abab8c69125f3

export default function MenuLateral() {
  const [menuAberto, setMenuAberto] = useState(false);
  const { usuario, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setMenuAberto(false);
  };

  const handleLogout = () => {
    console.log("Usuário deslogado"); // aqui tu coloca tua função real de logout
  };

  return (
    <>
      {/* Botão hamburguer (mobile) */}
      <button className="menuHb" onClick={() => setMenuAberto(!menuAberto)}>
        <img src={MenuHb} alt="Abrir menu" />
      </button>

      {/* Sidebar */}
      <header className={`menuLateral ${menuAberto ? "ativo" : ""}`}>
        <img src={LogoMenu} alt="Logo CollabTech Menu" className="logoMenu" />
<<<<<<< HEAD
        
        {usuario?.tipoUsuario === "Cliente" ? (
          /* Menu para CLIENTES */
          <div className="linksLateral">
            <Link
              to="/InicioCliente"
              className="links"
              onClick={() => setMenuAberto(false)}
            >
              <img src={Casinha} alt="Início" />
              Início
            </Link>

            <Link
              to="/FeedBacks"
              className="links"
              onClick={() => setMenuAberto(false)}
            >
              <img src={FeedBack} alt="Feedbacks" />
              Feedbacks
            </Link>

            <Link
              to="/FaleConosco"
              className="links"
              onClick={() => setMenuAberto(false)}
            >
              <img src={fonezinho} alt="Fale Conosco" />
              Fale Conosco
            </Link>
          </div>
        ) : (
          /* Menu para FUNCIONÁRIOS e ADMINISTRADORES */
          <div className="linksLateral">
            <Link
              to="/Inicio"
              className="links"
              onClick={() => setMenuAberto(false)}
            >
              <img src={Casinha} alt="Início" />
              Início
            </Link>
=======
        <div>
          {/* <Link to="/CadastroCliente" className="links">
                    <img src={Cadastrar} alt="Usuário" />
                    Cadastrar Clientes
                </Link> */}
>>>>>>> b4057c42bb6d03e0812a9307fa0abab8c69125f3

            <Link
              to="/CadastroCliente"
              className="links"
              onClick={() => setMenuAberto(false)}
            >
              <img src={Cadastrar} alt="Cadastrar" />
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

<<<<<<< HEAD
            <Link
              to="/TelaCliente"
              className="links"
              onClick={() => setMenuAberto(false)}
            >
              <img src={Cliente} alt="Clientes" />
              Clientes
            </Link>

            {usuario?.tipoUsuario === "Admin" && (
              <>
                <Link
                  to="/CadastroFuncionario"
                  className="links"
                  onClick={() => setMenuAberto(false)}
                >
                  <img src={Cadastrar} alt="Cadastrar Funcionário" />
                  Cadastrar Funcionários
                </Link>

                <Link
                  to="/listagemFuncionario"
                  className="links"
                  onClick={() => setMenuAberto(false)}
                >
                  <img src={Cliente} alt="Listar Funcionários" />
                  Listar Funcionários
                </Link>
              </>
            )}
          </div>
        )}

        <button className="logout" onClick={handleLogout}>
          <img src={Logout} alt="Logout" />
          Sair
        </button>
      </header>

      {/* Fundo escuro para fechar menu ao clicar fora */}
      {menuAberto && (
        <div className="overlay" onClick={() => setMenuAberto(false)} />
      )}
    
    </>
  )};
=======
          <Link to="/FeedBacks" className="links">
            <img src={FeedBack} alt="Comentario" />
            Comentario
          </Link>
        </div>

        <Link onClick={handleLogout} to="/" className="logout">
          <img src={LogoutIcon} alt="Logout" />
          Sair
        </Link>
        {/* Se for funcionário */}
        {acesso === "funcionario" ? (
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
          </div>
        ) : (
          // Se for cliente
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

        {/* Botão de logout */}
        <Link to="/" className="logout" onClick={handleLogout}>
          <img src={Logout} alt="Logout" />
          Sair
        </Link>
      </header>

      {/* Fundo escuro pra fechar o menu ao clicar fora */}
      {menuAberto && (
        <div className="overlay" onClick={() => setMenuAberto(false)} />
      )}
    </>
  );
}
>>>>>>> b4057c42bb6d03e0812a9307fa0abab8c69125f3
