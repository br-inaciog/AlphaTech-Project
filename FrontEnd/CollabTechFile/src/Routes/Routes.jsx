import { BrowserRouter, Route, Routes } from "react-router"

import Login from "../pages/login/Login"
import Inicio from "../pages/inicio/Inicio"
import ListagemDoc from "../pages/listagemDoc/listagemDoc"
import CadastroCliente from "../pages/Cadastro/Cadastro"
import CadastroEmpresa from "../pages/cadastroEmpresa/CadastroEmpresa"
import CadastroFuncionario from "../pages/cadastroFuncionario/CadastroFuncionario"
import TelaCliente from "../pages/telaCliente/telaCliente"

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path="/" exact />
                <Route element={<Inicio />} path="/Inicio" />
                <Route element={<ListagemDoc />} path="/Listagem" />
                <Route element={<CadastroCliente />} path="/CadastroCliente" />
                <Route element={<CadastroEmpresa />} path="/CadastroEmpresa" />
                <Route element={<CadastroFuncionario />} path="/CadastroFuncionario" />
                <Route element={<TelaCliente />} path="/TelaCliente" />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;