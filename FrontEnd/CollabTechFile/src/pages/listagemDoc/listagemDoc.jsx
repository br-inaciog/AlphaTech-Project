import "./ListagemDoc.css"
import MenuLateral from "../../componentes/menuLateral/MenuLateral"
import Lupa from "../../assets/img/Lupa.png"


export default function ListagemDoc() {
    return (
        <div className="containerGeralListagem">
            <MenuLateral />
            <main className="conteudoPrincipal">
                <section className="areaTrabalho">
                    <nav className="cabecalho">
                        <div className="grupoPesquisa">
                            <img src={Lupa} alt="Imagem Lupa" />
                            <label>Pesquisar...</label>
                            <input type="search" />
                        </div>
                    </nav>
                    teste
                </section>
            </main>

        </div>
    )
}