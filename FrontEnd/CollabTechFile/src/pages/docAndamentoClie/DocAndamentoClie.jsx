import "./docAndamentoClie.css"

import MenuLateral from "../../components/menuLateral/MenuLateral"
import Cabecalho from "../../components/cabecalho/Cabecalho"
import Comentario from "../../assets/img/Comentario.png"
import { Link } from "react-router"

export default function DocAndamentoClie() {
    return (
        <div className="containerGeral'">
            <MenuLateral />
            <main className="conteudoPrincipal">
                <section className="areaTrabalho">
                    <Cabecalho />

                    <section className="docAndamento">
                        <div className="titulo">
                            <h1>Documento em Andamento</h1>
                        </div>

                        <div className="documento">
                            <p className="docNome">Nome Documento</p>

                            <div className="regrasDeNegocio">
                                <div className="tituloRN">
                                    <h2>Regras de Negócio</h2>
                                </div>

                                <section>
                                    <div className="listaRN">
                                        <p>RN01: <span>RN01 listadada</span></p>
                                    </div>
                                </section>
                            </div>


                            <div className="requisitosFuncionais">
                                <div className="tituloRF">
                                    <h2>Requisitos Funcionais</h2>
                                </div>

                                <section>
                                    <div className="listaRF">
                                        <p>RN01: <span>RN01 listadada</span></p>
                                    </div>
                                </section>
                            </div>


                            <div className="requisitosNaoFuncionais">
                                <div className="tituloRNF">
                                    <h2>Requisitos não Funcionais</h2>
                                </div>

                                <section>
                                    <div className="listaRNF">
                                        <p>RN01: <span>RN01 listadada</span></p>
                                    </div>
                                </section>
                            </div>
                            

                            {/* <Link to="/ModalComentarioCliente" className="voltar">          */}
                            <Link to="/ModalComentarioCliente" className="voltar">
                            <div className="comentarioDisplay">
                                <div className="divAss">

                                <p>Comentar</p>
                                < img className="btnComentario" src={Comentario} alt="Botão de Comentário" />
                                </div>
                            </div>
                            </Link>
                            {/* </Link> */}
                        </div>
                    </section>
                </section>
            </main>
        </div>
    )
}