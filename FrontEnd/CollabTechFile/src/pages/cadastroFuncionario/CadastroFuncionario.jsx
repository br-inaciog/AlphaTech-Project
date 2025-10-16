import MenuLateral from "../../componentes/menuLateral/MenuLateral";
import "./CadastroFuncionario.css";
import user from "../../assets/img/user.png"
import Left from "../../assets/img/Voltar.svg"
import Cadastro from "../../componentes/cadastro/Cadastro";


export default function CadastroFuncionario() {
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
            <Cadastro
              titulo="Cadastro Funcionário"
              campo1="Nome"
              campo2="Email"
              campo3="Tipo Usuário"
              tpInput="email"
              visibilidade_campo4="none"
              campo5="Senha"
              campo6="Confirmar Senha"
            />

          </div>
        </section>
      </div>
    </main>
  );
}
