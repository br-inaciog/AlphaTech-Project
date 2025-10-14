import MenuLateral from "../../componentes/menuLateral/MenuLateral";
import "./Cadastro.css";
import user from "../../assets/img/user.png"

import Left from "../../assets/img/Voltar.svg"


export default function CadastroCliente() {
  return (
    <main className="containerGeral">
      <MenuLateral />
      <div className="conteudoPrincipal">
        <header className="header">
          <div className="usuario">
            <img src={user} alt="user" />
            <p>Funcionário</p>

          </div>
        </header>
        <section className="areaTrabalho">
          <div className="conteudo">

            <div className="titulo">
              <h1>Cadastro Cliente</h1>
            </div>

            <form className="formulario">
              <div className="campo">
                <label>Nome</label>
                <input type="text" />
              </div>

              <div className="campo">
                <label>Email</label>
                <input type="email" />
              </div>

              <div className="campo">
                <label>Empresa</label>
                <input type="text" />
              </div>

              <div className="campo">
                <label>Senha</label>
                <input
                  type="password"
                  placeholder="Mínimo de 8 caracteres com números e símbolos"
                />
              </div>

              <div className="campo">
                <label>Confirmar senha</label>
                <input type="password" />
              </div>

              <button type="submit" className="cadastrar">
                Cadastrar
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
