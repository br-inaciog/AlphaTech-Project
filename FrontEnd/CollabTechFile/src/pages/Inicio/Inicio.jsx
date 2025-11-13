import { useEffect, useState } from 'react';
import Swal from "sweetalert2";
import api from "../../services/Service";
import './Inicio.css';
import MenuLateral from '../../components/menuLateral/MenuLateral';
import Usuario from '../../assets/img/User.png';
import Adicionar from '../../assets/img/Adicionar.svg';
import { useNavigate } from "react-router-dom";
// import Adicionar from '../../assets/img/Adicionar.png';
import { Link } from 'react-router';

export default function Inicio() {
    const [listaCliente, setListaCliente] = useState([]);
    const [clienteFiltrado, setClienteFiltrado] = useState([]);
    const [nomeArquivo, setNomeArquivo] = useState("");
    const [nomeDoc, setNomeDoc] = useState("");
    const [pdf, setPdf] = useState("");
    const [dataDoc, setDataDoc] = useState("");
    const [destinatarioDoc, setDestinatarioDoc] = useState("");
    const [pendentes, setPendentes] = useState([]);
    const [assinados, setAssinados] = useState([]);
    const [finalizados, setFinalizados] = useState([]);
    const navigate = useNavigate();

    async function listarDocumentosPorStatus() {
        try {
            const resposta = await api.get("Documentos");
            const docs = resposta.data;

            setPendentes(docs.filter(d => d.status === false));
            setAssinados(docs.filter(d => d.assinadoEm !== null));
            setFinalizados(docs.filter(d => d.status === true));
        } catch (error) {
            console.log("Erro ao buscar documentos:", error);
        }
    }

    function alertar(icone, mensagem) {
        const Toast = Swal.mixin({
            theme: 'dark',
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
        });
        Toast.fire({ icon: icone, title: mensagem });
    }

    function mostrarNomeArquivo(e) {
        const file = e.target.files[0];
        if (file) {
            if (file.type !== "application/pdf") {
                alertar("error", "Apenas arquivos PDF são permitidos!");
                e.target.value = "";
                setPdf("");
                setNomeArquivo("");
                return;
            }
            setNomeArquivo(file.name);
            setPdf(file);
        } else {
            setNomeArquivo("");
        }
    }

        async function listarCliente() {
            try {
                const resposta = await api.get("usuario");
                setListaCliente(resposta.data);

                const apenasClientes = resposta.data.filter(u => u.idTipoUsuario === 3);
                setClienteFiltrado(apenasClientes);
            } catch (error) {
                console.log("Erro ao buscar clientes:", error);
            }
        }

    async function cadastrarDoc(e) {
        e.preventDefault();

        if (!nomeDoc.trim() || !pdf || !destinatarioDoc || !dataDoc) {
            alertar("warning", "Preencha todos os campos antes de enviar!");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("nomeDocumento", nomeDoc);
            formData.append("destinatario", destinatarioDoc);
            formData.append("prazo", dataDoc);
            formData.append("arquivo", pdf);

            await api.post("Documentos", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            alertar("success", "Documento enviado com sucesso!");
            setNomeDoc("");
            setPdf("");
            setNomeArquivo("");
            setDestinatarioDoc("");
            setDataDoc("");
            listarDocumentosPorStatus();
        } catch (error) {
            alertar("error", "Erro ao enviar documento!");
            console.error(error);
        }
    }

    useEffect(() => {
        listarCliente();
        listarDocumentosPorStatus()});
    useEffect(() => {
        listarCliente();
    }, []);

    return (
        <div className="containerGeral">
            <MenuLateral />
            <main className="conteudoPrincipal">
                <section className="areaTrabalho">
                    <div className="cabecalhoArea">
                        <button className="btnArea">Área de Trabalho</button>
                        <div className="usuarioArea">
                            <img src={Usuario} alt="" />
                            Funcionário                            <span className="iconMoon"></span>
                        </div>
                    </div>

                    <div className="statusDocumentos">
                        <div 
                            className="statusCard"
                            onClick={() => navigate("/Listagem?status=pendente")}
                            style={{ cursor: "pointer" }}
                        >
                            <span className="statusNum">{pendentes.length}</span>
                            <span className="statusLabel">Pendentes</span>
                        </div>

                        <div 
                            className="statusCard"
                            onClick={() => navigate("/Listagem?status=assinado")}
                            style={{ cursor: "pointer" }}
                        >
                            <span className="statusNum">{assinados.length}</span>
                            <span className="statusLabel">Assinados</span>
                        </div>

                        <div 
                            className="statusCard"
                            onClick={() => navigate("/Listagem?status=finalizado")}
                            style={{ cursor: "pointer" }}
                        >
                            <span className="statusNum">{finalizados.length}</span>
                            <span className="statusLabel">Finalizados</span>
                        </div>
                    </div>

                    <div className="proximaEntregas">
                        <h3>PRÓXIMAS ENTREGAS</h3>
                        <div className="entregaCard entregaVermelho">
                            <span className="entregaNum">15</span>
                            <span className="entrega-label">Documentação Hershey's</span>
                        </div>
                        <div className="entregaCard entregaMarrom">
                            <span className="entregaNum">20</span>
                            <span className="entrega-label">Projeto Pfizer</span>
                        </div>
                        <div className="entregaCard entregaBege">
                            <span className="entregaNum">28</span>
                            <span className="entrega-label">Documentação Johnson&Johnsons</span>
                        </div>
                    </div>

                    <article className="documentosActions">
                        <form action="" className="docAction">
                            <h4>Anexar/Criar Documentação</h4>
                            <div className="docActionFlex">
                                <input
                                    type="text"
                                    placeholder="Nome do Arquivo"
                                    className="inputArquivo"
                                />

                                <input
                                    type="file"
                                    id="arquivoInput"
                                    className="arquivoInput"
                                    style={{ display: "none" }}
                                />

                                <label htmlFor="arquivoInput" className="labelArquivo">
                                    Anexar Documento:
                                    <img src={Adicionar} alt="Adicionar documento" className="imgEscanear" />
                                </label>

                                <div className="botaoSelectRemententeInicio">
                                    <p>Remetente:</p>
                                    <select>
                                        <option disabled selected>Destinatário</option>
                                        {clienteFiltrado.length > 0 ? (
                                            clienteFiltrado.map((usuario) => (
                                                <option key={usuario.idUsuario} value={usuario.idUsuario}>
                                                    {usuario.nome}
                                                </option>
                                            ))
                                        ) : (
                                            <option disabled>Nenhum cliente encontrado</option>
                                        )}
                                    </select>
                                </div>

                                <div className="prazoEntregaInicio">
                                    <label>Prazo de Entrega:</label>
                                    <input type="date" />
                                </div>

                                <button className="botaoEnviarDoc">Enviar</button>
                            </div>
                        </form>
                    </article>
                </section>
            </main>
        </div>
    );
}