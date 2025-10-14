import { BrowserRouter, Route, Routes } from "react-router"

import Login from "../pages/login/Login"
import Inicio from "../pages/inicio/Inicio"
import ListagemDoc from "../pages/listagemDoc/listagemDoc"
import CadastroCliente from "../pages/Cadastro/Cadastro"
import CadastroEmpresa from "../pages/cadastroEmpresa/CadastroEmpresa"
import CadastroFuncionario from "../pages/cadastroFuncionario/CadastroFuncionario"
import TelaCliente from "../pages/telaCliente/telaCliente"
import Lixeira from "../pages/lixeira/Lixeira"
import DocAndamentoFunc from "../pages/docAndamentoFunc/DocAndamentoFunc"
import DocAndamentoClie from "../pages/docAndamentoClie/DocAndamentoClie"
import InicioCliente from "../pages/inicioCliente/InicioCliente"
import Feedback from "../pages/Feedbacks/Feedback"
import FaleConosco  from "../pages/faleConosco/FaleConosco"
import DocFinalizadoClie from "../pages/docFinalizadoClie/docFinalizadoClie" 
import ModalComentarioCliente from "../pages/cometarioCliente/ModalComentarioCliente"
import DocFinalizadoFunc from "../pages/docFinalizadoFunc/DocFinalizadoFunc"

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
            <Route element={<DocAndamentoFunc />} path="/docAndamentoFunc" />
            <Route element={<DocAndamentoClie />} path="/docAndamentoClie" />
            <Route element={<FaleConosco/> } path="/FaleConosco" />
            <Route element={<InicioCliente />} path="/InicioCliente" />
            <Route element={<Feedback />} path="/FeedBacks" />
            <Route element={<DocFinalizadoClie />} path="/docFinalizadoClie" />
            <Route element={<ModalComentarioCliente />} path="/ModalComentarioCliente" />
            <Route element={<DocFinalizadoFunc />} path="/docFinalizadoFunc" />
        </Routes>
    )
}

export default Rotas;