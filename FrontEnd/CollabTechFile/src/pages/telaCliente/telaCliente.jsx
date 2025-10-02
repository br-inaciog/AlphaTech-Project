import MenuLateral from '../../componentes/menuLateral/MenuLateral';
import Lixeira from '../../assets/img/Lixeira.svg';
import voltar from '../../assets/img/Voltar.svg';
import user from '../../assets/img/User.png';
import lua from '../../assets/img/Lua.png';
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

                    <div className="topCliente">
                        <div className="setaVoltar">
                        <img src={voltar} alt="" />
                    </div>
                        <input className="inputPesquisa" type="text" placeholder="Pesquisar..." />
                        <div className="usuarioCliente">
                            <span className="icon-user"><img src={user} alt="" /></span>
                            Cliente
                        </div>
                            <span className="icon-moon"><img src={lua} alt="" /></span>
                    </div>
                    <h2 className="tituloCliente">Clientes</h2>
                    <div className="tabelaClienteContainer">
                        <table className="tabelaCliente">
                            <thead>
                                <tr>
                                    <th>Cliente</th>
                                    <th>Email</th>
                                    <th>Empresa</th>
                                    <th>Excluir</th>
                                    <th>Editar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clientes.map((c, i) => (
                                    <tr key={i}>
                                        <td>{c.nome}</td>
                                        <td>{c.email}</td>
                                        <td>{c.empresa}</td>
                                        <td>
                                            <button className="btnExcluir">
                                                <img src={Lixeira} alt="Excluir" className="iconLixeira" />
                                            </button>
                                        </td>
                                        <td>
                                            <button className="btnEditar">
                                                <img src={Editar} alt="Editar" className="iconEditar" />
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