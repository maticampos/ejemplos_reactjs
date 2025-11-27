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
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";
import Dashboard from "./pages/Dashboard";
import FormularioProducto from './components/FormularioProducto';
import EliminarProducto from './components/EliminarProducto';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 



function App() {
  return (
    <div>
      <AuthProvider>
        <CartProvider>
          <ProductsProvider>
            <Navbar />
            <Routes>
             
              {/* RUTAS PÚBLICAS */}
              <Route path="/" element={<Inicio />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/productos/:id" element={<ProductoDetalle />} />
              <Route path="/productos/:categoria/:id" element={<ProductoDetalle />} />
              <Route path="/iniciar-sesion" element={<IniciarSesion />} />
             
              {/* RUTA PROTEGIDA - para Usuarios */}
              <Route path="/pagar" element={<RutaProtegida><Pagar /></RutaProtegida>}/>
             
              {/* RUTA PROTEGIDA - para Admins */}
              <Route path="/dashboard" element={<RutaProtegida soloAdmin={true}><Dashboard /></RutaProtegida>}/>
             
              {/* Ruta para formulario Agrega/Edita*/}
              <Route
                path="/formulario-producto"
                element={
                  <RutaProtegida>
                    <FormularioProducto />
                  </RutaProtegida>
                }
              />
             
              {/* Ruta para ELIMINAR producto */}
              <Route
                path="/eliminar-producto"
                element={
                  <RutaProtegida>
                    <EliminarProducto />
                  </RutaProtegida>
                }
              />
             
              {/* Redirección por defecto */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              closeOnClick
              draggable
              pauseOnHover
            />
          </ProductsProvider>
        </CartProvider>
      </AuthProvider>
    </div>
  );
} export default App;
