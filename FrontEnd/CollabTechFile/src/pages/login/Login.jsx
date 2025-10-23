import "./Login.css";
import Botao from "../../components/botao/Botao";
import User from "../../assets/img/UserModoClaro.png";
import Logo from "../../assets/img/Logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../Services/service";
import Swal from "sweetalert2";
import { userDecodeToken } from "../../auth/Auth";
import secureLocalStorage from "react-secure-storage";
import { useAuth } from "../../contexts/AuthContext";


export default function Login() {
  const { setUsuario } = useAuth();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // async function realizarAutenticacao(e) {
  //   e.preventDefault();

  //   if (email.trim() === "" || senha.trim() === "") {
  //     alert("Preencha os campos vazios para realizar o login");
  //     return;
  //   }

  //   const usuario = { email, senha };

  //   try {
  //     const resposta = await api.post("Login", usuario);
  //     const token = resposta.data.token;

  //     if (token) {
  //       const tokenDecodificado = userDecodeToken(token);
  //       console.log(tokenDecodificado);

  //       setUsuario(tokenDecodificado);
  //       secureLocalStorage.setItem("tokenLogin", JSON.stringify(tokenDecodificado));

  //       if (tokenDecodificado.tipoUsuario === "Cliente") {
  //         navigate("/InicioCliente");
  //       } else {
  //         navigate("/Inicio");
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     alert("Email ou senha inválidos! Para dúvidas, entre em contato com o suporte.");
  //   }
  // }


  function toast(icon, title) {
    const T = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true
    });
    T.fire({ icon, title });
  }

  async function handleSubmit(e) {
  e.preventDefault();

  const emailTrim = email.trim();

  // 🔹 Validações simples antes da requisição
  if (!emailTrim || !senha) {
    toast("warning", "Informe email e senha.");
    return;
  }

  if (senha.length < 6 || senha.length > 8) {
    toast("warning", "A senha deve ter entre 6 e 8 caracteres.");
    return;
  }

  const usuario = { email: emailTrim, senha };
  setLoading(true);

  try {
    const resposta = await api.post("Login", usuario);
    const token = resposta.data?.token;

    if (!token) {
      toast("error", "Token não retornado pelo servidor.");
      return;
    }

    // 🔹 Decodifica token e guarda informações
    const tokenDecodificado = userDecodeToken(token);
    setUsuario(tokenDecodificado);

    secureLocalStorage.setItem("tokenLogin", token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    // 🔹 Redireciona conforme tipo de usuário
    if (tokenDecodificado.tipoUsuario === "Cliente") {
      navigate("/InicioCliente");
    } else if(tokenDecodificado.tipoUsuario === "Funcionario") {
      navigate("/CadastroFuncionario");
    } else{
      navigate("Inicio")
    }

    toast("success", "Login realizado com sucesso!");
  } catch (err) {
    const status = err.response?.status;
    const body = err.response?.data;

    if (status === 404) {
      toast("error", typeof body === "string" ? body : "Usuário não encontrado.");
    } else if (status === 401) {
      toast("error", typeof body === "string" ? body : "Credenciais inválidas.");
    } else if (status === 400) {
      const mensagem =
        typeof body === "string"
          ? body
          : body?.message || body?.errors || "Requisição inválida.";
      toast("error", typeof mensagem === "string" ? mensagem : JSON.stringify(mensagem));
    } else {
      toast("error", "Erro ao autenticar. Tente novamente.");
    }

    console.error("Login error:", status, body);
  } finally {
    setLoading(false);
  }
}


  return (
    <form className="mainLogin" onSubmit={handleSubmit}>
      <div className="campoLogin">
        <div className="userTitulo">
          <img src={User} alt="Imagem usuário" />
          <h1>Seja Bem-Vindo</h1>
        </div>

        <div className="campoInput">
          <div className="inputLogin">
            <div className="grupoEmail">
              <input
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
              />
              <label>Email</label>
            </div>

            <div className="grupoSenha">
              <input
                type="password"
                minLength={6}
                maxLength={8}
                autoComplete="current-password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                disabled={loading}
                required
              />
              <label>Senha</label>
            </div>
          </div>
        </div>

        <button type="submit" disabled={loading} style={{ all: "unset" }}>
          <Botao nomeBotao={loading ? "Entrando..." : "Login"} />
        </button>
      </div>

      <img src={Logo} alt="Logo CollabTechFile" />
    </form>
  );
}