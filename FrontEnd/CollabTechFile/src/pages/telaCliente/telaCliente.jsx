import MenuLateral from '../../components/menuLateral/MenuLateral';
import Cabecalho from '../../components/cabecalho/Cabecalho';
import Editar from '../../assets/img/Editar.png';
import Toggle from '../../components/toogle/toogle';
import './telaCliente.css';
import { useEffect, useState } from 'react';
import api from '../../Services/service';
import Swal from 'sweetalert2';

export default function TelaCliente() {
    const [clientes, setClientes] = useState([]);
    const [clientesFiltrados, setClientesFiltrados] = useState([]);
    const [empresas, setEmpresas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pesquisa, setPesquisa] = useState("");

    async function buscarEmpresas() {
        try {
            const response = await api.get("empresa");
            setEmpresas(response.data);
        } catch (error) {
            console.error("Erro ao buscar empresas:", error);
        }
    }

    async function buscarClientes() {
        setLoading(true);
        try {
            const response = await api.get("usuario");
            const clientesFiltrados = response.data.filter(usuario => usuario.idTipoUsuario === 4);
            setClientes(clientesFiltrados);
            setClientesFiltrados(clientesFiltrados); // inicializa lista filtrada
        } catch (error) {
            console.error("Erro ao buscar clientes:", error);
            alertar("error", "Erro ao carregar a lista de clientes");
        } finally {
            setLoading(false);
        }
    }

    function obterNomeEmpresa(idEmpresa) {
        if (!idEmpresa) return 'Não informado';
        const empresa = empresas.find(emp => emp.idEmpresa === idEmpresa);
        return empresa ? empresa.nome : 'Não informado';
    }

    function alertar(icone, mensagem) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({ icon: icone, title: mensagem });
    }

    async function alterarStatus(cliente) {
        try {
            const novoStatus = !cliente.ativo;
            const dadosAtualizados = { ...cliente, ativo: novoStatus };
            const clienteId = cliente.id || cliente.idUsuario;

            await api.put(`usuario/${clienteId}`, dadosAtualizados);

            setClientes(clientes.map(c =>
                (c.id || c.idUsuario) === clienteId ? { ...c, ativo: novoStatus } : c
            ));
            setClientesFiltrados(clientesFiltrados.map(c =>
                (c.id || c.idUsuario) === clienteId ? { ...c, ativo: novoStatus } : c
            ));

            alertar("success", `Cliente ${novoStatus ? 'ativado' : 'inativado'} com sucesso!`);
        } catch (error) {
            console.error("Erro ao alterar status:", error);
            alertar("error", "Erro ao alterar status do cliente");
        }
    }

    async function editarCliente(cliente) {
        const opcoesEmpresas = empresas.map(empresa =>
            `<option value="${empresa.idEmpresa}" ${empresa.idEmpresa === cliente.idEmpresa ? 'selected' : ''}>${empresa.nome}</option>`
        ).join('');

        const { value: formValues } = await Swal.fire({
            title: 'Editar Cliente',
            html:
                `<input id="swal-input1" class="swal2-input" placeholder="Nome" value="${cliente.nome}">` +
                `<input id="swal-input2" class="swal2-input" placeholder="Email" value="${cliente.email}">` +
                `<select id="swal-input3" class="swal2-input" style="display: flex; text-align: center; text-align-last: center; width: 100%; box-sizing: border-box;">
                    <option value="">Selecione uma empresa</option>
                    ${opcoesEmpresas}
                </select>`,
            focusConfirm: false,
            preConfirm: () => {
                const nome = document.getElementById('swal-input1').value;
                const email = document.getElementById('swal-input2').value;
                const idEmpresa = document.getElementById('swal-input3').value;

                if (!nome || !email) {
                    Swal.showValidationMessage('Nome e email são obrigatórios!');
                    return false;
                }
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    Swal.showValidationMessage('Por favor, insira um email válido!');
                    return false;
                }

                return [nome, email, idEmpresa];
            },
            showCancelButton: true,
            confirmButtonText: 'Salvar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#001f3f',
            cancelButtonColor: 'rgba(71, 4, 4, 1)'
        });

        if (formValues) {
            const [nome, email, idEmpresa] = formValues;
            try {
                const dadosAtualizados = {
                    ...cliente,
                    nome,
                    email,
                    idEmpresa: idEmpresa ? parseInt(idEmpresa) : cliente.idEmpresa
                };
                const clienteId = cliente.id || cliente.idUsuario;
                await api.put(`usuario/${clienteId}`, dadosAtualizados);
                alertar("success", "Cliente atualizado com sucesso!");
                buscarClientes();
            } catch (error) {
                console.error("Erro ao atualizar cliente:", error.response?.data || error);
                alertar("error", "Erro ao atualizar cliente");
            }
        }
    }

    // Função de pesquisa
    function handlePesquisa(event) {
        const valor = event.target.value;
        setPesquisa(valor);
        const filtrados = clientes.filter(cliente =>
            cliente.nome.toLowerCase().includes(valor.toLowerCase()) ||
            cliente.email.toLowerCase().includes(valor.toLowerCase())
        );
        setClientesFiltrados(filtrados);
    }

    useEffect(() => {
        async function carregarDados() {
            await buscarEmpresas();
            await buscarClientes();
        }
        carregarDados();
    }, []);

    return (
        <div className="containerGeral">
            <MenuLateral />
            <main className="conteudoPrincipal clientePrincipal">
                <section className="areaTrabalho">
                    <Cabecalho 
                        rota="Inicio"
                    />
                    <div className="titulo">
                        <h1>Tela Clientes</h1>
                        {loading && <p>Carregando...</p>}
                        {/* <input
                            type="text"
                            // placeholder="Pesquisar cliente..."
                            // value={pesquisa}
                            // onChange={handlePesquisa}
                            style={{ marginTop: '10px', padding: '5px', width: '250px' }}
                        /> */}
                    </div>
                    <div className="tabelaClienteContainer">
                        <table className="tabelaCliente">
                            <thead>
                                <tr>
                                    <th>Cliente</th>
                                    <th>Email</th>
                                    <th>Empresa</th>
                                    <th>Status</th>
                                    <th>Editar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(clientesFiltrados.length === 0 && !loading) || empresas.length === 0 ? (
                                    <tr>
                                        <td colSpan="6" style={{ textAlign: 'center' }}>
                                            {empresas.length === 0 ? 'Carregando clientes...' : 'Nenhum cliente encontrado'}
                                        </td>
                                    </tr>
                                ) : (
                                    clientesFiltrados.map((cliente, index) => (
                                        <tr key={`cliente-${cliente.id}-${index}`}>
                                            <td>{cliente.nome}</td>
                                            <td>{cliente.email}</td>
                                            <td>{obterNomeEmpresa(cliente.idEmpresa)}</td>
                                            <td style={{ textAlign: 'left' }}>
                                                <Toggle
                                                    presenca={cliente.ativo !== false}
                                                    manipular={() => alterarStatus(cliente)}
                                                />
                                            </td>
                                            <td>
                                                <button
                                                    className="btnEditar"
                                                    onClick={() => editarCliente(cliente)}
                                                >
                                                    <img src={Editar} alt="Editar" className="iconEditar" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
}
