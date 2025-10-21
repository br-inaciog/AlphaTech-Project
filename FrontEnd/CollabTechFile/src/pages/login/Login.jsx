import "./Login.css";
import Botao from "../../components/botao/Botao";
import User from "../../assets/img/UserModoClaro.png";
import Logo from "../../assets/img/Logo.png";
<<<<<<< HEAD
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../Services/service";
import Swal from "sweetalert2";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

    if (!emailTrim || !senha) {
      toast("warning", "Informe email e senha.");
      return;
    }

    if (senha.length < 6 || senha.length > 8) {
      toast("warning", "A senha deve ter entre 6 e 8 caracteres.");
      return;
    }

    setLoading(true);
    try {
      const payload = { Email: emailTrim, Senha: senha };

      const res = await api.post("Login", payload);

      // Se retornar token, salva e define Authorization
      const token = res.data?.token;
      if (token) {
        localStorage.setItem("token", token);
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
      }

      toast("success", "Login realizado!");
      navigate("/Inicio");
    } catch (err) {
      const status = err.response?.status;
      const body = err.response?.data;

      if (status === 404) {
        toast("error", typeof body === "string" ? body : "Usuário não encontrado.");
      } else if (status === 401) {
        toast("error", typeof body === "string" ? body : "Credenciais inválidas.");
      } else if (status === 400) {
        // Pode ser falha de validação do DTO
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
=======
import api from "../../Services/service";
import { useState } from "react";
import { userDecodeToken } from "../../auth/Auth";
import secureLocalStorage from "react-secure-storage";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { setUsuario } = useAuth();

  async function realizarAutenticacao(e) {
    e.preventDefault();

    if (email.trim() === "" || senha.trim() === "") {
      alert("Preencha os campos vazios para realizar o login");
      return;
    }

    const usuario = { email, senha };

    try {
      const resposta = await api.post("Login", usuario);
      const token = resposta.data.token;

      if (token) {
        const tokenDecodificado = userDecodeToken(token);
        console.log(tokenDecodificado);

        setUsuario(tokenDecodificado);
        secureLocalStorage.setItem("tokenLogin", JSON.stringify(tokenDecodificado));

        if (tokenDecodificado.tipoUsuario === "Cliente") {
          navigate("/telaCliente");
        } else {
          navigate("/docAndamentoFunc");
        }
      }
    } catch (error) {
      console.log(error);
      alert("Email ou senha inválidos! Para dúvidas, entre em contato com o suporte.");
>>>>>>> 95e64a1ee5ffa9750a6ca6daff8df86b84d1c486
    }
  }

  return (
<<<<<<< HEAD
    <form className="mainLogin" onSubmit={handleSubmit}>
=======
    <form className="mainLogin" onSubmit={realizarAutenticacao}>
>>>>>>> 95e64a1ee5ffa9750a6ca6daff8df86b84d1c486
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
<<<<<<< HEAD
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
=======
                value={email}
                onChange={(e) => setEmail(e.target.value)}
>>>>>>> 95e64a1ee5ffa9750a6ca6daff8df86b84d1c486
                required
              />
              <label>Email</label>
            </div>

            <div className="grupoSenha">
              <input
                type="password"
<<<<<<< HEAD
                minLength={6}
                maxLength={8}
                autoComplete="current-password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                disabled={loading}
=======
                minLength="10"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
>>>>>>> 95e64a1ee5ffa9750a6ca6daff8df86b84d1c486
                required
              />
              <label>Senha</label>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        <button type="submit" disabled={loading} style={{ all: "unset" }}>
          <Botao nomeBotao={loading ? "Entrando..." : "Login"} />
        </button>
=======
        <Botao nomeBotao="Login" />
>>>>>>> 95e64a1ee5ffa9750a6ca6daff8df86b84d1c486
      </div>

      <img src={Logo} alt="Logo CollabTechFile" />
    </form>
  );
}