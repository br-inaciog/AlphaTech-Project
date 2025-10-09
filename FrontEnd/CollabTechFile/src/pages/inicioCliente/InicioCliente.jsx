import "./InicioCliente.css"

import MenuLateralCliente from "../../componentes/menuLateralCliente/MenuLateralCliente"
import Cabecalho from "../../componentes/cabecalho/Cabecalho"

export default function InicioCliente() {
    return (
        <div className="containerGeral'">
            <MenuLateralCliente />
            <main className="conteudoPrincipal">
                <section className="areaTrabalho">
                    <Cabecalho />
                </section>
            </main>
        </div>
    )
}