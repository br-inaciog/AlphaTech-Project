import "./Login.css"
import Botao from "../../componentes/botao/Botao";
import User from "../../assets/img/UserModoClaro.png"
import Logo from "../../assets/img/Logo.png"

export default function Login() {
    return (
        <>
            <form action="" className="mainLogin">
                <div className="campoLogin">

                    <div className="userTitulo">
                        <img src={User} alt="Imagem usuário" />
                        <h1>Seja Bem-Vindo</h1>
                    </div>

                    <form action="" className="campoInput">
                        <div className="inputLogin">
                            <div className="grupoEmail">
                                <input type="email"/>
                                <label>Email</label>
                            </div>

                            <div className="grupoSenha">
                                <input type="password" minLength="10"/>
                                <label>Senha</label>
                            </div>
                        </div>

                        <div className="inputCheckbox">
                            <input type="checkbox" />
                            <label htmlFor="">Lembre De Mim</label>
                        </div>
                    </form>
                    <Botao />
                </div>

                <img src={Logo} alt="Logo CollabTechFile" />
            </form>
        </>
    )
}