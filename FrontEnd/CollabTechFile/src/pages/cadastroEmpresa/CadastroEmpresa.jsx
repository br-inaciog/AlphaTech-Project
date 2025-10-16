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
          </div>
        </section>
      </div>
    </main>
  );
}