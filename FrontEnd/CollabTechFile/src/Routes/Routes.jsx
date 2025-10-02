import { BrowserRouter, Route, Routes } from "react-router"

import ListagemDoc from "../pages/listagemDoc/listagemDoc"
import Inicio from "../pages/Inicio/Inicio"
import Login from "../pages/login/Login"

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