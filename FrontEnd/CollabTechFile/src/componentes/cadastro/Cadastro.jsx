import "./Cadastro.css";
import { IMaskInput } from 'react-imask';

export default function Cadastro(props) {
    return (
        <section className="conteudo">

            <div className="titulo">
                <h1>{props.titulo}</h1>
            </div>

            <form onSubmit={props.funcCadastro} className="formulario">
                <div className="campo">
                    <label>{props.campo1}</label>
                    <input
                        type="text"
                        value={props.valorInput1}
                        onChange={(e) => props.setValorInput1(e.target.value)} />
                </div>

                <div className="campo" style={{ display: props.visibilidade_campoCNPJ }}>
                    <label for="cnpj">CNPJ</label>
                    <IMaskInput
                        mask="00.000.000/0000-00"
                        value={props.valorInputCNPJ}
                        onChange={(e) => props.setValorInputCNPJ(e.target.value)}
                    />
                </div>

                <div className="campo" style={{ display: props.visibilidade_campo2 }}>
                    <label>{props.campo2}</label>
                    <input
                        type={props.tpInput}
                        value={props.valorInput2}
                        onChange={(e) => props.setValorInput2(e.target.value)}
                    />
                </div>

                <div className="campo" style={{ display: props.visibilidade_campo3 }}>
                    <label>{props.campo3}</label>
                    <select
                        name="Tipo Evento"
                        value={props.valorTipoUsuario}
                        onChange={(e) => props.setValorTipoUsuario(e.target.value)}
                    >
                        <option selected disabled value="">
                            Selecionar Tipo Usuário
                        </option>
                        {props.lista &&
                            props.lista.length > 0 &&
                            props.lista.map((item) =>
                                <option value={item.idTipoUsuario}>{item.tituloTipoUsuario}</option>
                            )}
                    </select>
                </div>

                <div className="campo" style={{ display: props.visibilidade_campo4 }}>
                    <label>{props.campo4}</label>
                    <select className="selects"
                        name="Empresa"
                        value={props.valorEmpresa}
                        onChange={(e) => props.setValorEmpresa(e.target.value)}
                    >
                        <option value="" disabled>Empresa</option>
                        <option value="">Pfizer</option>
                        <option value="">Merck </option>
                        <option value="">Hershey's </option>
                        <option value="">Johnson&Johnsons</option>


                    </select>
                </div>

                <div className="campo" style={{ display: props.visibilidade_campo5 }}>
                    <label>{props.campo5}</label>
                    <input
                        type="password"
                        placeholder="Mínimo de 8 caracteres com números e símbolos"
                        value={props.valorInput3}
                        onChange={(e) => props.setValorInput3(e.target.value)}
                    />
                </div>

                <div className="campo" style={{ display: props.visibilidade_campo6 }}>
                    <label>{props.campo6}</label>
                    <input
                        type="password"
                        value={props.valorInput4}
                        onChange={(e) => props.setValorInput4(e.target.value)}
                    />
                </div>

                <button type="submit" className="cadastrar" onclick="return validarSenha()">
                    Cadastrar
                </button>
            </form>
        </section>
    );
}
