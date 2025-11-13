import "./ListagemDoc.css";
import api from "../../services/Service";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import MenuLateral from "../../components/menuLateral/MenuLateral";
import Cabecalho from "../../components/cabecalho/Cabecalho";
import Lixeira from "../../assets/img/Lixeira.png";
import Pdf from "../../assets/img/PDF.png";
import Editar from "../../assets/img/Editar.png";
import Excluir from "../../assets/img/Delete.svg";
import Swal from "sweetalert2";

export default function ListagemDoc() {
    const [listagemDoc, setListagemDoc] = useState([]);
    const [hoverIndex, setHoverIndex] = useState(null);
    const [filtro, setFiltro] = useState("Todos");
    const location = useLocation();
    const navigate = useNavigate();

    // Pega o status da URL (/documentos?status=pendente)
    const params = new URLSearchParams(location.search);
    const statusFiltro = params.get("status");

    async function listarDocumentos() {
        try {
            const resposta = await api.get("Documentos");
            setListagemDoc(resposta.data);
        } catch (error) {
            console.error("Erro ao listar documentos:", error);
        }
    }

    async function excluirDocumento(idDocumento) {
        Swal.fire({
            title: "Mover para a lixeira?",
            text: "O documento NÃO será excluído definitivamente.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Mover para lixeira",
            cancelButtonText: "Cancelar"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await api.delete(`/Documentos/${idDocumento}`);
                    Swal.fire("Pronto!", "Documento movido para a lixeira.", "success");
                    listarDocumentos();
                } catch (error) {
                    console.error("Erro:", error);
                    Swal.fire("Erro!", "Não foi possível mover para a lixeira.", "error");
                }
            }
        });
    }

    // Quando a página carrega, define o filtro inicial baseado na URL
    useEffect(() => {
        listarDocumentos();

        if (statusFiltro === "pendente") setFiltro("Pendentes");
        else if (statusFiltro === "assinado") setFiltro("Assinados");
        else if (statusFiltro === "finalizado") setFiltro("Finalizados");
        else setFiltro("Todos");
    }, [statusFiltro]);

    // Aplica o filtro da URL ou o selecionado
    let documentosFiltrados = listagemDoc;

    if (filtro === "Pendentes") {
        documentosFiltrados = listagemDoc.filter((d) => d.status === false);
    } else if (filtro === "Assinados") {
            documentosFiltrados = listagemDoc.filter((d) => d.assinadoEm !== null);
    } else if (filtro === "Finalizados") {
            documentosFiltrados = listagemDoc.filter((d) => d.status === true);
    }

    // Define o título dinamicamente
    const tituloPagina = filtro === "Pendentes"
        ? "Documentos Pendentes"
        : filtro === "Assinados"
        ? "Documentos Assinados"
        : filtro === "Finalizados"
        ? "Documentos Finalizados"
        : "Todos os Documentos"
    ;

    function limparFiltro() {
        setFiltro("Todos");
        navigate("/Listagem"); // remove o ?status da URL
    }

    return (
        <div className="containerGeral">
            <MenuLateral />
            <main className="conteudoPrincipal">
                <section className="areaTrabalho">
                    <Cabecalho 
                        rota="Inicio"
                    />

                    <div className="titulo">
                      <h1>{tituloPagina}</h1>
                    </div>

                    <div className="botaoFiltraLixeira">
                        <div className="botaoFiltrar">
                            <select
                               value={filtro}
                                onChange={(e) => setFiltro(e.target.value)}
                            >
                                <option value="Todos">Todos</option>
                                <option value="Pendentes">Pendentes</option>
                                <option value="Assinados">Assinados</option>
                                <option value="Finalizados">Finalizados</option>
                            </select>

                            <button className="botaoLimparFiltro" onClick={() => setFiltro("Todos")}>
                                Limpar Filtro
                            </button>

                            {/* Botão de limpar filtro
                            <button
                                onClick={limparFiltro}
                                className="botaoLimpar"
                            >
                                Limpar filtro
                            </button> */}
                        </div>

                        <Link className="botaoLixeiraList" to="/Lixeira">
                            <p>Excluídos</p>
                        </Link>
                    </div>

                    <section className="list">
                        {documentosFiltrados.length > 0 ? (
                            documentosFiltrados.map((doc, index) => (
                                <div
                                    key={doc.idDocumento}
                                    className="cardContainer"
                                    onMouseEnter={() => setHoverIndex(index)}
                                    onMouseLeave={() => setHoverIndex(null)}
                                >
                                    <Link to="/docAndamentoFunc" className="cardDocumento">
                                        <img src={Pdf} alt="Icone de Pdf" />
                                        <div className="cardInformacoes">
                                            <h1>{doc.nome}</h1>
                                            <p>{new Date(doc.criadoEm).toLocaleDateString()}</p>
                                            <p>
                                                Versão: <span>{doc.versao || "1.0"}</span>
                                            </p>
                                        </div>

                                        <div className="cardAcoes">
                                            <div className="infAcoes">
                                                <img src={Editar} alt="Editar" />
                                            </div>

                                            <div className="infAcoes">
                                                <img
                                                    src={Excluir}
                                                    alt="Excluir"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        excluirDocumento(doc.idDocumento);
                                                    }}
                                                    style={{ cursor: "pointer" }}
                                                />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p>Nenhum documento encontrado.</p>
                        )}
                    </section>
                </section>
            </main>
        </div>
    );
}
