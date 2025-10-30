import "./docAndamentoClie.css";

import Comentario from "../../assets/img/Comentario.png";
import { useState } from "react";
import ModalComentarioCliente from "../../components/cometarioCliente/ModalComentarioCliente";
import MenuLateral from "../../components/menuLateral/MenuLateral";
import Cabecalho from "../../components/cabecalho/Cabecalho";

export default function DocAndamentoClie() {
    const [modalAberto, setModalAberto] = useState(false);

    const abrirModal = () => setModalAberto(true);
    const fecharModal = () => setModalAberto(false);
    const publicarComentario = (comentario) => {
        console.log("Comentário publicado:", comentario);
        fecharModal();
    };

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

                            <div className="comentarioDisplay" onClick={abrirModal}>
                                <p>Comentar</p>
                                <img className="imgComentario" src={Comentario} alt="Botão de Comentário" />
                            </div>

                            {/* Modal de comentário */}
                            <ModalComentarioCliente
                                aberto={modalAberto}
                                nomeDocumento="Nome Documento"
                                aoCancelar={fecharModal}
                                aoPublicar={publicarComentario}
                            />
                        </div>
                    </section>
                </section>
            </main>
        </div>
    );
}