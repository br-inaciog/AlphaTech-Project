import "./Lixeira.css"
import MenuLateral from "../../componentes/menuLateral/MenuLateral"
import Cabecalho from "../../componentes/cabecalho/Cabecalho"

import Pdf from "../../assets/img/PDF.png"
import Restaurar from "../../assets/img/Restaurar.svg"
import Excluir from "../../assets/img/Delete.png"

export default function Lixeira() {
    return (
        <div className="containerGeral">
            <MenuLateral />
            <main className="conteudoPrincipal">
                <section className="areaTrabalho">
                    <Cabecalho />
                    <h1 className="doc">Documentos</h1>

                    <div className="cardInf">
                        <div className="cardDocumento">
                            <div className="cardInformacoesLixeira">
                                <img src={Pdf} alt="Icone de Pdf" />
                                <p>Relatório de Requisitos Ifood</p>
                            </div>

                            <div className="cardAcoesLixeira">
                                <div className="lixeiraExcluir">
                                    <img src={Restaurar} alt="Restaurar" />
                                    <img src={Excluir} alt="Excluir" />
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
