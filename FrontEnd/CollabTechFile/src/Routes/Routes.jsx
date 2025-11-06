import { Route, Routes } from "react-router"
import Login from "../pages/login/Login"
import Inicio from "../pages/inicio/Inicio"
import ListagemDoc from "../pages/listagemDoc/listagemDoc"
import CadastroCliente from "../pages/CadastroCliente/CadastroCliente"
import CadastroEmpresa from "../pages/cadastroEmpresa/CadastroEmpresa"
import CadastroFuncionario from "../pages/cadastroFuncionario/CadastroFuncionario"
import TelaCliente from "../pages/telaCliente/telaCliente"
import Lixeira from "../pages/lixeira/Lixeira"
import DocAndamentoFunc from "../pages/docAndamentoFunc/DocAndamentoFunc"
import DocAndamentoClie from "../pages/docAndamentoClie/DocAndamentoClie"
import InicioCliente from "../pages/inicioCliente/InicioCliente"
import FaleConosco from "../pages/faleConosco/FaleConosco"
import VisualizarDoc from "../pages/visualizarDoc/Visualizar"
import DocFinalizadoClie from "../pages/docFinalizadoClie/docFinalizadoClie" 
import DocFinalizadoFunc from "../pages/docFinalizadoFunc/DocFinalizadoFunc"

const Privado = (props) => {
    const { usuario } = useAuth(); // ✅ agora reconhecido corretamente

    // Se não estiver autenticado, redireciona para login
    if (!usuario) {
        return <Navigate to="/" />;
    }

    // Se o tipo de usuário não for o permitido, redireciona
    if (usuario.tipoUsuario !== props.tipoPermitido) {
        return <Navigate to="/" />;
    }

    // Caso contrário, renderiza o componente autorizado
    return <props.Item />;
};

const Rotas = () => {
    return (
        <Routes>
<<<<<<< HEAD
            {/* <Route element={<Login />} path="/" exact />
=======
            <Route element={<Login />} path="/" exact />
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 83f8e65fd41ffc1d494fa59ebe079d06b5107cb3

            <Route element={<Privado tipoPermitido="Funcionario" Item={Inicio} />} path="/Inicio" />
            <Route element={<Privado tipoPermitido="Funcionario" Item={ListagemDoc} />} path="/Listagem" />
            <Route element={<Privado tipoPermitido="Funcionario" Item={CadastroCliente} />} path="/CadastroCliente" />
            <Route element={<Privado tipoPermitido="Funcionario" Item={CadastroEmpresa} />} path="/CadastroEmpresa" />
            <Route element={<Privado tipoPermitido="Admin" Item={CadastroFuncionario} />} path="/CadastroFuncionario" />
            <Route element={<Privado tipoPermitido="Funcionario" Item={TelaCliente} />} path="/TelaCliente" />
            <Route element={<Privado tipoPermitido="Funcionario" Item={Lixeira} />} path="/Lixeira" />
            <Route element={<Privado tipoPermitido="Funcionario" Item={DocAndamentoFunc} />} path="/docAndamentoFunc" />
            <Route element={<Privado tipoPermitido="Cliente" Item={DocAndamentoClie} />} path="/docAndamentoClie" />
            <Route element={<Privado tipoPermitido="Funcionario" Item={Feedback} />} path="/FeedBacks" />
            <Route element={<Privado tipoPermitido="Cliente" Item={FaleConosco} />} path="/FaleConosco" />
            <Route element={<Privado tipoPermitido="Cliente" Item={InicioCliente} />} path="/InicioCliente" />
            <Route element={<Privado tipoPermitido="Cliente" Item={DocFinalizadoClie} />} path="/docFinalizadoClie" />
            <Route element={<Privado tipoPermitido="Cliente" Item={ModalComentarioCliente} />} path="/ModalComentarioCliente" />
<<<<<<< HEAD
            <Route element={<Privado tipoPermitido="Funcionario" Item={DocFinalizadoFunc} />} path="/docFinalizadoFunc" /> */}
            
            <Route element={<Login />} path="/" exact />

=======
            <Route element={<Privado tipoPermitido="Funcionario" Item={DocFinalizadoFunc} />} path="/docFinalizadoFunc" />
            <Route path="/alterar-senha" element={<SenhaCliente />} />


            
=======
>>>>>>> 83f8e65fd41ffc1d494fa59ebe079d06b5107cb3
>>>>>>> 3107e6deda905d8ac4742559aa056f9b71b2bedc
            <Route element={<Inicio />} path="/Inicio" />
            <Route element={<ListagemDoc />} path="/Listagem" />
            <Route element={<CadastroCliente />} path="/CadastroCliente" />
            <Route element={<CadastroEmpresa />} path="/CadastroEmpresa" />
            <Route element={<CadastroFuncionario />} path="/CadastroFuncionario" />
            <Route element={<TelaCliente />} path="/TelaCliente" />
            <Route element={<Lixeira />} path="/Lixeira" />
            <Route element={<DocAndamentoFunc />} path="/docAndamentoFunc" />
            <Route element={<DocAndamentoClie />} path="/docAndamentoClie" />
            <Route element={<FaleConosco />} path="/FaleConosco" />
            <Route element={<InicioCliente />} path="/InicioCliente" />
            <Route element={<DocFinalizadoClie />} path="/docFinalizadoClie" />
            <Route element={<DocFinalizadoFunc />} path="/docFinalizadoFunc" />
<<<<<<< HEAD
            <Route element={<ListagemFuncionario />} path="/listagemFuncionario" />
            <Route element={<ModalFiltroFuncionario />} path="/ModalFiltroFuncionario" />

            
=======
            <Route element={<DocAndamentoFunc />}  path="/docAndamentoFunc/:nomeDocumento/:idDocumento" />
            <Route element={<DocAndamentoClie />}  path="/DocAndamentoClie/:nomeDocumento/:idDocumento" />
<<<<<<< HEAD
=======
>>>>>>> 2a0ef24f0fa929ff015a65f7e6ba64a58bd93449
>>>>>>> 83f8e65fd41ffc1d494fa59ebe079d06b5107cb3
>>>>>>> 3107e6deda905d8ac4742559aa056f9b71b2bedc
        </Routes>
    )
}

export default Rotas;