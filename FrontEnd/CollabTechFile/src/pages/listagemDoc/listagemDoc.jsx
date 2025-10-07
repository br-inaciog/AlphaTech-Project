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
                            <Link to="/Lixeira">
                                <button>
                                    <img src={Lixeira} alt="Lixeira" />
                                    <p>Excluidos</p>
                                </button>
                            </Link>
                        </div>
                    </div>

                    <section>
                        <Link className="cardDocumento" to="/docAndamento">
                            <img src={Pdf} alt="Icone de Pdf" />
                            <div className="cardInformacoes">
                                <h1>Relatório de Requisitos Ifood</h1>
                                <p>11 de setembro 2024 Josemar</p>
                            </div>

                            <div className="cardAcoes">
                                <div className="infAcoes">
                                    <img src={Excluir} alt="Caneta Editar" />
                                    <p>Editar</p>
                                </div>

                                <div className="infAcoes">
                                    <img src={Editar} alt="Lixeira" />
                                    <p>Lixeira</p>
                                </div>
                            </div>
                        </Link>
                    </section>
                </section>
            </main>

        </div>
    )
}