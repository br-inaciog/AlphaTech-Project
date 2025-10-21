import "./InicioCliente.css"

import MenuLateralCliente from "../../components/menuLateral/MenuLateral"
import CabecalhoCliente from "../../components/cabecalho/Cabecalho"

import Pdf from "../../assets/img/PDF.png"

import { Link } from "react-router"

export default function InicioCliente() {
    return (
        <div className="containerGeral'">
            <MenuLateral />
            <main className="conteudoPrincipal">
                <section className="areaTrabalho">
                    <Cabecalho/>

                    <div className="titulo">
                        <h1>Documentos</h1>
                    </div>

                    <div className="botoesPAF">
                        <Link className="botaoPendenteCliente">
                            <p>Pendente</p>
                        </Link>

                        <Link className="botaoAndamentoCliente">
                            <p>Em Andamento</p>
                        </Link>

                        <Link className="botaoFinalizadoCliente">
                            <p>Finalizados</p>
                        </Link>
                    </div>

                    <section className="list">
                        <Link to="/docFinalizadoClie" className="cardDocumento">
                            <img src={Pdf} alt="Icone de Pdf" />
                            <div className="cardInformacoes">
                                <h1>Relatório de Requisitos Ifood</h1>
                                <p>11 de setembro 2024 Josemar</p>
                            </div>
                        </Link>
                    </section>

                </section>
            </main>
        </div>
    )
}