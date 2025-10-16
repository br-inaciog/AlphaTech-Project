import "./Cadastro.css";

export default function Cadastro(props) {
    return (
        <div className="conteudo">

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

                <div className="campo" >
                    <label>{props.campo2}</label>
                    <input
                        type={props.tpInput}
                        value={props.valorInput2}
                        onChange={(e) => props.setValorInput2(e.target.value)} />
                </div>

                <div className="campo" style={{ display: props.visibilidade_campo3 }}>
                    <label>{props.campo3}</label>
                    <select
                        name="Tipo Usuario"
                        value={props.valorTpEvento}
                        onChange={(e) => props.setValorTpEvento(e.target.value)}
                    >
                        <option value="" disabled>Tipo Usuário</option>
                        <option value="">Admin</option>
                        <option value="">Funcionário</option>
                    </select>
                </div>

                <div className="campo" style={{ display: props.visibilidade_campo4 }}>
                    <label>{props.campo4}</label>
                    <select className="selects"
                        name="Empresa"
                        value={props.valorEmpresa}
                        onChange={(e) => props.setValorEmpresa(e.target.value)}
                    >
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
                        value={props.valorInput2}
                        onChange={(e) => props.setValorInput2(e.target.value)}
                    />
                </div>

                <div className="campo" style={{ display: props.visibilidade_campo6 }}>
                    <label>{props.campo6}</label>
                    <input
                        type="password"
                        value={props.valorInput3}
                        onChange={(e) => props.setValorInput3(e.target.value)}
                    />
                </div>

                <button type="submit" className="cadastrar">
                    Cadastrar
                </button>
            </form>
        </div>
    );
}
