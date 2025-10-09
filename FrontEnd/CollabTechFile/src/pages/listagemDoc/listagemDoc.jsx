import "./ListagemDoc.css"

import MenuLateral from "../../componentes/menuLateral/MenuLateral"
import Cabecalho from "../../componentes/cabecalho/Cabecalho"
import Lixeira from "../../assets/img/Lixeira.png"

import Pdf from "../../assets/img/PDF.png"
import Editar from "../../assets/img/Editar.png"
import Excluir from "../../assets/img/Delete.svg"
import { Link } from "react-router"

export default function ListagemDoc() {
    return (
        <div className="containerGeral'">
            <MenuLateral />
            <main className="conteudoPrincipal">
                <section className="areaTrabalho">
                    <Cabecalho />

                    <div className="titulo">
                        <h1>Documentos</h1>
                    </div>

                    <div className="botaoFiltraLixeira">
                        <div className="botaoFiltrar">
                            <button>
                                <p>Filtrar</p>
                            </button>
                        </div>

                        <Link className="botaoLixeiraList" to="/Lixeira">
                            <img src={Lixeira} alt="Lixeira" />
                            <p>Excluidos</p>
                        </Link>
                    </div>

                    <section className="list">
                        <Link to="/docAndamentoFunc" className="cardDocumento">
                            <img src={Pdf} alt="Icone de Pdf" />
                            <div className="cardInformacoes">
                                <h1>Relatório de Requisitos Ifood</h1>
                                <p>11 de setembro 2024 Josemar</p>
                            </div>

                            <div className="cardAcoes">
                                <div className="infAcoes">
                                    <img src={Editar} alt="Lixeira" />
                                </div>

                                <div className="infAcoes">
                                    <img src={Excluir} alt="Caneta Editar" />
                                </div>
                            </div>
                        </Link>
                    </section>
                </section>
            </main>
        </div>
    )
}