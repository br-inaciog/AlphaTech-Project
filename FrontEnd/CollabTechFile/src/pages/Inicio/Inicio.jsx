import { useEffect, useState } from 'react';
import Swal from "sweetalert2";
<<<<<<< HEAD
import api from "../../Services/Service";
import './Inicio.css';
import MenuLateral from '../../components/menuLateral/MenuLateral';
import Usuario from '../../assets/img/User.png';
import Adicionar from '../../assets/img/Adicionar.png';
import secureLocalStorage from 'react-secure-storage';
import { Link } from 'react-router';
import { useNavigate } from "react-router-dom";
import { userDecodeToken } from '../../auth/Auth';

export default function Inicio() {
    const [listaEmpresa, setListaEmpresa] = useState([]);
    const [empresaRemetente, setEmpresaRemetente] = useState([]);

    const [nomeArquivo, setNomeArquivo] = useState("");
    const [nomeDoc, setNomeDoc] = useState("")
    const [pdf, setPdf] = useState("")
    const [prazoDoc, setprazoDoc] = useState("")
    const [empresaDoc, setempresaDoc] = useState("")
    const [novoStatus, setNovoStatus] = useState("Pendente")
    const [criadoEm, setCriadoEm] = useState(() => {
        const agora = new Date();
        const data = agora.toISOString().slice(0, 19).replace("T", " ");
        return data;
    });
    const [versaoInicial, setVersaoInicial] = useState(1);
    const [statusDoc, setStatusDoc] = useState(1)

    const [pendentes, setPendentes] = useState([]);
    const [assinados, setAssinados] = useState([]);
    const [finalizados, setFinalizados] = useState([]);
    const navigate = useNavigate();


    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const token = secureLocalStorage.getItem("token");

        const dadosUsuario = userDecodeToken(token);

        setUsuario(dadosUsuario);
    }, []);


    function alertar(icone, mensagem) {
        const Toast = Swal.mixin({
            theme: 'dark',
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: icone,
            title: mensagem
        });
    }

=======
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

>>>>>>> b4057c42bb6d03e0812a9307fa0abab8c69125f3
    async function listarDocumentosPorStatus() {
        try {
            const resposta = await api.get("Documentos");
            const docs = resposta.data;
<<<<<<< HEAD

            setPendentes(docs.filter(d => d.status === false));
            setAssinados(docs.filter(d => d.assinadoEm !== null));
            setFinalizados(docs.filter(d => d.status === true));
        } catch (error) {
            console.log("Erro ao buscar documentos:", error);
        }
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

    async function listarEmpresa() {
        try {
            const resposta = await api.get("empresa");
            setListaEmpresa(resposta.data);
            console.log(resposta.data);

=======

            setPendentes(docs.filter(d => d.status === false));
            setAssinados(docs.filter(d => d.assinadoEm !== null));
            setFinalizados(docs.filter(d => d.status === true));
>>>>>>> b4057c42bb6d03e0812a9307fa0abab8c69125f3
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


    async function cadastrarDoc(e) {
        e.preventDefault();

        const prazo = new Date(prazoDoc);
        const agora = new Date();

        if (prazo <= agora) {
            alertar("warning", "A data de entrega deve ser no Futuro!");
            return;
        }

        // valida campos
        if (!nomeDoc.trim() || !nomeArquivo.trim() || !empresaDoc || !prazoDoc) {
            alertar("warning", "Preencha todos os campos antes de enviar!");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("nomeDocumento", nomeDoc);
            formData.append("empresa", empresaDoc);
            formData.append("prazo", prazoDoc);
            formData.append("status", novoStatus);
            formData.append("criadoEm", criadoEm);
            formData.append("versaoInicial", versaoInicial);
            formData.append("statusDoc", statusDoc);

            await api.post("Documentos/upload-ocr", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            alertar("success", "Documento enviado com sucesso!");
            setNomeDoc("");
            setempresaDoc("");
            setprazoDoc("");

        } catch (error) {
            alertar("error", "Erro ao enviar documento!");
            console.error(error);
        }
    }


    useEffect(() => {
<<<<<<< HEAD
        listarEmpresa();
=======
        listarCliente();
        listarDocumentosPorStatus()});
    useEffect(() => {
        listarCliente();
>>>>>>> b4057c42bb6d03e0812a9307fa0abab8c69125f3
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
<<<<<<< HEAD
                            {usuario ? (
                                <div className="infos-usuario">
                                    <p className="usuario-nome">{usuario.nome} - {usuario.tipoUsuario}</p>
                                    <p className="usuario-tipo"></p>
                                </div>
                            ) : (
                                <p>Usuário não encontrado.</p>
                            )}
                            <span className="iconMoon"></span>
=======
                            Funcionário                            <span className="iconMoon"></span>
>>>>>>> b4057c42bb6d03e0812a9307fa0abab8c69125f3
                        </div>
                    </div>

                    <div className="statusDocumentos">
<<<<<<< HEAD
                        <div
=======
                        <div 
>>>>>>> b4057c42bb6d03e0812a9307fa0abab8c69125f3
                            className="statusCard"
                            onClick={() => navigate("/Listagem?status=pendente")}
                            style={{ cursor: "pointer" }}
                        >
                            <span className="statusNum">{pendentes.length}</span>
                            <span className="statusLabel">Pendentes</span>
                        </div>

<<<<<<< HEAD
                        <div
=======
                        <div 
>>>>>>> b4057c42bb6d03e0812a9307fa0abab8c69125f3
                            className="statusCard"
                            onClick={() => navigate("/Listagem?status=assinado")}
                            style={{ cursor: "pointer" }}
                        >
                            <span className="statusNum">{assinados.length}</span>
                            <span className="statusLabel">Assinados</span>
                        </div>

<<<<<<< HEAD
                        <div
=======
                        <div 
>>>>>>> b4057c42bb6d03e0812a9307fa0abab8c69125f3
                            className="statusCard"
                            onClick={() => navigate("/Listagem?status=finalizado")}
                            style={{ cursor: "pointer" }}
                        >
                            <span className="statusNum">{finalizados.length}</span>
                            <span className="statusLabel">Finalizados</span>
                        </div>
                    </div>

                    <div className="proximaEntregas">
<<<<<<< HEAD
                        <h3>Próximas Entregas</h3>
=======
                        <h3>PRÓXIMAS ENTREGAS</h3>
>>>>>>> b4057c42bb6d03e0812a9307fa0abab8c69125f3
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
<<<<<<< HEAD
                        <div className="docAction">
                            <h4>Anexar/Criar Documentação:</h4>
                            <form onSubmit={cadastrarDoc} className="docActionFlex">
=======
                        <form action="" className="docAction">
                            <h4>Anexar/Criar Documentação</h4>
                            <div className="docActionFlex">
>>>>>>> b4057c42bb6d03e0812a9307fa0abab8c69125f3
                                <input
                                    type="text"
                                    placeholder="Nome do Arquivo"
                                    className="inputArquivo"
                                    value={nomeDoc}
                                    onChange={(e) => setNomeDoc(e.target.value)}
                                />

<<<<<<< HEAD
                                <div className="anexoContainer">
                                    <input
                                        type="file"
                                        id="arquivoInput"
                                        className="arquivoInput"
                                        style={{ display: "none" }}
                                        accept="application/pdf"
                                        onChange={mostrarNomeArquivo}
                                    />

                                    <label htmlFor="arquivoInput" className="labelArquivo">
                                        <img
                                            src={Adicionar}
                                            alt="Adicionar documento"
                                            className="imgEscanear"
                                        />
                                    </label>

                                    <input
                                        type="text"
                                        className="inputNomeArquivo"
                                        placeholder="Nenhum arquivo selecionado"
                                        value={nomeArquivo}
                                        disabled
                                    />
                                </div>

                                <div className="botaoSelectRemententeInicio">
                                    <p>Empresa:</p>
                                    <select
                                        value={empresaDoc}
                                        onChange={(e) => setempresaDoc(e.target.value)}
                                    >
                                        <option value="" disabled>Empresa</option>
                                        {listaEmpresa.length > 0 ? (
                                            listaEmpresa.map(empresa => (
                                                <option key={empresa.idEmpresa} value={empresa.idEmpresa}>
                                                    {empresa.nome}
=======
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
>>>>>>> b4057c42bb6d03e0812a9307fa0abab8c69125f3
                                                </option>
                                            ))
                                        ) : (
                                            <option disabled>Versões</option>
                                        )}
                                    </select>
                                </div>

                                <div className="prazoEntregaInicio">
                                    <label>Prazo de Entrega:</label>
                                    <input
                                        type="date"
                                        value={prazoDoc}
                                        onChange={(e) => setprazoDoc(e.target.value)}
                                    />
                                </div>

<<<<<<< HEAD
                                <button type="submit" className="botaoEnviarDoc">
                                    Enviar
                                </button>
                            </form>
                        </div>
=======
                                <button className="botaoEnviarDoc">Enviar</button>
                            </div>
                        </form>
>>>>>>> b4057c42bb6d03e0812a9307fa0abab8c69125f3
                    </article>
                </section>
            </main>
        </div>
    );
<<<<<<< HEAD
}
=======
}
>>>>>>> b4057c42bb6d03e0812a9307fa0abab8c69125f3
