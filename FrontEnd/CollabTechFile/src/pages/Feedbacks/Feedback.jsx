import "./Feedback.css";

import Lixeira from "../../assets/img/Delete.svg";
import MenuLateral from "../../components/menuLateral/MenuLateral";
import Cabecalho from "../../components/cabecalho/Cabecalho";
import api from "../../Services/service";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Feedback() {

    const [listagemFeedbacks, setListagemFeedbacks] = useState([]);
    // const [exclusaoFeedbacks, setExclusaoFeedbacks] = useState([]);

    async function listarFeedback() {
        try {
            const resposta = await api.get("/Feedbacks"); 
            setListagemFeedbacks(resposta.data);
            console.log(resposta.data);
        } catch (error) {
            console.error("Erro ao listar feedbacks:", error);
        }
    }

    async function excluirFeedback(id){
        Swal.fire({
            title: "Excluir permanentemente?",
            text: "Você não poderá recuperar este feedback depois.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sim, excluir!",
            cancelButtonAriaLabel: "Cancelar",
        }).then(async (result) => {
            if(result.isConfirmed) {
                try {
                    await api.delete(`/Feedbacks/${id}`);
                    Swal.fire("FeedBack excluído com sucesso", "", "success");
                    listarFeedback();
                } catch (error) {
                    console.error("Erro ao excluir o FeedBack:", error);
                    Swal.fire("Erro!", "Não foi possível excluir o FeedBack", "error");
                }
            }
        });
    }

    useEffect(() => {
        listarFeedback();
    }, []);

    return (
        <div className="containerGeral">
            <MenuLateral />
            <main className="conteudoPrincipal">
                <section className="areaTrabalho">
                    <Cabecalho 
                        rota="Inicio"
                    />

                    <section className="docAndamento">
                        <div className="titulo">
                            <h1>Cometarios</h1>
                        </div>

                        <div className="listaFeedbacks">
                            {listagemFeedbacks.map((feedback) => (
                                <div key={feedback.id} className="cardFeedback">
                                    <div className="cabecalhoFeedback">
                                        <span className="nomeFeedback">{feedback.nome}</span>
                                        {/* <div></div> */}
                                        <span className="dataFeedback">{feedback.data}</span>
                                        <span className="iconeLixeira">
                                            <img
                                                src={Lixeira}
                                                alt="Excluir"
                                                className="lixeiraImg"
                                                onClick={() => excluirFeedback(feedback.id)}
                                                style={{cursor: "pointer"}}
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
