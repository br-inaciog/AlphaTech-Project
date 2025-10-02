import { BrowserRouter, Route, Routes } from "react-router"

import Login from "../pages/login/Login"
import Inicio from "../pages/inicio/Inicio"
import ListagemDoc from "../pages/listagemDoc/listagemDoc"

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path="/" exact />
                <Route element={<Inicio />} path="/Inicio" />
                <Route element={<ListagemDoc />} path="/Listagem" />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;