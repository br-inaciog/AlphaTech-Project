<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b5d895e344a022648898c108d7b758718115d993
import "./CadastroEmpresa.css";

//Importar o seu SweetAlert
import Swal from 'sweetalert2';

import Cadastro from "../../componentes/cadastro/Cadastro";
import MenuLateral from "../../componentes/menuLateral/MenuLateral";
import user from "../../assets/img/User.png"

import api from "../../services/Service";
<<<<<<< HEAD
import { useState } from "react";
=======
import Swal from "sweetalert2";
import MenuLateral from "../../componentes/menuLateral/MenuLateral";
=======
<<<<<<< HEAD
>>>>>>> 94e78eb65ab9267fce84e7efe61a1a4763181551
import MenuLateral from "../../components/menuLateral/MenuLateral";
import { useState } from "react";
import api from "../../Services/service";
import Swal from "sweetalert2";
import "./CadastroEmpresa.css";
>>>>>>> 179bb5085e2ed1a4080cb29c1937f23fd3962300
import user from "../../assets/img/user.png";
<<<<<<< HEAD

// export default function CadastroEmpresa() {
//   const [empresa, setEmpresa] = useState("");
//   const [cnpj, setCnpj] = useState("");
//   const [loading, setLoading] = useState(false);
// }

export default function CadastroEmpresa() {
  const [empresa, setEmpresa] = useState("")
  const [CNPJ, setCNPJ] = useState("")
  const [statusEmpresa, setStatusEmpresa] = useState(true);

=======
import { useState } from "react";
import Cadastro from "../../componentes/cadastro/Cadastro";
>>>>>>> b5d895e344a022648898c108d7b758718115d993

export default function CadastroEmpresa() {
  const [empresa, setEmpresa] = useState("");
  const [CNPJ, setCNPJ] = useState("");
<<<<<<< HEAD
=======
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
>>>>>>> 94e78eb65ab9267fce84e7efe61a1a4763181551
>>>>>>> b5d895e344a022648898c108d7b758718115d993

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

<<<<<<< HEAD
=======
<<<<<<< HEAD

  async function handleSubmit(e) {
=======
  function validarSenha(senha) {
    // Mínimo 8 caracteres, pelo menos 1 número e 1 símbolo
    const regexSenha = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return regexSenha.test(senha);
  }

>>>>>>> b5d895e344a022648898c108d7b758718115d993
  async function cadEmpresa(e) {
>>>>>>> 94e78eb65ab9267fce84e7efe61a1a4763181551
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

<<<<<<< HEAD
  async function cadEmpresa(e) {
    e.preventDefault();

    console.log(empresa);
    console.log(CNPJ);

    if (empresa.trim() != "") {
      try {
        await api.post("Empresa", {
          nome: empresa,
          CNPJ: CNPJ
        });

        alertar("success", "Cadastro Realizado!");
        setEmpresa("");
        setCNPJ("");
        setStatusEmpresa("");
      } catch (error) {
        alertar("error", "Erro. Entre em contato com o suporte!");
        console.log(error);

        console.log({
          nome: empresa,
          cnpj: CNPJ
        });

      }
    } else {
      alertar("warning", "O campo precisa estar Preenchido")
    }
  }

=======
>>>>>>> 94e78eb65ab9267fce84e7efe61a1a4763181551
  return (
    <main className="containerGeral">
      <MenuLateral />
      <div className="conteudoPrincipal">
        <header className="header">
          <div className="usuario">
            <img src={user} alt="user" />
            <p>Admin</p>
<<<<<<< HEAD

          </div>
        </header>
        <section className="areaTrabalho">
          <div className="conteudo">
            <div className="titulo">
              <h1>Cadastro Empresa</h1>
            </div>

            <form className="formulario" onSubmit={handleSubmit}>
              <div className="campo">
                <label>Empresa</label>
                <input
                  type="text"
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value)}
                  placeholder="Nome da empresa"
                  disabled={loading}
                />
              </div>

              <div className="campo">
                <label>CNPJ</label>
                <input
                  type="text"
                  value={cnpj}
                  onChange={(e) => setCnpj(e.target.value)}
                  placeholder="00.000.000/0000-00"
                  disabled={loading}
                />
              </div>

              <button type="submit" className="cadastrar" disabled={loading}>
                {loading ? "Cadastrando..." : "Cadastrar"}
              </button>
            </form>


=======
>>>>>>> 94e78eb65ab9267fce84e7efe61a1a4763181551
          </div>
        </section>
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