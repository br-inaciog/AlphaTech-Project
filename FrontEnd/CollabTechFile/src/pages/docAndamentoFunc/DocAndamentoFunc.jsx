import "./docAndamentoFunc.css"
import MenuLateral from "../../componentes/menuLateral/MenuLateral"
import Cabecalho from "../../componentes/cabecalho/Cabecalho"

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

                        <div className="documento">
                                <p className="docNome">Nome Documento</p>

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

                            <div className="buttonFinalizar">
                                <button className="finalizarDoc">
                                    Finalizar
                                </button>
                            </div>
                        </div>

                        <div className="comentariosDocDisplay">
                            <div className="titulo">
                                <h1>Comentários</h1>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
        </div>
    )
}