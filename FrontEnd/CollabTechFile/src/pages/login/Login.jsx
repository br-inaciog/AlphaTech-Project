import "./Login.css";
import Botao from "../../components/botao/Botao";
import User from "../../assets/img/UserModoClaro.png";
import Logo from "../../assets/img/Logo.png";
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
    }
  }

  return (
    <form className="mainLogin" onSubmit={realizarAutenticacao}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Email</label>
            </div>

            <div className="grupoSenha">
              <input
                type="password"
                minLength="10"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
              <label>Senha</label>
            </div>
          </div>
        </div>

        <Botao nomeBotao="Login" />
      </div>

      <img src={Logo} alt="Logo CollabTechFile" />
    </form>
  );
}
