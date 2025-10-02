import MenuLateral from "../../componentes/menuLateral/MenuLateral";
import "./Cadastro.css";

export default function CadastroCliente() {
  return (
    <main className="containerGeral">
      <MenuLateral />
      <div className="conteudoPrincipal">
        <section className="areaTrabalho">
          <div className="conteudo">
            <div className="header">
              <button className="voltar">⬅</button>
              <div className="usuario">
                <p>👤 Funcionário</p>
                <p>🌙</p>
              </div>
            </div>

            <h1 className="titulo">Cadastro-Cliente</h1>

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
