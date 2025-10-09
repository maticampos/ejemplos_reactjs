import React, { useState } from "react";
import Inicio from './pages/Inicio'
import Servicios from './pages/Servicios'
import Navbar from './pages/Navbar'
import Productos from './pages/Productos'
import ProductoDetalle from './pages/DetalleProdutos'
import Pagar from "./pages/Pagar";
import RutaProtegida from "./pages/RutaProtegida";
import IniciarSesion from "./pages/IniciarSesion";

import Footer from './pages/Footer'
import { Routes, Route } from 'react-router-dom'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [usuario, setUsuario] = useState({ nombre: "", email: "" });


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/servicios' element={<Servicios />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/productos/:id' element={<ProductoDetalle />} />
        <Route path='/productos/:categoria/:id' element={<ProductoDetalle />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion
              setIsAuthenticated={setIsAuthenticated}
              setUsuario={setUsuario}
            />
          }
        />
        <Route path="/pagar" element={ <RutaProtegida isAuthenticated={isAuthenticated}>
              <Pagar
                setIsAuthenticated={setIsAuthenticated}
                setUsuario={setUsuario}
                usuario={usuario}
              />
            </RutaProtegida>
          }
        />


      </Routes>
      <Footer />
    </div>
  )
}

export default App