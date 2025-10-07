import "./Lixeira.css"
import MenuLateral from "../../componentes/menuLateral/MenuLateral"
import Cabecalho from "../../componentes/cabecalho/Cabecalho"

import Pdf from "../../assets/img/PDF.png"
import Restaurar from "../../assets/img/Restaurar.svg"
import Excluir from "../../assets/img/Delete.png"

export default function Lixeira() {
    return (
        <div className="containerGeral'">
            <MenuLateral />
            <main className="conteudoPrincipal">
                <section className="areaTrabalho">
                    <Cabecalho />

                    <div className="cardInf">
                        <div className="cardDocumento">
                            <img src={Pdf} alt="Icone de Pdf" />
                            <div className="cardInformacoesLixeira">
                                <p>Relatório de Requisitos Ifood</p>
                            </div>

                            <div className="cardAcoesLixeira">
                                <div className="lixeiraExcluir">
                                    <img src={Restaurar} alt="Restaurar" />
                                    <img src={Excluir} alt="Excluir" />
                                </div>
                                <p>Excluído em:<span>Data</span></p>
                                <p>Por: <span>Func Responsável</span></p>
                            </div>
                        </div>
                        <p className="infHorarioCard">Horário de Exclusão: <span>Horário</span></p>
                    </div>
                </section>
            </main>
        </div>
    )
}