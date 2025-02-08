import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import DetallePlanta from "./views/DetallePlanta"
import NotFound from './views/NotFound'
import Home from './components/Home'
import DetallePedido from './views/DetallePedido'

function App() {
  

  return (
    <>

<div>
      <Routes>     

        <Route path="/" element={<Home />} />
        <Route path="plantas/">
        <Route path=":id" element={<DetallePlanta />} /></Route>
        <Route path="/carrito" element={<DetallePedido />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </div>
    </>
  )
}

export default App
