import "./docAndamentoFunc.css"
import MenuLateral from "../../components/menuLateral/MenuLateral";
import Cabecalho from "../../components/cabecalho/Cabecalho"

import Adicionar from "../../assets/img/Adicionar.svg"
import Deletar from "../../assets/img/Delete.svg";
import Editar from "../../assets/img/Editar.png"

export default function DocAndamentoFunc() {
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

                        <form action="" className="documento">
                            <p className="docNome">Nome Documento</p>

                            <div className="infDocumento">
                                <div className="botaoFiltrarVersoesDoc">
                                    <p>Versão Documento</p>
                                    <select>
                                        <option disabled selected>Versões</option>
                                        <option value="versoes">Versão 1.1</option>
                                    </select>
                                </div>

                                <div className="botaoSelectRementente">
                                    <p>Rementente</p>
                                    <select>
                                        <option disabled selected>Destinatário</option>
                                        <option value="rementente">Bolsonaro</option>
                                    </select>
                                </div>
                            </div>


                            <div className="prazoEntrega">
                                <label htmlFor="">Prazo de Entrega:</label>
                                <input type="date" />
                            </div>

                            <div className="regrasDeNegocio">
                                <div className="tituloRN">
                                    <h2>Regras de Negócio</h2>
                                    <button>
                                        <img className="botaoAdicionar" src={Adicionar} alt="Botao De Adicionar" />
                                    </button>
                                </div>

                                <section>
                                    <div className="listaRN">
                                        <p>RN01: <span>RN01 listadada</span></p>

                                        <div className="iconeRequisitosERegra">
                                            <img className="botaoExcluir" src={Deletar} alt="Lixeira" />
                                            <img className="botaoEditar" src={Editar} alt="Caneta de Editar" />
                                        </div>
                                    </div>
                                </section>
                            </div>


                            <div className="requisitosFuncionais">
                                <div className="tituloRF">
                                    <h2>Requisitos Funcionais</h2>
                                    <button>
                                        <img className="botaoAdicionar" src={Adicionar} alt="Botao De Adicionar" />
                                    </button>
                                </div>

                                <section>
                                    <div className="listaRF">
                                        <p>RN01: <span>RN01 listadada</span></p>

                                        <div className="iconeRequisitosERegra">
                                            <img className="botaoExcluir" src={Deletar} alt="Lixeira" />
                                            <img className="botaoEditar" src={Editar} alt="Caneta de Editar" />
                                        </div>
                                    </div>
                                </section>
                            </div>


                            <div className="requisitosNaoFuncionais">
                                <div className="tituloRNF">
                                    <h2>Requisitos não Funcionais</h2>
                                    <button>
                                        <img className="botaoAdicionar" src={Adicionar} alt="Botao De Adicionar" />
                                    </button>
                                </div>

                                <section>
                                    <div className="listaRNF">
                                        <p>RN01: <span>RN01 listadada</span></p>

                                        <div className="iconeRequisitosERegra">
                                            <img className="botaoExcluir" src={Deletar} alt="Lixeira" />
                                            <img className="botaoEditar" src={Editar} alt="Caneta de Editar" />
                                        </div>
                                    </div>
                                </section>
                            </div>

                            <div className="salvarFinalizarDoc">
                                <div className="buttonSalvar">
                                    <button className="salvarDoc">
                                        Salvar
                                    </button>
                                </div>

                                <div className="buttonFinalizar">
                                    <button className="finalizarDoc">
                                        Finalizar
                                    </button>
                                </div>
                            </div>

                        </form>
                    </section>

                    <section className="areaComentarioDoc">
                        <div className="comentariosDocDisplay">
                            <div className="titulo">
                                <h1>Comentários</h1>
                            </div>
                        </div>

                        <div className="cardFeedbackDoc">
                            <div className="cabecalhoFeedbackDoc">
                                <span className="nomeFeedbackDoc">Tirulipa</span>

                                <div className="horarioDataComentario">
                                    <span className="dataFeedbackDoc">11/09/2001</span>
                                    <span className="horarioFeedbackDoc">12:03PM</span>
                                </div>
                            </div>
                            <p className="mensagemFeedbackDoc">Poderia Alterar a Terceira Linha da Regra de Negócios fgdhsjhgfvdsbjucdgbvdnjviudhebdnvjiudhwgbdvnjduwshgbdvnjugrfehj9dfivbedjbfhj.</p>
                        </div>
                    </section>
                </section>
            </main>
        </div >
    )
}