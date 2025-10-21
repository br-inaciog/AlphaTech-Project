import "./CadastroEmpresa.css";
import { useState } from "react";
import Swal from "sweetalert2";
import api from "../../Services/service";
import MenuLateral from "../../components/menuLateral/MenuLateral";
import Cadastro from "../../components/cadastro/Cadastro";
import user from "../../assets/img/user.png";

export default function CadastroEmpresa() {
  const [empresa, setEmpresa] = useState("");
  const [CNPJ, setCNPJ] = useState("");
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
      },
    });

    Toast.fire({ icon: icone, title: mensagem });
  }

  async function cadEmpresa(e) {
    e.preventDefault();

    if (!empresa.trim() || !CNPJ.trim()) {
      alertar("warning", "Preencha todos os campos!");
      return;
    }

    setLoading(true);

    try {
      await api.post("Empresa", {
        nome: empresa,
        cnpj: CNPJ,
      });

      alertar("success", "Cadastro realizado!");
      setEmpresa("");
      setCNPJ("");
    } catch (error) {
      console.error("Erro ao cadastrar empresa:", error);
      alertar("error", "Erro. Entre em contato com o suporte!");
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

            <form className="formulario" onSubmit={cadEmpresa}>
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
                  value={CNPJ}
                  onChange={(e) => setCNPJ(e.target.value)}
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
