import "./InicioCliente.css"

import MenuLateral from "../../components/menuLateral/MenuLateral"
import Cabecalho from "../../components/cabecalho/Cabecalho"

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

                    <div className="botaoFiltraLixeira">
                        <div className="botaoFiltrar">
                            <select defaultValue="">
                                <option value="" disabled>Filtrar</option>
                                <option value="Pendentes">Pendentes</option>
                                <option value="Assinados">Assinados</option>
                                <option value="Finalizados">Finalizados</option>
                            </select>
                        </div>
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