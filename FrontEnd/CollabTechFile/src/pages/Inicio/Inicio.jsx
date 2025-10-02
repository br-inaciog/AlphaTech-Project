import MenuLateral from '../../componentes/menuLateral/MenuLateral';
import Anexar from '../../assets/img/Upload.svg';
import Usuario from '../../assets/img/User.png';
import Lua from '../../assets/img/Lua.png';
import './Inicio.css';

export default function Inicio() {
    return (
        <div className="containerGeral">
            <MenuLateral />
            <main className="conteudoPrincipal">
                <section className="areaTrabalho">
                    <div className="cabecalhoArea">
                        <button className="btnArea">AREA DE TRABALHO</button>
                        <div className="usuarioArea">
                            <img src={Usuario} alt="" />
                            JOSEMAR
                            <span className="iconMoon"></span>
                            <img src={Lua} alt="" />
                        </div>
                    </div>
                    <div className="statusDocumentos">
                        <div className="statusCard">
                            <span className="statusNum">6</span>
                            <span className="statusLabel">pendentes</span>
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
                    <div className="documentosActions">
                        <div className="docAction anexar">
                            <h4>Anexar Documentação</h4>
                            <img src={Anexar} alt="" className='iconUpload'/>
                            <button className="iconAnexar">Anexar Arquivo</button>
                            <input type="text" placeholder="Nome do Arquivo" className="inputArquivo" />
                        </div>
                        <div className="docAction digitalizar">
                            <h4>Digitalizar Documento</h4>
                            <button className="iconDigitalizar">Escanear Documento</button>
                            <input type="text" placeholder="Nome do Arquivo" className="inputArquivo" />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}