import "./ListagemDoc.css"

import MenuLateral from "../../componentes/menuLateral/MenuLateral"
import Lupa from "../../assets/img/Lupa.png"
import User from "../../assets/img/User.png"
import Lua from "../../assets/img/Lua.png"
import Seta from "../../assets/img/Seta.png"
import Lixeira from "../../assets/img/Lixeira.png"


export default function ListagemDoc() {
    return (
        <div className="containerGeralListagem">
            <MenuLateral />
            <main className="conteudoPrincipal">
                <section className="areaTrabalho">
                    <nav className="cabecalho">
                        <div className="grupoPesquisa">
                            <input type="search" />
                            <label>Pesquisar...</label>
                            <img src={Lupa} alt="Imagem Lupa" />
                        </div>

                        <div className="infCabecalho">
                            <div className="infUser">
                                <img src={User} alt="Usuário Img" />
                                <p>Cliente</p>
                            </div>
                            <img src={Lua} alt="Lua modo claro" />
                        </div>

                    </nav>
                    <div className="setaImg">
                        <img src={Seta} alt="Seta" />
                    </div>

                    <div className="botaoFiltraLixeira">
                        <div className="botaoFiltrar">
                            <button>
                                <p>Filtrar</p>
                            </button>
                        </div>

                        <div className="botaoLixeiraList">
                            <button>
                                <img src={Lixeira} alt="Lixeira" />
                                <p>Excluidos</p>
                            </button>
                        </div>
                    </div>


                </section>
            </main>

        </div>
    )
}