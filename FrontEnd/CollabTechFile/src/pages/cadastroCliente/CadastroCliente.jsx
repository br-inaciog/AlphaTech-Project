<<<<<<< HEAD
import "./CadastroCliente.css";
import Cadastro from "../../componentes/cadastro/Cadastro";
import MenuLateral from "../../componentes/menuLateral/MenuLateral";
import user from "../../assets/img/user.png"
import { useState } from "react";
=======
import MenuLateral from "../../components/menuLateral/MenuLateral";
import "./CadastroCliente.css";
import user from "../../assets/img/user.png"

import Left from "../../assets/img/Voltar.svg"
import Cadastro from "../../components/cadastro/Cadastro";

>>>>>>> b5d895e344a022648898c108d7b758718115d993

export default function CadastroCliente() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
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

  function validarSenha(senha) {
    // Mínimo 8 caracteres, pelo menos 1 número e 1 símbolo
    const regexSenha = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return regexSenha.test(senha);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Validações
    if (!nome.trim() || !email.trim() || !empresa.trim() || !senha || !confirmarSenha) {
      alertar("warning", "Preencha todos os campos.");
      return;
    }

    if (!validarSenha(senha)) {
      alertar("warning", "A senha deve ter mínimo 8 caracteres, com números e símbolos.");
      return;
    }

    if (senha !== confirmarSenha) {
      alertar("error", "As senhas não coincidem.");
      return;
    }

    const payload = {
      Nome: nome.trim(),
      Email: email.trim(),
      Empresa: empresa.trim(),
      Senha: senha,
      Ativo: true,
      // IdTipoUsuario: 2, // se precisar definir tipo (ex: 2 = Cliente)
      // IdEmpresa: null, // se precisar vincular a uma empresa existente
    };

    console.log("Enviando:", payload);

    setLoading(true);
    try {
      const response = await api.post("usuario", payload);

      if (response.status === 201 || response.status === 200) {
        alertar("success", "Cliente cadastrado com sucesso!");
        // Limpa os campos
        setNome("");
        setEmail("");
        setEmpresa("");
        setSenha("");
        setConfirmarSenha("");
      } else {
        alertar("error", `Erro ${response.status}`);
      }
    } catch (error) {
      console.error("Erro completo:", error.response);
      const mensagemErro = error.response?.data?.message ||
        error.response?.data?.errors ||
        error.response?.data ||
        "Erro ao cadastrar cliente";
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
