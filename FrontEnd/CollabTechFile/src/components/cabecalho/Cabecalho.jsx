import "./Cabecalho.css"

import Lupa from "../../assets/img/Lupa.png"
import User from "../../assets/img/User.png"

import Seta from "../../assets/img/Seta.png"
import { Link } from "react-router-dom"

export default function Cabecalho(props) {
    return (
        <header>
            <nav className="cabecalho">
<<<<<<< HEAD
                {/* <div className="grupoPesquisa">
                    <input type="search" placeholder="Pesquisar..."/>
                    <img src={Lupa} alt="Imagem Lupa" />
                </div> */}

                <div className="infCabecalho">
                    <div className="infUser">
                        <img src={User} alt="Usuário Img" />
                        <p>Funcionario</p>
                    </div>
                   
                </div>

            </nav>
            
            <Link to={`/${props.rota}`}>
                <img className="setaImg" src={Seta} alt="Seta" />
            </Link>
=======
                <Link to="/Inicio">
                    <img className="setaImg" src={Seta} alt="Seta" />
                </Link>
            </nav>

>>>>>>> c18272c728dd0f0337659ea63e5a7c9a06eb5bc6
        </header>
    )
}