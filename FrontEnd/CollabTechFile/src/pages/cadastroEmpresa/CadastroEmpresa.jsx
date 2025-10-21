<<<<<<< HEAD
import { useState } from "react";
import api from "../../Services/service";
import Swal from "sweetalert2";
import MenuLateral from "../../componentes/menuLateral/MenuLateral";
import "./CadastroEmpresa.css";
import user from "../../assets/img/user.png";

export default function CadastroEmpresa() {
  const [empresa, setEmpresa] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [loading, setLoading] = useState(false);
=======
import "./CadastroEmpresa.css";

//Importar o seu SweetAlert
import Swal from 'sweetalert2';

import { useState } from "react";
import api from "../../services/Services";

import MenuLateral from "../../componentes/menuLateral/MenuLateral";
import user from "../../assets/img/user.png"
import Left from "../../assets/img/Voltar.svg"
import Cadastro from "../../componentes/cadastro/Cadastro";


export default function CadastroEmpresa() {
  const [empresa, setEmpresa] = useState("")
  const [CNPJ, setCNPJ] = useState("")
<<<<<<< HEAD
=======
  const [statusEmpresa, setStatusEmpresa] = useState(true);
>>>>>>> db99a3c3417c57240d87e2b7d59c4d116db195bb
>>>>>>> 942a08ec713c2f9fa33e85c41a138d820e19dff9

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
  async function handleSubmit(e) {
    e.preventDefault();

    if (!empresa.trim() || !cnpj.trim()) {
      alertar("warning", "Preencha todos os campos.");
      return;
    }

    const payload = {
      Nome: empresa.trim(),
      Cnpj: cnpj.trim(),
      Ativo: true  // adicione se o backend exigir
    };

    console.log("Enviando:", payload); // debug

    setLoading(true);
    try {
      const response = await api.post("empresa", payload);
      if (response.status === 201 || response.status === 200) {
        alertar("success", "Empresa cadastrada com sucesso!");
        setEmpresa("");
        setCnpj("");
      } else {
        console.error("Resposta inesperada:", response);
        alertar("error", "Erro ao cadastrar empresa");
      }
    } catch (error) {
      console.error("Erro completo:", error.response);
      const mensagemErro = error.response?.data?.message ||
        error.response?.data?.errors ||
        error.response?.data ||
        "Erro ao cadastrar empresa";
      alertar("error", JSON.stringify(mensagemErro));
    } finally {
      setLoading(false);
    }
  }


=======
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

>>>>>>> db99a3c3417c57240d87e2b7d59c4d116db195bb
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
>>>>>>> db99a3c3417c57240d87e2b7d59c4d116db195bb
          </div>
        </section>
      </div>
    </main>
  );
}