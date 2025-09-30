import MenuLateral from '../../componentes/menuLateral/MenuLateral';
import Anexar from '../../assets/anexar.png';
import './Inicio.css';

export default function Inicio() {
    return (
        <div className="containerGeral">
            <MenuLateral />
            <main className="conteudoPrincipal">
                <section className="areaTrabalho">
                    <div className="cabecalho-area">
                        <button className="btn-area">AREA DE TRABALHO</button>
                        <div className="usuario-area">
                            <span className="icon-user"></span>
                            JOSEMAR
                            <span className="icon-moon"></span>
                        </div>
                    </div>
                    <div className="status-documentos">
                        <div className="status-card">
                            <span className="status-num">6</span>
                            <span className="status-label">pendentes</span>
                        </div>
                        <div className="status-card">
                            <span className="status-num">20</span>
                            <span className="status-label">Assinados</span>
                        </div>
                        <div className="status-card">
                            <span className="status-num">9</span>
                            <span className="status-label">Finalizados</span>
                        </div>
                    </div>
                    <div className="proximas-entregas">
                        <h3>PROXIMAS ENTREGAS</h3>
                        <div className="entrega-card entrega-vermelho">
                            <span className="entrega-num">15</span>
                            <span className="entrega-label">Documentação Hershey's</span>
                        </div>
                        <div className="entrega-card entrega-marrom">
                            <span className="entrega-num">20</span>
                            <span className="entrega-label">Projeto Pfizer</span>
                        </div>
                        <div className="entrega-card entrega-bege">
                            <span className="entrega-num">28</span>
                            <span className="entrega-label">Documentação Johnson&Johnsons</span>
                        </div>
                    </div>
                    <div className="documentos-actions">
                        <div className="doc-action anexar">
                            <h4>Anexar Documentação</h4>
                            <img src={Anexar} alt="" />
                            <button className="icon-anexar">Anexar Arquivo</button>
                            <input type="text" placeholder="Nome do Arquivo" className="input-arquivo" />
                        </div>
                        <div className="doc-action digitalizar">
                            <h4>Digitalizar Documento</h4>
                            <button className="icon-digitalizar">Escanear Documento</button>
                            <input type="text" placeholder="Nome do Arquivo" className="input-arquivo" />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}