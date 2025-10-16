import "./ListagemDoc.css";

import MenuLateral from "../../componentes/menuLateral/MenuLateral";
import Cabecalho from "../../componentes/cabecalho/Cabecalho";
import Lixeira from "../../assets/img/Lixeira.png";
import Pdf from "../../assets/img/PDF.png";
import Editar from "../../assets/img/Editar.png";
import Excluir from "../../assets/img/Delete.svg";
import { Link } from "react-router";
import { useState } from "react";

export default function ListagemDoc() {
    const [hover, setHover] = useState(false);

    return (
        <div className="containerGeral">
            <MenuLateral />
            <main className="conteudoPrincipal">
                <section className="areaTrabalho">
                    <Cabecalho />

                    <div className="titulo">
                        <h1>Documentos</h1>
                    </div>

                    <div className="botaoFiltraLixeira">
                        <div className="botaoFiltrar">
                            <select>
                                <option disabled selected>
                                    Filtrar
                                </option>
                                <option value="Pendentes">Pendentes</option>
                                <option value="Assinados">Assinados</option>
                                <option value="Finalizados">Finalizados</option>
                            </select>
                        </div>

                        <Link className="botaoLixeiraList" to="/Lixeira">
                            <img src={Lixeira} alt="Lixeira" />
                            <p>Excluídos</p>
                        </Link>
                    </div>

                    <div
                        className="cardContainer"
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >
                        <Link to="/docAndamentoFunc" className="cardDocumento">
                            <img src={Pdf} alt="Icone de Pdf" />
                            <div className="cardInformacoes">
                                <h1>Relatório de Requisitos Ifood</h1>
                                <p>
                                    Data: <span>11/09/2001</span>
                                </p>
                                <p>
                                    Horário de Criação: <span>12h03</span>
                                </p>
                            </div>

                            <div className="cardAcoes">
                                <div className="infAcoes">
                                    <img src={Editar} alt="Editar" />
                                </div>

                                <div className="infAcoes">
                                    <img src={Excluir} alt="Excluir" />
                                </div>
                            </div>
                        </Link>

                        <div className={`mensagemDoc ${hover ? "show" : ""}`}>
                            <p className="tituloMensagem">Anotações:</p>
                            <p>Mensagem escrita pelo proprietário...</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
