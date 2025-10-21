import "./Login.css"
import Botao from "../../components/botao/Botao";
import User from "../../assets/img/UserModoClaro.png"
import Logo from "../../assets/img/Logo.png"
import { Link } from "react-router";

export default function Login() {
    return (
        <form className="mainLogin" onSubmit="">
            <div className="campoLogin">

                <div className="userTitulo">
                    <img src={User} alt="Imagem usuário" />
                    <h1>Seja Bem-Vindo</h1>
                </div>

                <div className="campoInput">
                    <div
                        className="inputLogin">
                        <div className="grupoEmail">
                            <input type="email" />
                            <label>Email</label>
                        </div>

                        <div className="grupoSenha">
                            <input type="password" minLength="10" />
                            <label>Senha</label>
                        </div>
                    </div>
                </div>
                <Link to="/Inicio">
                    <Botao nomeBotao="Login" />
                </Link>
            </div>

            <img src={Logo} alt="Logo CollabTechFile" />
        </form>
    )
}