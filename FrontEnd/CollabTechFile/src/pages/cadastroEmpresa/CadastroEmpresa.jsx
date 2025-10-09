import MenuLateral from "../../componentes/menuLateral/MenuLateral";
import "./CadastroEmpresa.css";
import user from "../../assets/img/user.png"
import Left from "../../assets/img/Voltar.svg"


export default function CadastroEmpresa() {
  return (
    <main className="containerGeral">
      <MenuLateral />
      <div className="conteudoPrincipal">
            <header className="header">
              <div className="usuario">
                 <img src={user} alt="user" />
                <p>Admin</p>

              </div>
            </header>
        <section className="areaTrabalho">
          <div className="conteudo">

            <div className="titulo">
              <h1>Cadastro Empresa</h1>
            </div>

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
