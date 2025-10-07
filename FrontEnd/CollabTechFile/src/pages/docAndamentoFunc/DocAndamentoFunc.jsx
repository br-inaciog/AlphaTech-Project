import "./docAndamentoFunc.css"
import MenuLateral from "../../componentes/menuLateral/MenuLateral"
import Cabecalho from "../../componentes/cabecalho/Cabecalho"

import Adicionar from "../../assets/img/Adicionar.svg"

export default function DocAndamentoFunc() {
    return (
        <div className="containerGeral'">
            <MenuLateral />
            <main className="conteudoPrincipal">
                <section className="areaTrabalho">
                    <Cabecalho />

                    <section className="docAndamento">
                        <h1>Nome documento</h1>

                        <div className="documento">
                            <form action="">
                                <div>
                                    <div className="tituloRN">
                                        <h2>Regras de Negócio</h2>
                                        <img src={Adicionar} alt="Botao De Adicionar" />
                                    </div>

                                    <section className="RNlista">
                                        <p>RN01: <span>RN01 listadad</span></p>
                                    </section>
                                </div>
                            </form>
                        </div>
                    </section>
                </section>
            </main>
        </div>
    )
}