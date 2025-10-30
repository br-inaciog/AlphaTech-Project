import MenuLateral from '../../components/menuLateral/MenuLateral';
import Cabecalho from '../../components/cabecalho/Cabecalho';
import Lixeira from "../../assets/img/Delete.svg";
import Editar from '../../assets/img/Editar.png';
import './telaCliente.css';

export default function TelaCliente() {
    // Exemplo de dados estáticos
    const clientes = [
        { nome: 'Kaue Moura', email: 'Kauehago07@gmail.com', empresa: "SENAI" },
        { nome: 'Kaue Moura', email: 'Kauehago07@gmail.com', empresa: "SENAI" },
        { nome: 'Kaue Moura', email: 'Kauehago07@gmail.com', empresa: "SENAI" },
        { nome: 'Kaue Moura', email: 'Kauehago07@gmail.com', empresa: "SENAI" },
        { nome: 'Kaue Moura', email: 'Kauehago07@gmail.com', empresa: "SENAI" },
    ];

    return (
        <div className="containerGeral">
            <MenuLateral />
            <main className="conteudoPrincipal clientePrincipal">
                <section className="areaTrabalho">
                    <Cabecalho />
                    <div className="titulo">
                        <h1>Tela Clientes</h1>
                    </div>

                    <div className="tabelaClienteContainer">
                        <table className="tabelaCliente">
                            <thead>
                                <tr className='titulocabe'>
                                    <th>Cliente</th>
                                    <th>Email</th>
                                    <th>Empresa</th>
                                    <th>Editar</th>
                                    <th>Excluir</th>
                                </tr>
                            </thead>

                            <tbody>
                                {clientes.map((c, i) => (
                                    <tr key={i}>
                                        <td data-cell="Cliente">{c.nome}</td>
                                        <td data-cell="Email">{c.email}</td>
                                        <td data-cell="Empresa">{c.empresa}</td>
                                        <td data-cell="Editar">
                                            <button className="btnEditar">
                                                <img src={Editar} alt="Editar" className="iconEditar" />
                                            </button>
                                        </td>
                                        <td data-cell="Excluir">
                                            <button className="btnExcluir">
                                                <img src={Lixeira} alt="Excluir" className="iconLixeira" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
}
