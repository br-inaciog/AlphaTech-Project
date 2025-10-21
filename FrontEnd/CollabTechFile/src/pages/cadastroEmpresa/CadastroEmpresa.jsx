import "./CadastroEmpresa.css";

//Importar o seu SweetAlert
import Swal from 'sweetalert2';

import Cadastro from "../../componentes/cadastro/Cadastro";
import MenuLateral from "../../componentes/menuLateral/MenuLateral";
import user from "../../assets/img/User.png"

import api from "../../services/Service";
import { useState } from "react";

export default function CadastroEmpresa() {
  const [empresa, setEmpresa] = useState("");
  const [CNPJ, setCNPJ] = useState("");

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

  async function cadEmpresa(e) {
    e.preventDefault();

    if (empresa.trim() !== "" && CNPJ.trim() !== "" ) {
      try {
        await api.post("empresa", {
          nome: empresa,
          CNPJ: CNPJ
        })
        alertar("success", "Cadastro Realizado!");
        setEmpresa("");
        setCNPJ("");
      } catch (error) {
        alertar("error", "Erro no Cadastro!")
        console.log(error);
      }
    } else {
      alertar("warning", "Preencha o campo!");
    }

  }

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
              titulo="Cadastro Empresa"
              campo1="Empresa"
              tpInput="text"
              visibilidade_campo2="none"
              visibilidade_campo3="none"
              visibilidade_campo4="none"
              visibilidade_campo5="none"
              visibilidade_campo6="none"

              funcCadastro={cadEmpresa}
              valorInput1={empresa}
              setValorInput1={setEmpresa}
              valorInputCNPJ={CNPJ}
              setValorInputCNPJ={setCNPJ}
            />
          </div>
        </section>
      </div>
    </main>
  );
}