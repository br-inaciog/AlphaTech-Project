import MenuLateral from '../../componentes/menuLateral/MenuLateral';
import Cabecalho from '../../componentes/cabecalho/Cabecalho';
import Lixeira from '../../assets/img/Delete.png';

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
        { nome: 'Kaue Moura', email: 'Kauehago07@gmail.com', empresa: "SENAI" },
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
                    <h2 className="tituloCliente">Clientes</h2>
                    <div className="tabelaClienteContainer">
                        <table className="tabelaCliente">
                            <thead>
                                <tr>
                                    <th>Cliente</th>
                                    <th>Email</th>
                                    <th>Empresa</th>
                                    <th>Editar</th>
                                    <th>Excluir</th>
                                </tr>
                            </thead>
                            <tbody className="barraRolagem">
                                {clientes.map((c, i) => (
                                    <tr key={i}>
                                        <td>{c.nome}</td>
                                        <td>{c.email}</td>
                                        <td>{c.empresa}</td>
                                        <td>
                                            <button className="btnEditar">
                                                <img src={Editar} alt="Editar" className="iconEditar" />
                                            </button>
                                        </td>
                                        <td>
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