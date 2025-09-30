import { Botao } from "../../componentes/botao/Botao";
import Logo from "../../assets/img/Logo.svg"
import "./Login.css"

export function Login() {
    return (
        <>
        <main className="mainLogin">
                <div>
                    <img src="" alt="Imagem usuário" />
                    <form action="">
                        <input type="email" placeholder="Email" />

                        <input type="password" placeholder="Senha" />

                        <div>
                            <input type="checkbox" />
                            <label htmlFor="">Lembre De Mim</label>
                        </div>

                        <Botao />
                    </form>
                </div>

                <img src={Logo} alt="Logo CollabTechFile" />
        </main>
        </>
    )
}