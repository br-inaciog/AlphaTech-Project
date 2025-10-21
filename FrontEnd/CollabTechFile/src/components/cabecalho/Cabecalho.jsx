import "./Cabecalho.css";

import Lupa from "../../assets/img/Lupa.png";
import User from "../../assets/img/User.png";
import Seta from "../../assets/img/Seta.png";
import { Link } from "react-router";

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="containerCabecalho">
        <div className="grupoPesquisa">
          <img src={Lupa} alt="Lupa" className="iconeLupa" />
          <input type="search" placeholder="Pesquisar..." />
        </div>

        <div className="iconeUser">
          <img src={User} alt="Usuário" />
        </div>
      </div>

      <Link to="/Inicio">
        <img className="setaImg" src={Seta} alt="Seta Voltar" />
      </Link>
    </header>
  );
}
