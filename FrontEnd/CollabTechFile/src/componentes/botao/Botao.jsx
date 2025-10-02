import "./Botao.css"
import { Link } from 'react-router-dom';

export function Botao() {
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