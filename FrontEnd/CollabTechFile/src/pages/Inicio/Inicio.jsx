import './Inicio.css';
import MenuLateral from '../../components/menuLateral/MenuLateral';
import Usuario from '../../assets/img/User.png';
<<<<<<< HEAD
=======
import arquivo from '../../assets/img/Arquivo.png';
<<<<<<< HEAD
=======
>>>>>>> 3107e6deda905d8ac4742559aa056f9b71b2bedc
import Adicionar from '../../assets/img/Adicionar.png'
import { Link } from 'react-router';
<<<<<<< HEAD
import { useEffect, useState } from 'react';
import api from "../../Services/Service";
=======
// import Escaner from '../../assets/img/Escaner.png'
>>>>>>> 83f8e65fd41ffc1d494fa59ebe079d06b5107cb3
>>>>>>> 3107e6deda905d8ac4742559aa056f9b71b2bedc

export default function Inicio() {
    const [listaCliente, setListaCliente] = useState([]);
    const [clienteFiltrado, setClienteFiltrado] = useState([]);

    async function listarCliente() {
        try {
            const resposta = await api.get("usuario")
            setListaCliente(resposta.data);

            const apenasClientes = resposta.data.filter(u => u.idTipoUsuario === 3);
            setClienteFiltrado(apenasClientes);
        } catch (error) {
            console.log("Erro ao buscar clientes:", error);
        }
    }

    useEffect(() => {
        listarCliente();
    }, [])

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
                        <h3>PROXIMAS ENTREGAS</h3>
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
<<<<<<< HEAD
                            <h4>Anexar/Criar Documentação</h4>
                            <div className='docActionFlex'>
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
=======
                            <img src={arquivo} alt="Imagem Arquivo" className='imgArquivo' />
<<<<<<< HEAD
                                <div className='divAnexar'>
                                    <h4>Anexar Documentação</h4>
                                    <label className='arquivoLabel'>
                                        Anexar Documento
                                        <input
                                            type="file"
                                            className='arquivoInput'
                                        />
                                    </label>
=======
                            <div className='divAnexar'>
                                <h4>Anexar Documentação</h4>
                                <label className='arquivoLabel'>
                                    <img src={Anexar} alt="Ícone de upload" />
                                    Anexar Documento
                                    <input
                                        type="file"
                                        className='arquivoInput'
                                    />
>>>>>>> 3107e6deda905d8ac4742559aa056f9b71b2bedc
                                </label>

                                <div className="botaoSelectRemententeInicio">
                                    <p>Rementente:</p>
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
<<<<<<< HEAD
=======

                        <form action="" className="docAction">
                            <img src={Adicionar} alt="" className='imgEscanear' />
                            <div className='docActionDisplay'>
                                <div className='divEscanear'>
                                    <h4>Criar Documento</h4>
>>>>>>> 83f8e65fd41ffc1d494fa59ebe079d06b5107cb3
                                    <input type="text" placeholder="Nome do Arquivo" className="inputArquivo" />
                                    <Link className='botaoEnviarDoc' to="/docAndamentoFunc">
                                        Enviar
                                    </Link>
                                </div>
                            </div>
                        </form>

                        {/* <form action="" className="docAction">
                            <img src={Escaner} alt="" className='imgEscanear' />
                            <div className='docActionDisplay'>
                                <div className='divEscanear'>
                                    <h4>Digitalizar Documento</h4>
                                    <label className='arquivoLabel'>
                                        <img src={Anexar} alt="Ícone de upload" />
                                        Escanear Documento
                                        <input
                                            type="file"
                                            className='arquivoInput'
                                        />
                                    </label>
                                    <input type="text" placeholder="Nome do Arquivo" className="inputArquivo" />
                                    <button className='botaoEnviarDoc'>Enviar</button>
                                </div>
                            </div>
                        </form> */}

>>>>>>> 3107e6deda905d8ac4742559aa056f9b71b2bedc
                    </article>
                </section>
            </main>
        </div >
    )
}