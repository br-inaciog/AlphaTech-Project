import './Inicio.css';
import MenuLateral from '../../components/menuLateral/MenuLateral';
import Usuario from '../../assets/img/User.png';
import Adicionar from '../../assets/img/Adicionar.png';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import api from "../../Services/Service";

export default function Inicio() {
    const [listaCliente, setListaCliente] = useState([]);
    const [clienteFiltrado, setClienteFiltrado] = useState([]);

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
                            Funcionário
                            <span className="iconMoon"></span>
                        </div>
                    </div>

                    <div className="statusDocumentos">
                        <div className="statusCard">
                            <span className="statusNum">6</span>
                            <span className="statusLabel">Pendentes</span>
                        </div>
                        <div className="statusCard">
                            <span className="statusNum">20</span>
                            <span className="statusLabel">Assinados</span>
                        </div>
                        <div className="statusCard">
                            <span className="statusNum">9</span>
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
