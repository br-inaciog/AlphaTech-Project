import "./CadastroFuncionario.css";

//Importar o seu SweetAlert
import Swal from 'sweetalert2';

import MenuLateral from "../../componentes/menuLateral/MenuLateral";
import user from "../../assets/img/user.png"
import Left from "../../assets/img/Voltar.svg"
import Cadastro from "../../componentes/cadastro/Cadastro";
import { useEffect, useState } from "react";
import api from "../../services/Services";


export default function CadastroFuncionario() {
  const [listaTipoUsuario, setListaTipoUsuario] = useState([]);
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaVerificacao, setSenhaVerficacao] = useState("");
  const [empresa, setEmpresa] = useState("1")
  const [tipoUsuario, setTipoUsuario] = useState("");

  function alertar(icone, mensagem) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: icone,
      title: mensagem
    });
  }


  async function cadFuncionario(e) {
    e.preventDefault();

    console.log(usuario);
    console.log(email);
    console.log(senha);
    console.log(senhaVerificacao);
    console.log(tipoUsuario);

    if (usuario.trim !== "") {
      try {
        await api.post ("usuario")
      } catch (error) {
        
      }
    }

  }

  async function listarTipoUsuario() {
    try {
      const resposta = await api.get("tipoUsuario");

      setListaTipoUsuario(resposta.data);

      console.log(resposta.data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listarTipoUsuario();
  }, []);

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
              visibilidade_campo4="none"
              visibilidade_campoCNPJ="none"


              funcCadastro={cadFuncionario}

              // Nome do Usuario
              campo1="Nome"
              valorInput1={usuario}
              setValorInput1={setUsuario}

              // Email Usuario
              campo2="Email"
              tpInput="email"
              valorInput2={email}
              setValorInput2={setEmail}

              // Tipo Usuário
              campo3="Tipo Usuário"
              lista={listaTipoUsuario}
              valorTipoUsuario={tipoUsuario}
              setValorTipoUsuario={setTipoUsuario}

              // Senha Usuário
              campo5="Senha"
              valorInput3={senhaVerificacao}
              setValorInput3={setSenhaVerficacao}

              // Confirmar Senha              
              campo6="Confirmar Senha"
              valorInput4={senha}
              setValorInput4={setSenha}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
