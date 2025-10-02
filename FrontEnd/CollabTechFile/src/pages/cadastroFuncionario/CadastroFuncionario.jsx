import MenuLateral from "../../componentes/menuLateral/MenuLateral";
import "./CadastroFuncionario.css";
import user from "../../assets/img/user.png"
import Lua from "../../assets/img/Lua.png"
import Left from "../../assets/img/Left.png"


export default function CadastroFuncionario() {
  return (
    <main className="containerGeral">
      <MenuLateral />
      <div className="conteudoPrincipal">
            <header className="header">
              <button className="voltar"> <img className="seta" src={Left} alt="seta voltando"/></button>
              <div className="usuario">
                 <img src={user} alt="user" />
                <p>Admin</p>
                 <img src={Lua} alt="Lua" />
              </div>
            </header>
        <section className="areaTrabalho">
          <div className="conteudo">

            <h1 className="titulo">Cadastro-Funcionário</h1>

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
                <label>Tipo de Usuário</label>
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
