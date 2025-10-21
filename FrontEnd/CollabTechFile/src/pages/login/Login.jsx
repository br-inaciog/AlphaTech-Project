import "./Login.css";
import Botao from "../../components/botao/Botao";
import User from "../../assets/img/UserModoClaro.png";
import Logo from "../../assets/img/Logo.png";
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