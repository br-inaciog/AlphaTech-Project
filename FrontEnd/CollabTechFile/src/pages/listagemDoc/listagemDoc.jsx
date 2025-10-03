import "./ListagemDoc.css"

import MenuLateral from "../../componentes/menuLateral/MenuLateral"
import Cabecalho from "../../componentes/cabecalho/Cabecalho"
import Lixeira from "../../assets/img/Lixeira.png"

import Pdf from "../../assets/img/PDF.png"
import Editar from "../../assets/img/Editar.png"
import Excluir from "../../assets/img/Delete.png"
import { Link } from "react-router"


export default function ListagemDoc() {
    return (
        <div className="containerGeral'">
            <MenuLateral />
            <main className="conteudoPrincipal">
                <section className="areaTrabalho">
                    <Cabecalho />

                    <div className="botaoFiltraLixeira">
                        <div className="botaoFiltrar">
                            <button>
                                <p>Filtrar</p>
                            </button>
                        </div>

                        <div className="botaoLixeiraList">
                            <button>
                                <img src={Lixeira} alt="Lixeira" />
                                <p>Excluidos</p>
                            </button>
                        </div>
                    </div>

                    <section>
                        <div className="cardDocumento">
                            <img src={Pdf} alt="Icone de Pdf" />
                            <div className="cardInformacoes">
                                <h1>Relatório de Requisitos Ifood</h1>
                                <p>11 de setembro 2024 Josemar</p>
                            </div>

                            <div className="cardAcoes">
                                <div>
                                    <img src={Excluir} alt="Caneta Editar" />
                                    <p>Editar</p>
                                </div>

                                <div>
                                    <img src={Editar} alt="Lixeira" />
                                    <p>Lixeira</p>
                                </div>
                            </div>
                        </div>
                    </section>

                </section>
            </main>

        </div>
    )
}