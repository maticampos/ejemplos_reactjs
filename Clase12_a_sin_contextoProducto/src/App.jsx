import React from "react";
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import Navbar from "./pages/Navbar";
import Productos from "./pages/Productos";
import ProductoDetalle from "./pages/DetalleProdutos";
import Pagar from "./pages/Pagar";
import RutaProtegida from "./pages/RutaProtegida";
import IniciarSesion from "./pages/IniciarSesion";
import Footer from "./pages/Footer";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import Dashboard from "./pages/Dashboard";
import AgregarProducto from "./components/AgregarProducto";
import EditarProductos from "./components/EditarProductos";
import EliminarProducto from "./components/EliminarProducto";

function App() {
  return (
    <div>
      <AuthProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            
            {/* RUTAS PÚBLICAS */}
            <Route path="/" element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/productos/:id" element={<ProductoDetalle />} />
            <Route path="/productos/:categoria/:id" element={<ProductoDetalle />} />
            <Route path="/iniciar-sesion" element={<IniciarSesion />} />
            
            {/* RUTAS PROTEGIDA - Usuarios */}
            <Route path="/pagar" element={<RutaProtegida><Pagar /></RutaProtegida>}/>
           
            {/* RUTA PROTEGIDA - Admin */}
            <Route path="/agregar-producto" element={<RutaProtegida soloAdmin={true}><AgregarProducto /></RutaProtegida>}/>
            <Route path="/dashboard" element={<RutaProtegida soloAdmin={true}><Dashboard /></RutaProtegida>}/>
            <Route path="/editar-productos" element={<RutaProtegida soloAdmin={true}><EditarProductos /></RutaProtegida>}/>
            <Route path="/eliminar-productos" element={<RutaProtegida soloAdmin={true}><EliminarProducto /></RutaProtegida>}/>
          </Routes>
          <Footer />
        </CartProvider>
      </AuthProvider>
    </div>
  );
} export default App;