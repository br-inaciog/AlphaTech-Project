<<<<<<< HEAD
import { Route, Routes, Navigate } from "react-router-dom"; // ✅ adicionado Navigate
import { useAuth } from "../contexts/AuthContext"; // ✅ adicionado useAuth — ajuste o caminho conforme sua pasta

import Login from "../pages/login/Login";
import Inicio from "../pages/Inicio/Inicio";
import ListagemDoc from "../pages/listagemDoc/listagemDoc";
import CadastroCliente from "../pages/cadastroCliente/CadastroCliente";
import CadastroEmpresa from "../pages/cadastroEmpresa/CadastroEmpresa";
import CadastroFuncionario from "../pages/cadastroFuncionario/CadastroFuncionario";
import TelaCliente from "../pages/telaCliente/telaCliente";
import Lixeira from "../pages/lixeira/Lixeira";
import DocAndamentoFunc from "../pages/docAndamentoFunc/DocAndamentoFunc";
import DocAndamentoClie from "../pages/docAndamentoClie/DocAndamentoClie";
import InicioCliente from "../pages/inicioCliente/InicioCliente";
import Feedback from "../pages/Feedbacks/Feedback";
import FaleConosco from "../pages/faleConosco/FaleConosco";
import DocFinalizadoClie from "../pages/docFinalizadoClie/docFinalizadoClie";
import ModalComentarioCliente from "../pages/cometarioCliente/ModalComentarioCliente";
import DocFinalizadoFunc from "../pages/docFinalizadoFunc/DocFinalizadoFunc";
=======
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
// import VisualizarDoc from "../pages/visualizarDoc/Visualizar"
import DocFinalizadoClie from "../pages/docFinalizadoClie/docFinalizadoClie" 
import DocFinalizadoFunc from "../pages/docFinalizadoFunc/DocFinalizadoFunc"
import { useAuth } from "../contexts/AuthContext"
>>>>>>> c18272c728dd0f0337659ea63e5a7c9a06eb5bc6

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
            <Route element={<Login />} path="/" exact />
            <Route element={<Inicio />} path="/Inicio" />
            <Route element={<ListagemDoc />} path="/Listagem" />
            <Route element={<CadastroCliente />} path="/CadastroCliente" />
            <Route element={<CadastroEmpresa />} path="/CadastroEmpresa" />
            <Route element={<CadastroFuncionario />} path="/CadastroFuncionario" />
            <Route element={<TelaCliente />} path="/TelaCliente" />
            <Route element={<Lixeira />} path="/Lixeira" />
            <Route element={<FaleConosco />} path="/FaleConosco" />
            <Route element={<InicioCliente />} path="/InicioCliente" />
            <Route element={<DocFinalizadoClie />} path="/docFinalizadoClie" />
            <Route element={<DocFinalizadoFunc />} path="/docFinalizadoFunc" />

            <Route element={<DocAndamentoFunc />}  path="/docAndamentoFunc/:nomeDocumento/:idDocumento" />
            <Route element={<DocAndamentoClie />}  path="/DocAndamentoClie/:nomeDocumento/:idDocumento" />
        </Routes>
    )
}

export default Rotas;