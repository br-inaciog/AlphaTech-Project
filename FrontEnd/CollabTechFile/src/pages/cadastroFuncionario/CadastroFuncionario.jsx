<<<<<<< HEAD
=======

>>>>>>> b5d895e344a022648898c108d7b758718115d993
import "./CadastroFuncionario.css";

//Importar o seu SweetAlert
import Swal from 'sweetalert2';

<<<<<<< HEAD
=======
import MenuLateral from "../../components/menuLateral/MenuLateral";
import user from "../../assets/img/user.png"
import Left from "../../assets/img/Voltar.svg"
import Cadastro from "../../components/cadastro/Cadastro";
import { useEffect, useState } from "react";
>>>>>>> b5d895e344a022648898c108d7b758718115d993
import api from "../../services/Service";
import Cadastro from "../../componentes/cadastro/Cadastro";
import MenuLateral from "../../componentes/menuLateral/MenuLateral";
import { useEffect, useState } from "react";
import user from "../../assets/img/user.png"

export default function CadastroFuncionario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaVerificacao, setSenhaVerficacao] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("");
  const [listaTipoUsuario, setListaTipoUsuario] = useState([]);

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

  async function listarTipoUsuario() {
    try {
      const resposta = await api.get("tipoUsuario");

      console.log(resposta.data); 
      setListaTipoUsuario(resposta.data);
    } catch (error) {
      console.log(error);
    }
  }

  function validarSenha(senha) {
    // Mínimo 8 caracteres, pelo menos 1 número e 1 símbolo
    const regexSenha = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return regexSenha.test(senha);
  }

  async function cadFuncionario(e) {
    e.preventDefault();

    // Validações
    if (!nome.trim() || !email.trim() || !empresa.trim() || !tipoUsuario.trim() || !senha || !confirmarSenha) {
      alertar("warning", "Preencha todos os campos.");
      return;
    }

    console.log(nome);
    console.log(email);
    console.log(empresa);
    

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
      tipoUsuario: tipoUsuario.trim(),
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
        setTipoUsuario([]);
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
              valorInput1={nome}
              setValorInput1={setNome}

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
              tituloSelect="Selecionar Tipo Usuário"

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
