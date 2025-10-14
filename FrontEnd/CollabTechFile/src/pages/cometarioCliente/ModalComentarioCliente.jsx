import React, { useState } from "react";
import "./ModalComentarioCliente.css";
import voltar from "../../assets/img/Voltar.svg";
import { Link } from "react-router";

const ModalComentarioCliente = ({ nomeDocumento = "Nome do Documento", onCancel, onPublish }) => {
  const [comentario, setComentario] = useState("");

  return (
    <div className="modal-comentario-outer">
      <div className="modal-comentario-container">
        
        <div className="modalComentarioHeader">
          <Link
          to="/docAndamentoClie"
            className="modalComentarioVoltar" 
            onClick={onCancel}
            aria-label="Voltar"
          >
            <img src={voltar} alt="" />

          </Link>
          <h2 className="modalComentarioTitulo">
            Comentário
          </h2>
          <div style={{ width: "40px" }} />
        </div>

        
        <div className="modalCometarioDoc">
          {nomeDocumento}
        </div>

        
        <textarea
          className="modalComentarioTexto"
          placeholder="Digite seu comentário..."
          value={comentario}
          onChange={e => setComentario(e.target.value)}
        />

        
        <div className="modalComentarioButtons">
          <button
            className="modalComentarioCancelar"
            onClick={onCancel}
          >
            Cancelar
          </button>
          <button
            className="modalComentarioPublicar"
            onClick={() => onPublish(comentario)}
            disabled={!comentario.trim()}
          >
            Publicar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalComentarioCliente;