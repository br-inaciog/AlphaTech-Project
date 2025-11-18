import MenuLateral from '../../components/menuLateral/MenuLateral';
import Cabecalho from '../../components/cabecalho/Cabecalho';
import Editar from '../../assets/img/Editar.png';
import Toggle from '../../components/toogle/toogle';
import ModalFiltroFuncionario from '../filtroFuncionario/ModalFiltroFuncionario';
import './listagemFuncionario.css';
import { useEffect, useState } from 'react';
import api from '../../services/Service';
import Swal from 'sweetalert2';

export default function ListagemFuncionario() {
    const [funcionarios, setFuncionarios] = useState([]);
    const [funcionariosFiltrados, setFuncionariosFiltrados] = useState([]);
    const [empresas, setEmpresas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalFiltroAberto, setModalFiltroAberto] = useState(false);
    const [filtrosAtivos, setFiltrosAtivos] = useState({
        empresa: '',
        cliente: '',
        nome: ''
    });

    async function buscarEmpresas() {
        try {
            console.log("Buscando empresas...");
            const response = await api.get("empresa");
            console.log("Empresas encontradas:", response.data);
            setEmpresas(response.data);
        } catch (error) {
            console.error("Erro ao buscar empresas:", error);
            alertar("error", "Erro ao carregar lista de empresas");
        }
    }

    async function buscarFuncionarios() {
        setLoading(true);
        try {
            console.log("Buscando funcionários...");
            const response = await api.get("usuario");
            console.log("Resposta completa da API:", response.data);

            const funcionariosFiltrados = response.data.filter(usuario => usuario.idTipoUsuario === 5);
            console.log("Funcionários filtrados:", funcionariosFiltrados);

            setFuncionarios(funcionariosFiltrados);
            setFuncionariosFiltrados(funcionariosFiltrados);
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

    // Função para aplicar filtros
    function aplicarFiltros(filtros) {
        setFiltrosAtivos(filtros);
        
        let funcionariosFiltradosTemp = [...funcionarios];

        // Filtro por empresa
        if (filtros.empresa && filtros.empresa !== 'Selecione') {
            funcionariosFiltradosTemp = funcionariosFiltradosTemp.filter(funcionario => {
                const nomeEmpresa = obterNomeEmpresa(funcionario.idEmpresa);
                return nomeEmpresa.toLowerCase().includes(filtros.empresa.toLowerCase());
            });
        }

        // Filtro por nome do funcionário
        if (filtros.nome) {
            funcionariosFiltradosTemp = funcionariosFiltradosTemp.filter(funcionario => 
                funcionario.nome.toLowerCase().includes(filtros.nome.toLowerCase())
            );
        }

        setFuncionariosFiltrados(funcionariosFiltradosTemp);
        setModalFiltroAberto(false);
    }

    // Função para limpar filtros
    function limparFiltros() {
        setFiltrosAtivos({
            empresa: '',
            cliente: '',
            nome: ''
        });
        setFuncionariosFiltrados(funcionarios);
    }

    async function editarFuncionario(funcionario) {
        console.log("=== INICIANDO EDIÇÃO DO FUNCIONÁRIO ===");
        console.log("Funcionário recebido:", funcionario);
        
        if (empresas.length === 0) {
            console.log("Empresas não carregadas, buscando...");
            alertar("warning", "Carregando empresas...");
            await buscarEmpresas();
            if (empresas.length === 0) {
                alertar("error", "Não foi possível carregar a lista de empresas");
                return;
            }
        }

        const opcoesEmpresas = empresas.map((empresa, index) =>
            `<option value="${empresa.idEmpresa}" ${empresa.idEmpresa === funcionario.idEmpresa ? 'selected' : ''}>${empresa.nome}</option>`
        ).join('');

        console.log("Funcionário selecionado para edição:", funcionario);
        console.log("Empresas disponíveis:", empresas);
        console.log("ID da empresa atual do funcionário:", funcionario.idEmpresa);
        console.log("Estrutura completa do funcionário:", JSON.stringify(funcionario, null, 2));

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

                return [nome, email, idEmpresa || funcionario.idEmpresa];
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
                    id: funcionario.id || funcionario.idUsuario,
                    nome: nome.trim(),
                    email: email.trim(),
                    idEmpresa: idEmpresa ? parseInt(idEmpresa) : funcionario.idEmpresa,
                    ativo: funcionario.ativo,
                    idTipoUsuario: funcionario.idTipoUsuario
                };

                // Usar idUsuario se id não existir
                const funcionarioId = funcionario.id || funcionario.idUsuario;
                
                if (!funcionarioId) {
                    console.error("ID do funcionário não encontrado:", funcionario);
                    alertar("error", "Erro: ID do funcionário não encontrado");
                    return;
                }
                
                console.log("Dados que serão enviados:", dadosAtualizados);
                console.log("ID do funcionário:", funcionarioId);
                console.log("URL da requisição:", `usuario/${funcionarioId}`);

                const response = await api.put(`usuario/${funcionarioId}`, dadosAtualizados);
                console.log("Resposta da API:", response.data);
                
                // Atualizar o estado local para refletir a mudança imediatamente
                setFuncionarios(funcionarios.map(f => {
                    const fId = f.id || f.idUsuario;
                    if (fId === funcionarioId) {
                        console.log("Atualizando funcionário no estado local:", { ...f, ...dadosAtualizados });
                        return { ...f, ...dadosAtualizados };
                    }
                    return f;
                }));
                
                setFuncionariosFiltrados(funcionariosFiltrados.map(f => {
                    const fId = f.id || f.idUsuario;
                    if (fId === funcionarioId) {
                        return { ...f, ...dadosAtualizados };
                    }
                    return f;
                }));
                
                alertar("success", "Funcionário atualizado com sucesso!");
                
                // Recarregar dados para garantir consistência
                setTimeout(() => {
                    buscarFuncionarios();
                }, 1000);

            } catch (error) {
                console.error("Erro ao atualizar funcionário:", error);
                console.error("Detalhes do erro:", error.response?.data);
                console.error("Status do erro:", error.response?.status);
                
                let mensagemErro = "Erro ao atualizar funcionário";
                
                if (error.response?.status === 400) {
                    mensagemErro = "Dados inválidos. Verifique as informações fornecidas.";
                } else if (error.response?.status === 404) {
                    mensagemErro = "Funcionário não encontrado.";
                } else if (error.response?.status === 500) {
                    mensagemErro = "Erro interno do servidor. Tente novamente.";
                } else if (error.response?.data?.message) {
                    mensagemErro = error.response.data.message;
                }
                
                alertar("error", mensagemErro);
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
                        <div className="controles">
                            <button 
                                className="btnFiltros"
                                onClick={() => setModalFiltroAberto(true)}
                                style={{
                                    padding: '10px 20px',
                                    backgroundColor: '#001f3f',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    marginRight: '10px',
                                    marginBottom: '15px',
                                    marginTop: '15px',
                                    width: '100%'   
                                }}
                            >
                                Filtrar
                            </button>
                            {(filtrosAtivos.empresa || filtrosAtivos.nome) && (
                                <button 
                                    className="btnLimparFiltros"
                                    onClick={limparFiltros}
                                    style={{
                                        padding: '10px 20px',
                                        backgroundColor: '#dc3545',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Limpar Filtros
                                </button>
                            )}
                        </div>
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
                                {(funcionariosFiltrados.length === 0 && !loading) || empresas.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" style={{ textAlign: 'center' }}>
                                            {empresas.length === 0 ? 'Carregando empresas...' : 'Nenhum funcionário encontrado'}
                                        </td>
                                    </tr>
                                ) : (
                                    funcionariosFiltrados.map((funcionario, index) => (
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
            
            <ModalFiltroFuncionario 
                aberto={modalFiltroAberto}
                onClose={() => setModalFiltroAberto(false)}
                empresas={empresas}
                onAplicarFiltros={aplicarFiltros}
            />
        </div>
    );
}