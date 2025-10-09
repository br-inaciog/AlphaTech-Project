import "./MenuLateralCliente.css"

import Casinha from '../../assets/img/Casinha.png';
import FaleConosco from "../../assets/img/FaleConosco.png"

export default function MenuLateralCliente() {
    return (
        <header className="menuLateral">
            <img src={LogoMenu} alt="Logo CollabTech Menu" className="logoMenu" />

            <div className="linksLateral">
                <Link to="/Inicio" className="links">
                    <img src={Casinha} alt="Casinha" />
                    Início
                </Link>

                <Link to="/FeedBacks" className="links">
                    <img src={FaleConosco} alt="FaleConosco" />
                    Fale Conosco
                </Link>
            </div>

            <Link to="/" className="logout">
                <img src={Logout} alt="" />
                Sair
            </Link>
        </header>
    )
}