import "./Cabecalho.css"
import user from "../../assets/img/User.png"
import Seta from "../../assets/img/Seta.png"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { userDecodeToken } from "../../auth/Auth";
import secureLocalStorage from "react-secure-storage";

<<<<<<< HEAD
export default function Cabecalho() {

    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const token = secureLocalStorage.getItem("token");

        const dadosUsuario = userDecodeToken(token);

        setUsuario(dadosUsuario);
    }, []);

=======
export default function Cabecalho(props) {
>>>>>>> b4057c42bb6d03e0812a9307fa0abab8c69125f3
    return (
        <header>
            <nav className="cabecalho">
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
            <nav>
                <Link to={`/${props.rota}`}>
                    <img className="setaImg" src={Seta} alt="Seta" />
                </Link>
<<<<<<< HEAD
=======
                    <Link to="/Inicio">
                        <img className="setaImg" src={Seta} alt="Seta" />
                    </Link>
            </nav>
>>>>>>> b4057c42bb6d03e0812a9307fa0abab8c69125f3

                <div className="campoTipoUsuario">
                    <img src={user} alt="user" />

                    {usuario ? (
                        <div className="infos-usuario">
                            <p className="usuario-nome">{usuario.nome} - {usuario.tipoUsuario}</p>
                        </div>
                    ) : (
                        <p>Usuário não encontrado.</p>
                    )}
                </div>
            </nav>
        </header>
    )
}