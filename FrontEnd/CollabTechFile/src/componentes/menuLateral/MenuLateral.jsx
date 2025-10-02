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
<<<<<<< HEAD
            <nav className="menuLateral">
=======
        <header className="menuLateral">
            <img src={LogoMenu} alt="Logo CollabTech Menu" className="logoMenu" />
>>>>>>> 9c4c5d92d578d8c0c707564f235ad22f4420ed30

            <div className="linksLateral">
                <Link to="/Inicio">
                    <img src={Casinha} alt="Casinha" />
                    Início
                </Link>

                <Link to="/Cadastrar">
                    <img src={Cadastrar} alt="Usuário" />
                    Cadastrar Clientes
                </Link>

<<<<<<< HEAD
                <ul>
                    <li>
                        <img src={Casinha} alt="" className='icones' />
                        Início
                    </li>
                    <li>
                        <img src={Cadastrar} alt="" className='icones' />
                        Cadastrar Clientes
                    </li>
                    <li>
                        <img src={Documents} alt="" className='icones' />
                        Documentos
                    </li>
                    <li>
                        <img src={Cliente} alt="" className='icones' />
                        Clientes
                    </li>
                    {/* <li> */}
                        {/* <img src={Feedback} alt="" className='icones' /> */}
                        {/* Feedbacks */}
                    {/* </li> */}
                </ul>
                <div className="logout">
                    <span>
                        <img src={Logout} alt="" />
                        LOGOUT
                    </span>
                </div>
            </nav>
=======
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
>>>>>>> 9c4c5d92d578d8c0c707564f235ad22f4420ed30
    )
}