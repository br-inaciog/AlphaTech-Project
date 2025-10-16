import "./Lixeira.css"
import MenuLateral from "../../components/menuLateral/MenuLateral"
import Cabecalho from "../../components/cabecalho/Cabecalho"

import Pdf from "../../assets/img/PDF.png"
import Restaurar from "../../assets/img/Restaurar.svg"
import Excluir from "../../assets/img/Delete.svg"

export default function Lixeira() {
    return (
        <div className="containerGeral">
            <MenuLateral />
            <main className="conteudoPrincipal">
                <section className="areaTrabalho">
                    <Cabecalho />

                    <div className="titulo">
                        <h1>Lixeira</h1>
                    </div>

                    <div className="cardInf">
                        <div className="cardDocumento">
                            <div className="cardInformacoesLixeira">
                                <img src={Pdf} alt="Icone de Pdf" />
                                <p>Relatório de Requisitos Ifood</p>
                            </div>

                            <div className="cardAcoesLixeira">
                                <div className="lixeiraExcluir">
                                    <img className="lixeiraIco" src={Restaurar} alt="Restaurar" />
                                    <img  src={Excluir} alt="Excluir" />
                                </div>

                                <div className="info">
                                    <p className="infHorarioCard">
                                        Excluído em: <span>25/12/2025</span> <span>12h04</span>
                                    </p>
                                    <p>Por: <span>Bolsonarah</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
