import './MenuLateral.css';
import LogoMenu from '../../assets/img/logoMenu.png';
import Casinha from '../../assets/img/Casinha.png';
import Documents from '../../assets/img/Documents.png';
import Cliente from '../../assets/img/Cliente.png';
import Cadastrar from '../../assets/img/Cadastrar.png';
import Logout from '../../assets/img/Logout.png';

import { Navigate, Link, useNavigate } from 'react-router-dom';

export default function MenuLateral() {
    return (
        <header className="menuLateral">
            <img src={LogoMenu} alt="Logo CollabTech Menu" className="logoMenu" />

            <div className="linksLateral">
                <Link to="/Inicio">
                    <img src={Casinha} alt="Casinha" />
                    Início
                </Link>

                <Link to="/Cadastrar">
                    <img src={Cadastrar} alt="Usuário" />
                    Cadastrar Clientes
                </Link>

                <Link to="/Listagem">
                    <img src={Documents} alt="Documentos"/>
                    Documentos
                </Link>

                {/* <Link>
                    <img src={Cliente} alt="Clientes" />
                    Clientes
                </Link> */}
            </div>

            <Link to="/" className="logout">
                <img src={Logout} alt="" />
                LOGOUT
            </Link>
        </header>
    )
}