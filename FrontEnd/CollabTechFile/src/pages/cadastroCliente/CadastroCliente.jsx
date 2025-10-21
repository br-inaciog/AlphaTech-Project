import MenuLateral from "../../components/menuLateral/MenuLateral";
import "./CadastroCliente.css";
import user from "../../assets/img/user.png"

import Left from "../../assets/img/Voltar.svg"
import Cadastro from "../../components/cadastro/Cadastro";


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

            <Cadastro
              campo1="Nome"
              campo2="Email"
              visibilidade_campo3="none"
              tpInput="email"
              campo4="Empresa"
              campo5="Senha"
              campo6="Cofirmar Senha"
              visibilidade_campoCNPJ="none"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
