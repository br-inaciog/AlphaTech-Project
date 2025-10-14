import './Inicio.css';
import MenuLateral from '../../componentes/menuLateral/MenuLateral';
import Usuario from '../../assets/img/User.png';
import arquivo from '../../assets/img/Arquivo.png';
import Escaner from '../../assets/img/Escaner.png';
import Anexar from '../../assets/img/Upload.svg'

export default function Inicio() {
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
                            <img src={arquivo} alt="" className='imgArquivo' /> 
                            <div className='divAnexar'>
                                <label className='arquivoLabel'>
                                    <h4>Anexar Documentação</h4>
                                    <i><img src={Anexar} alt="Ícone de upload" /></i>
                                    <input
                                        type="file"
                                        className='arquivoInput'
                                        onChange={(e) => setImagem(e.target.files[0])}
                                    />
                                    <input type="text" placeholder="Nome do Arquivo" className="inputArquivo" />
                                </label>
                            </div>
                            <button>Enviar</button>
                        </form>

                        <div action="" className="docAction">
                            <img src={Escaner} alt="" className='imgEscanear' />

                            <div className='divEscanear'>
                                <h4>Digitalizar Documento</h4>
                                <button className="iconDigitalizar">
                                    <img src={Escaner} alt="" className='iconUpload' />
                                    Escanear Documento
                                </button>
                                <input type="text" placeholder="Nome do Arquivo" className="inputArquivo" />
                            </div>
                        </div>

                    </article>
                </section>
            </main>
        </div>
    )
}