import "./MenuLateral.css";
import { useAuth } from "../../contexts/AuthContext";

import LogoMenu from '../../assets/img/logoMenu.png';
import Casinha from '../../assets/img/Casinha.png';
import Documents from '../../assets/img/Documents.png';
import Cliente from '../../assets/img/Cliente.png';
import Cadastrar from '../../assets/img/Cadastrar.png';
import FeedBack from '../../assets/img/Feedback.png';
import LogoutIcon from '../../assets/img/Logout.png';

import { Link } from 'react-router-dom';

export default function MenuLateral() {
    const { logout } = useAuth(); // ✅ função do contexto

    const handleLogout = (e) => {
        e.preventDefault(); // evita o comportamento padrão do Link
        logout();           // ✅ já apaga o token e redireciona
    };

    return (
        <header className="menuLateral">
            <img src={LogoMenu} alt="Logo CollabTech Menu" className="logoMenu" />

            <div className="linksLateral">
                <Link to="/Inicio" className="links">
                    <img src={Casinha} alt="Casinha" />
                    Início
                </Link>

                {/* <Link to="/CadastroCliente" className="links">
                    <img src={Cadastrar} alt="Usuário" />
                    Cadastrar Clientes
                </Link> */}

                <Link to="/Listagem" className="links">
                    <img src={Documents} alt="Documentos" />
                    Documentos
                </Link>

                <Link to="/TelaCliente" className="links">
                    <img src={Cliente} alt="Clientes" />
                    Clientes
                </Link>

                <Link to="/FeedBacks" className="links">
                    <img src={FeedBack} alt="Comentario" />
                    Comentario
                </Link>
            </div>

            <Link onClick={handleLogout} to="/" className="logout">
                <img src={LogoutIcon} alt="Logout" />
                Sair
            </Link>
        </header>
    );
}
