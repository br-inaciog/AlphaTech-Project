import "./docAndamentoClie.css";

<<<<<<< HEAD
import MenuLateralCliente from "../../components/menuLateralCliente/MenuLateralCliente";
import CabecalhoCliente from "../../components/cabecalhoCliente/CabecalhoCliente";

import Comentario from "../../assets/img/Comentario.png";
import { useState } from "react";
import ModalComentarioCliente from "../../components/cometarioCliente/ModalComentarioCliente";

export default function DocAndamentoClie() {
    const [modalAberto, setModalAberto] = useState(false);

    const abrirModal = () => setModalAberto(true);
    const fecharModal = () => setModalAberto(false);
    const publicarComentario = (comentario) => {
        console.log("Comentário publicado:", comentario);
        fecharModal();
    };
=======
import MenuLateral from "../../components/menuLateral/MenuLateral"
import CabecalhoCliente from "../../components/cabecalhoCliente/CabecalhoCliente"

import Comentario from "../../assets/img/Comentario.png"
import Editar from "../../assets/img/Editar.png"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import api from "../../services/Service"

export default function DocAndamentoClie() {
    const [documentos, setDocumentos] = useState([]);
    const [funcionarios, setFuncionarios] = useState([]);
    const [empresas, setEmpresas] = useState([]);
    const [loading, setLoading] = useState(false);

    // Buscar documentos em andamento
    async function buscarDocumentosAndamento() {
        setLoading(true);
        try {
            const response = await api.get("Documentos");
            console.log("Resposta da API Documentos:", response.data);
            
            // Filtrar apenas documentos em andamento (se houver dados)
            if (response.data && response.data.length > 0) {
                const documentosAndamento = response.data.filter(doc => 
                    doc.status === "Em Andamento" || 
                    doc.status === "andamento" ||
                    doc.status === "Andamento" ||
                    doc.statusDocumento === "Em Andamento"
                );
                setDocumentos(documentosAndamento);
            } else {
                setDocumentos(response.data); // Array vazio
            }
        } catch (error) {
            console.error("Erro ao buscar documentos:", error);
        } finally {
            setLoading(false);
        }
    }

    // Buscar funcionários
    async function buscarFuncionarios() {
        try {
            const response = await api.get("usuario");
            console.log("Resposta da API Usuarios:", response.data);
            const funcionariosFiltrados = response.data.filter(usuario => usuario.idTipoUsuario === 3);
            console.log("Funcionários filtrados:", funcionariosFiltrados);
            setFuncionarios(funcionariosFiltrados);
        } catch (error) {
            console.error("Erro ao buscar funcionários:", error);
        }
    }

    // Buscar empresas
    async function buscarEmpresas() {
        try {
            const response = await api.get("empresa");
            console.log("Resposta da API Empresas:", response.data);
            setEmpresas(response.data);
        } catch (error) {
            console.error("Erro ao buscar empresas:", error);
        }
    }

    // Função para obter nome da empresa pelo ID
    function obterNomeEmpresa(idEmpresa) {
        if (!idEmpresa) return 'Não informado';
        const empresa = empresas.find(emp => emp.idEmpresa === idEmpresa || emp.id === idEmpresa);
        return empresa ? (empresa.nome || empresa.nomeEmpresa || 'Não informado') : 'Não informado';
    }

    // Função para obter nome do funcionário pelo ID
    function obterNomeFuncionario(idFuncionario) {
        if (!idFuncionario) return 'Não informado';
        const funcionario = funcionarios.find(func => 
            func.id === idFuncionario || 
            func.idUsuario === idFuncionario ||
            func.funcionarioId === idFuncionario
        );
        return funcionario ? (funcionario.nome || funcionario.nomeUsuario || 'Não informado') : 'Não informado';
    }

    // Função para obter email do funcionário pelo ID
    function obterEmailFuncionario(idFuncionario) {
        if (!idFuncionario) return 'Não informado';
        const funcionario = funcionarios.find(func => 
            func.id === idFuncionario || 
            func.idUsuario === idFuncionario ||
            func.funcionarioId === idFuncionario
        );
        return funcionario ? (funcionario.email || funcionario.emailUsuario || 'Não informado') : 'Não informado';
    }

    useEffect(() => {
        buscarDocumentosAndamento();
        buscarFuncionarios();
        buscarEmpresas();
    }, []);
>>>>>>> 06ffcc351e5d9a097b9ef3149e2d1ab9f2dbcad5

    return (
        <div className="containerGeral">
            <MenuLateral />
            <main className="conteudoPrincipal">
                <section className="areaTrabalho">
                    <CabecalhoCliente />

                    <section className="docAndamento">
                        <div className="titulo">
                            <h1>Documentos em Andamento</h1>
                            {loading && <p>Carregando...</p>}
                            <p>Total de documentos: {documentos.length}</p>
                            <p>Total de funcionários: {funcionarios.length}</p>
                            <p>Total de empresas: {empresas.length}</p>
                        </div>

<<<<<<< HEAD
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
                                <img src={Comentario} alt="Botão de Comentário" />
                            </div>

                            {/* Modal de comentário */}
                            <ModalComentarioCliente
                                aberto={modalAberto}
                                nomeDocumento="Nome Documento"
                                aoCancelar={fecharModal}
                                aoPublicar={publicarComentario}
                            />
                        </div>
=======
                        {documentos.length === 0 && !loading ? (
                            <div className="semDocumentos">
                                <p>📄 Nenhum documento em andamento encontrado.</p>
                                <p>💡 <strong>Motivo:</strong> Não há documentos cadastrados no sistema ou todos os documentos já foram finalizados.</p>
                                <p>🚀 <strong>Sugestão:</strong> Cadastre novos documentos ou verifique se há documentos em outras categorias.</p>
                            </div>
                        ) : (
                            <div className="tabelaDocumentosContainer">
                                <table className="tabelaDocumentos">
                                    <thead>
                                        <tr>
                                            <th>Documento</th>
                                            <th>Funcionário</th>
                                            <th>Email</th>
                                            <th>Empresa</th>
                                            <th>Status</th>
                                            <th>Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {documentos.map((documento, index) => (
                                            <tr key={`documento-${documento.id || documento.idDocumento || index}`}>
                                                <td>{documento.titulo || documento.nome || documento.nomeDocumento || "Sem título"}</td>
                                                <td>{obterNomeFuncionario(documento.idFuncionario || documento.idUsuario || documento.funcionarioId)}</td>
                                                <td>{obterEmailFuncionario(documento.idFuncionario || documento.idUsuario || documento.funcionarioId)}</td>
                                                <td>{obterNomeEmpresa(documento.idEmpresa || documento.empresaId)}</td>
                                                <td>
                                                    <span className="statusAndamento">
                                                        {documento.status || documento.statusDocumento || "Em Andamento"}
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="acoesBotoes">
                                                        <Link to="/ModalComentarioCliente" className="btnComentar">
                                                            <img src={Comentario} alt="Comentar" />
                                                        </Link>
                                                        <button className="btnEditar">
                                                            <img src={Editar} alt="Editar" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
>>>>>>> 06ffcc351e5d9a097b9ef3149e2d1ab9f2dbcad5
                    </section>
                </section>
            </main>
        </div>
    );
}
