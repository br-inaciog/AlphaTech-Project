import './MenuLateral.css';
import LogoMenu from '../../assets/img/logoMenu.png';
import Casinha from '../../assets/img/Casinha.png';
import Feedback from '../../assets/img/Feedback.png';
import Documents from '../../assets/img/Documents.png';
import Cliente from '../../assets/img/Cliente.png';
import Cadastrar from '../../assets/img/Cadastrar.png';
import Logout from '../../assets/img/Logout.png';

export default function MenuLateral() {
    return (
        <nav className="menuLateral">

            <div style={{ marginBottom: 35 }}>
                <img src={LogoMenu} alt="Logo CollabTech Menu" className="logoMenu" />

            </div>

            <ul>
                <li>
                    <img src={Casinha} alt="" className='icones'/>
                    Início
                </li>
                <li>
                    <img src={Cadastrar} alt="" className='icones'/>
                    Cadastrar Clientes
                </li>
                <li>
                    <img src={Documents} alt="" className='icones'/>
                    Documentos
                </li>
                <li>
                    <img src={Cliente} alt="" className='icones'/>
                    Clientes
                </li>
                <li>
                    <img src={Feedback} alt="" className='icones'/>
                    Feedbacks
                </li>
            </ul>
            <div className="logout">
                <span>
                    <img src={Logout} alt="" />
                    LOGOUT
                </span>
            </div>
        </nav>
    );
}