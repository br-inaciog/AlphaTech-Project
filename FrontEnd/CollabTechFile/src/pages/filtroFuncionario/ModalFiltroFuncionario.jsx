import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './ModalFiltroFuncionario.css';
import modalVoltar from '../../assets/img/Voltar.svg';

export default function ModalFiltroFuncionario({ onClose, aberto = true, empresas = [], onAplicarFiltros }) {
    const [filtros, setFiltros] = useState({
        empresa: '',
        nome: ''
    });

    if (!aberto) return null;

    const aoClicarFora = (e) => {
        if (e.target.classList.contains("modalSobreposicao")) {
            onClose();
        }
    };

    const handleInputChange = (campo, valor) => {
        setFiltros(prev => ({
            ...prev,
            [campo]: valor
        }));
    };

    const aplicarFiltros = (e) => {
        e.preventDefault();
        if (onAplicarFiltros) {
            onAplicarFiltros(filtros);
        }
    };

    const limparFiltros = () => {
        setFiltros({
            empresa: '',
            nome: ''
        });
    };

    return ReactDOM.createPortal(
        <div className="modalSobreposicao" onClick={aoClicarFora}>
            <div className="modalContainer">
                <div className="modalHeader">
                    <span className="modalVoltar" onClick={onClose}>
                        <img src={modalVoltar} alt="" />
                    </span>
                    <h2 className="modalTitulo">Filtrar Funcionários</h2>
                </div>
                <hr className="modalDivisor" />
                <form className="modalForm" onSubmit={aplicarFiltros}>
                    <div className="modalRow">
                        <div className="modalField">
                            <label className="modalLabel">Empresa</label>
                            <select 
                                className="modalInput"
                                value={filtros.empresa}
                                onChange={(e) => handleInputChange('empresa', e.target.value)}
                            >
                                <option value="">Selecione uma empresa</option>
                                {empresas.map(empresa => (
                                    <option key={empresa.idEmpresa} value={empresa.nome}>
                                        {empresa.nome}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="modalField">
                            <label className="modalLabel">Nome do Funcionário</label>
                            <input 
                                className="modalInput" 
                                type="text" 
                                placeholder="Digite o nome do funcionário"
                                value={filtros.nome}
                                onChange={(e) => handleInputChange('nome', e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="modalAcoes" style={{marginTop: 24, display: 'flex', gap: '10px', justifyContent: 'flex-end'}}>
                        <button 
                            type="button"
                            onClick={limparFiltros}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#6c757d',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}
                        >
                            Limpar
                        </button>
                        <button 
                            type="submit"
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#001f3f',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}
                        >
                            Aplicar Filtros
                        </button>
                    </div>
                </form>
            </div>
        </div>,
        document.body
    );
}