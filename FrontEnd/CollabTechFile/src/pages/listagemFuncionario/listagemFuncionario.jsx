import MenuLateral from '../../components/menuLateral/MenuLateral';
import Cabecalho from '../../components/cabecalho/Cabecalho';
import Editar from '../../assets/img/Editar.png';
import Toggle from '../../components/toogle/toogle';
import './listagemFuncionario.css';
import { useEffect, useState } from 'react';
import api from '../../services/Service';
import Swal from 'sweetalert2';

export default function ListagemFuncionario() {
    const [funcionarios, setFuncionarios] = useState([]);
    const [empresas, setEmpresas] = useState([]);
    const [loading, setLoading] = useState(false);

    async function buscarEmpresas() {
        try {
            const response = await api.get("empresa");
            setEmpresas(response.data);
        } catch (error) {
            console.error("Erro ao buscar empresas:", error);
        }
    }

    async function buscarFuncionarios() {
        setLoading(true);
        try {
            const response = await api.get("usuario");

            // Filtrar apenas usuários com idTipoUsuario = 3 (funcionários) - mostrar todos (ativos e inativos)
            const funcionariosFiltrados = response.data.filter(usuario => usuario.idTipoUsuario === 3);

            setFuncionarios(funcionariosFiltrados);
        } catch (error) {
            console.error("Erro ao buscar funcionários:", error);
            alertar("error", "Erro ao carregar a lista de funcionários");
        } finally {
            setLoading(false);
        }
    }

    // Função para obter nome da empresa pelo ID
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
        Toast.fire({
            icon: icone,
            title: mensagem
        });
    }

    // Função para alterar status ativo/inativo
    async function alterarStatus(funcionario) {
        try {
            const novoStatus = !funcionario.ativo;
            
            const dadosAtualizados = {
                ...funcionario,
                ativo: novoStatus
            };

            const funcionarioId = funcionario.id || funcionario.idUsuario;
            
            await api.put(`usuario/${funcionarioId}`, dadosAtualizados);
            
            // Atualizar o estado local para refletir a mudança imediatamente
            setFuncionarios(funcionarios.map(f => 
                (f.id || f.idUsuario) === funcionarioId 
                    ? { ...f, ativo: novoStatus }
                    : f
            ));
            
            alertar("success", `Funcionário ${novoStatus ? 'ativado' : 'inativado'} com sucesso!`);
            
        } catch (error) {
            console.error("Erro ao alterar status:", error);
            alertar("error", "Erro ao alterar status do funcionário");
        }
    }

    async function editarFuncionario(funcionario) {
        // Criar opções do select de empresas
        const opcoesEmpresas = empresas.map((empresa, index) =>
            `<option value="${empresa.idEmpresa}" ${empresa.idEmpresa === funcionario.idEmpresa ? 'selected' : ''}>${empresa.nome}</option>`
        ).join('');

        const { value: formValues } = await Swal.fire({
            title: 'Editar Funcionário',
            html:
                `<input id="swal-input1" class="swal2-input" placeholder="Nome" value="${funcionario.nome}">` +
                `<input id="swal-input2" class="swal2-input" placeholder="Email" value="${funcionario.email}">` +
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

                // Validação básica de email
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
                    ...funcionario,
                    nome: nome,
                    email: email,
                    idEmpresa: idEmpresa ? parseInt(idEmpresa) : funcionario.idEmpresa
                };

                // Usar idUsuario se id não existir
                const funcionarioId = funcionario.id || funcionario.idUsuario;

                await api.put(`usuario/${funcionarioId}`, dadosAtualizados);
                alertar("success", "Funcionário atualizado com sucesso!");
                buscarFuncionarios();

            } catch (error) {
                console.error("Erro ao atualizar funcionário:", error);
                console.error("Detalhes do erro:", error.response?.data);
                alertar("error", "Erro ao atualizar funcionário");
            }
        }
    }

    useEffect(() => {
        async function carregarDados() {
            await buscarEmpresas();
            await buscarFuncionarios();
        }
        carregarDados();
    }, []);

    return (
        <div className="containerGeral">
            <MenuLateral />
            <main className="conteudoPrincipal funcionarioPrincipal">
                <section className="areaTrabalho">
                    <Cabecalho />
                    <div className="titulo">
                        <h1>Listagem de Funcionários</h1>
                        {loading && <p>Carregando...</p>}
                    </div>
                    <div className="tabelaFuncionarioContainer">
                        <table className="tabelaFuncionario">
                            <thead>
                                <tr>
                                    <th>Funcionário</th>
                                    <th>Email</th>
                                    <th>Empresa</th>
                                    <th>Status</th>
                                    <th>Editar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(funcionarios.length === 0 && !loading) || empresas.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" style={{ textAlign: 'center' }}>
                                            {empresas.length === 0 ? 'Carregando empresas...' : 'Nenhum funcionário encontrado'}
                                        </td>
                                    </tr>
                                ) : (
                                    funcionarios.map((funcionario, index) => (
                                        <tr key={`funcionario-${funcionario.id}-${index}`}>
                                            <td>{funcionario.nome}</td>
                                            <td>{funcionario.email}</td>
                                            <td>{obterNomeEmpresa(funcionario.idEmpresa)}</td>
                                            <td style={{ textAlign: 'left' }}>
                                                <Toggle 
                                                    presenca={funcionario.ativo !== false}
                                                    manipular={() => alterarStatus(funcionario)}
                                                />
                                            </td>
                                            <td>
                                                <button
                                                    className="btnEditar"
                                                    onClick={() => editarFuncionario(funcionario)}
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
