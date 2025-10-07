import MenuLateral from "../../componentes/menuLateral/MenuLateral";
import "./CadastroEmpresa.css";
import user from "../../assets/img/user.png"
import Lua from "../../assets/img/Lua.png"
import Left from "../../assets/img/Left.png"


export default function CadastroEmpresa() {
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

            <h1 className="titulo">Cadastro Empresa</h1>

            <form className="formulario">
              <div className="campo">
                <label>Nome</label>
                <input type="text" />
              </div>

              <div className="campo">
                <label>CNPJ</label>
                <input type="email" />
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
