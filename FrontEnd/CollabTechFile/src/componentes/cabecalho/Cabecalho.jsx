import "./Cabecalho.css"

import Lupa from "../../assets/img/Lupa.png"
import User from "../../assets/img/User.png"
import Lua from "../../assets/img/Lua.png"
import Seta from "../../assets/img/Seta.png"
import { Link } from "react-router"

export default function cabecalho() {
    return (
        <header>
            <nav className="cabecalho">
                <div className="grupoPesquisa">
                    <input type="search" />
                    <label>Pesquisar...</label>
                    <img src={Lupa} alt="Imagem Lupa" />
                </div>

                <div className="infCabecalho">
                    <div className="infUser">
                        <img src={User} alt="Usuário Img" />
                        <p>Cliente</p>
                    </div>
                    <img src={Lua} alt="Lua modo claro" />
                </div>

            </nav>
            
            <Link to="/Inicio" className="setaImg">
                <img src={Seta} alt="Seta" />
            </Link>
        </header>
    )
}