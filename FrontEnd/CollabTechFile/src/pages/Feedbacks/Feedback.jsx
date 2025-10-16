import "./Feedback.css";

import Lixeira from "../../assets/img/Delete.svg";
import MenuLateral from "../../components/menuLateral/MenuLateral";
import Cabecalho from "../../components/cabecalho/Cabecalho";

const listaFeedbacks = [
    {
        nome: "Tirulipa Macedo",
        data: "12/04/2025",
        mensagem:
            "Gostaria que tivesse um sistema de teleporte para a empresa, talvez seja útil. Enfim, o site está ótimo tanto em design e funcionalidade",
    },
    {
        nome: "Tirulipa Macedo",
        data: "04/07/2025",
        mensagem:
            "Gostaria que tivesse um sistema de teleporte para a empresa, talvez seja útil. Enfim, o site está ótimo tanto em design e funcionalidade",
    },
    {
        nome: "Tirulipa Macedo",
        data: "18/12/2025",
        mensagem:
            "Gostaria que tivesse um sistema de teleporte para a empresa, talvez seja útil. Enfim, o site está ótimo tanto em design e funcionalidade",
    },
];

export default function Feedback() {
    return (
        <div className="containerGeral">
            <MenuLateral />
            <main className="conteudoPrincipal">
                <section className="areaTrabalho">
                    <Cabecalho />

                    <section className="docAndamento">
                        <div className="titulo">
                            <h1>FeedBack</h1>
                        </div>

                        <div className="listaFeedbacks">
                            {listaFeedbacks.map((feedback, card) => (
                                <div key={card} className="cardFeedback">
                                    <div className="cabecalhoFeedback">
                                        <span className="nomeFeedback">{feedback.nome}</span>
                                        <div></div>
                                        <span className="dataFeedback">{feedback.data}</span>
                                        <span className="iconeLixeira">
                                            <img
                                                src={Lixeira}
                                                alt="Excluir"
                                                className="lixeiraImg"
                                            />
                                        </span>
                                    </div>
                                    <p className="mensagemFeedback">{feedback.mensagem}</p>
                                    <hr className="linhaFeedback" />
                                </div>
                            ))}
                        </div>
                    </section>
                </section>
            </main>
        </div>
    );
}