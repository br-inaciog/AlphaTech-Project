import "./docFinalizadoFunc.css"

import MenuLateral from "../../components/menuLateral/MenuLateral"
import Cabecalho from "../../components/cabecalho/Cabecalho"

import Comentario from "../../assets/img/Assinatura.png"
import { useEffect, useState } from "react"
import api from "../../services/Service"

export default function DocFinalizadoFunc() {

    const [documentos, setDocumentos] = useState([]);

    useEffect(() => {
        carregarDocumentos();
    }, [filtroSelecionado]);

    async function carregarDocumentos() {
        try {
            if(filtroSelecionado == "Finalizados" || filtroSelecionado === "Todos"){
                const resposta = await api.get("documentos?status=Finalizado");
                setDocumentos(resposta.data);
            } else{
                setDocumentos([]);
            }
        } catch (error) {
            console.log("Erro ao buscar documentos finalizados", erro);
        }
    }
    
    return (
        <div className="containerGeral'">
            <MenuLateral />
            <main className="conteudoPrincipal">
                <section className="areaTrabalho">
                    <Cabecalho 
                        rota="Inicio"
                    />

                    <section className="docAndamento">
                        <div className="titulo">
                            <h1>Documento Finalizado</h1>
                        </div>

                        {documentos.length === 0 ? (
                            <p className="nenhumDoc">Nenhum documento finalizado.</p>
                        ):(
                            documentos.map((doc) => (
                                
                            <div className="documento">
                                <p className="docNome">Nome Documento</p>
                                <div className="regrasDeNegocio">
                                    <div className="tituloRN">
                                        <h2>Regras de Negócio</h2>
                                    </div>

                                    <section>
                                        {doc.regrasNegocio?.map((rn, index) =>(
                                            <div className="listaRN">
                                                <p>RN0{index + 1}: <span>{rn.documentos}</span></p>
                                            </div>
                                        ))}
                                    </section>
                                </div>


                                <div className="requisitosFuncionais">
                                    <div className="tituloRF">
                                        <h2>Requisitos Funcionais</h2>
                                    </div>

                                    <section>
                                        {doc.requisitosFuncionais?.map((rf, index) => (
                                            <div className="listaRF" key={index}>
                                                <p>RN0{index + 1}: <span>{rf.documentos}</span></p>
                                            </div>
                                        ))}
                                    </section>
                                </div>


                                <div className="requisitosNaoFuncionais">
                                    <div className="tituloRNF">
                                        <h2>Requisitos não Funcionais</h2>
                                    </div>

                                    <section>
                                        {doc.requisitosNaoFuncionais?.map((rfn, index) => (
                                            <div className="listaRF" key={index}>
                                                <p>RNF0 {index + 1}: <span>{rfn.documentos}</span></p>
                                            </div>
                                        ))}
                                    </section>
                                </div>

                                <div className="comentarioDisplay">
                                    <p>Visualizar Comentarios</p>
                                    <img src={Comentario} alt="Botão de Comentário" />
                                </div>
                            </div>
                            ))
                        )}
                    </section>
                </section>
            </main>
        </div>
    )
}