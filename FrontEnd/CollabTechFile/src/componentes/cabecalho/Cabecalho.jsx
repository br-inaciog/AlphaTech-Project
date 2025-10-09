import "./Cabecalho.css"

import Lupa from "../../assets/img/Lupa.png"
import User from "../../assets/img/User.png"

import Seta from "../../assets/img/Seta.png"
import { Link } from "react-router"

export default function cabecalho() {
    return (
        <header>
            <nav className="cabecalho">
                <div className="grupoPesquisa">
                    <input type="search" placeholder="Pesquisar..."/>
                    <img src={Lupa} alt="Imagem Lupa" />
                </div>

                <div className="infCabecalho">
                    <div className="infUser">
                        <img src={User} alt="Usuário Img" />
                        <p>Cliente</p>
                    </div>
                   
                </div>

            </nav>
            
            <Link to="/Inicio" className="setaImg">
                <img src={Seta} alt="Seta" />
            </Link>
        </header>
    )
}