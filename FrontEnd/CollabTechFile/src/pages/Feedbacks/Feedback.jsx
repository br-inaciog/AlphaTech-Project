import "./Feedback.css";

import Lixeira from "../../assets/img/Delete.svg";
import MenuLateral from "../../components/menuLateral/MenuLateral";
import Cabecalho from "../../components/cabecalho/Cabecalho";
import api from "../../services/Service";
import { useEffect, useState } from "react";

export default function Feedback() {

    const [listagemFeedbacks, setListagemFeedbacks] = useState([]);

    async function listarFeedback() {
        try {
            const resposta = await api.get("/Feedbacks"); 
            setListagemFeedbacks(resposta.data);
            console.log(resposta.data);
        } catch (error) {
            console.error("Erro ao listar feedbacks:", error);
        }
    }

    useEffect(() => {
        listarFeedback();
    }, []);

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
                            {listagemFeedbacks.map((feedback, card) => (
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
