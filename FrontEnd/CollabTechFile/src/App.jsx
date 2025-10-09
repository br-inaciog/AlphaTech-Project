import './App.css'
import Rotas from "../src/Routes/Routes"
import { BrowserRouter } from 'react-router'

function App() {
  return (
    <>
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </>
  )
}

export default App
