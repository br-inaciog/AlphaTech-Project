import "./Botao.css"
import { Link } from 'react-router';

export default function Botao() {
    return (
        <>
            <Link to="/Listagem">
                <button className="botaoLogin">
                    Entrar
                </button>
            </Link>
        </>
    )
}