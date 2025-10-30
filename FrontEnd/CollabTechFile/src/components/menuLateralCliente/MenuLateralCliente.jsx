import "./MenuLateralCliente.css"
import { useAuth } from "../../contexts/AuthContext";

import LogoMenu from '../../assets/img/logoMenu.png';
import Casinha from '../../assets/img/Casinha.png';
import FaleConosco from "../../assets/img/FaleConosco.png"
import Logout from '../../assets/img/Logout.png';

import { Link } from 'react-router';

export default function MenuLateralCliente() {
    const { logout } = useAuth(); 
    
        const handleLogout = (e) => {
            e.preventDefault(); 
            logout();
        };
    return (
        <header className="menuLateral">
            <img src={LogoMenu} alt="Logo CollabTech Menu" className="logoMenu" />

            <div className="linksLateral">
                <Link to="/InicioCliente" className="links">
                    <img src={Casinha} alt="Casinha" />
                    Início
                </Link>

                <Link to="/FaleConosco" className="links">
                    <img src={FaleConosco} alt="FaleConosco" />
                    Fale Conosco
                </Link>
            </div>

            <Link onClick={handleLogout} to="/" className="logout">
                <img src={Logout} alt="Logout" />
                Sair
            </Link>
        </header>
    )
}