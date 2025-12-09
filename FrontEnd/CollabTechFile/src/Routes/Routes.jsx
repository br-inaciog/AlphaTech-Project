<<<<<<< HEAD
import { Route, Routes } from "react-router";
import Login from "../pages/login/Login";
import Inicio from "../pages/inicio/Inicio";
import ListagemDoc from "../pages/listagemDoc/listagemDoc";
import CadastroCliente from "../pages/CadastroCliente/CadastroCliente";
=======
import { Route, Routes, Navigate } from "react-router-dom"; // ✅ adicionado Navigate
import { useAuth } from "../contexts/AuthContext"; // ✅ adicionado useAuth — ajuste o caminho conforme sua pasta

import Login from "../pages/login/Login";
import Inicio from "../pages/Inicio/Inicio";
import ListagemDoc from "../pages/listagemDoc/listagemDoc";
import CadastroCliente from "../pages/cadastroCliente/CadastroCliente";
>>>>>>> b4057c42bb6d03e0812a9307fa0abab8c69125f3
import CadastroEmpresa from "../pages/cadastroEmpresa/CadastroEmpresa";
import CadastroFuncionario from "../pages/cadastroFuncionario/CadastroFuncionario";
import TelaCliente from "../pages/telaCliente/telaCliente";
import Lixeira from "../pages/lixeira/Lixeira";
import DocAndamentoFunc from "../pages/docAndamentoFunc/DocAndamentoFunc";
import DocAndamentoClie from "../pages/docAndamentoClie/DocAndamentoClie";
import InicioCliente from "../pages/inicioCliente/InicioCliente";
<<<<<<< HEAD
import FaleConosco from "../pages/faleConosco/FaleConosco";
import DocFinalizadoClie from "../pages/docFinalizadoClie/docFinalizadoClie";
import DocFinalizadoFunc from "../pages/docFinalizadoFunc/DocFinalizadoFunc";
import ListagemFuncionario from "../pages/listagemFuncionario/listagemFuncionario";
import SenhaCliente from "../pages/senhaCliente/SenhaCliente";
import VisualizarDoc from "../pages/visualizarDoc/VisualizarDoc"

const Rotas = () => {
  return (<Routes> <Route element={<Login />} path="/" exact />
    <Route element={<Inicio />} path="/Inicio" />
    <Route element={<ListagemDoc />} path="/Listagem" />
    <Route element={<ListagemFuncionario />} path="/ListagemFuncionario" />
    <Route element={<CadastroCliente />} path="/CadastroCliente" />
    <Route element={<CadastroEmpresa />} path="/CadastroEmpresa" />
    <Route element={<CadastroFuncionario />} path="/CadastroFuncionario" />
    <Route element={<TelaCliente />} path="/TelaCliente" />
    <Route element={<Lixeira />} path="/Lixeira" />
    <Route element={<FaleConosco />} path="/FaleConosco" />
    <Route element={<InicioCliente />} path="/InicioCliente" />
    <Route element={<DocFinalizadoClie />} path="/docFinalizadoClie" />
    <Route element={<DocFinalizadoFunc />} path="/docFinalizadoFunc" />
    <Route element={<VisualizarDoc />} path="/documento/:id" />
    <Route element={<SenhaCliente />} path="/RedefinirSenha" />
    <Route element={<DocAndamentoFunc />} path="/docAndamentoFunc/:nomeDocumento/:idDocumento" />
    <Route element={<DocAndamentoClie />} path="/DocAndamentoClie/:nomeDocumento/:idDocumento" />
  </Routes>);
};
=======
import Feedback from "../pages/Feedbacks/Feedback";
import FaleConosco from "../pages/faleConosco/FaleConosco";
import DocFinalizadoClie from "../pages/docFinalizadoClie/docFinalizadoClie";
// import ModalComentarioCliente from "../pages/cometarioCliente/ModalComentarioCliente";
import DocFinalizadoFunc from "../pages/docFinalizadoFunc/DocFinalizadoFunc";

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
>>>>>>> b4057c42bb6d03e0812a9307fa0abab8c69125f3

export default Rotas;