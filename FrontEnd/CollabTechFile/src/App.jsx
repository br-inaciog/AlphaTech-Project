import { useState } from 'react'
import './App.css'
// import Login from './pages/login/Login'
import Inicio from './pages/Inicio/Inicio'
import Cadastro from './pages/cadastro/Cadastro'
import CadastroFuncionario from './pages/cadastroFuncionario/CadastroFuncionario'
import CadastroEmpresa from './pages/cadastroEmpresa/CadastroEmpresa'
// import ListagemDoc from './pages/listagemDoc/listagemDoc'

function App() {

  return (
    <>
    {/* <Login/> */}
    <CadastroEmpresa/>
    {/* <ListagemDoc/> */}
    </>
  )
}

export default App
