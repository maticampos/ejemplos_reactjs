import React, { useState } from "react";
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

function App() {
  return (
    <div>
      <AuthProvider>
      <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<ProductoDetalle />} />
        <Route path="/productos/:categoria/:id" element={<ProductoDetalle />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        <Route path="/dashboard" element={
          <RutaProtegida soloAdmin={true}>
              <Dashboard />
            </RutaProtegida>}/>
        <Route path="/pagar" element={
            <RutaProtegida>
              <Pagar />
            </RutaProtegida>}/>
      </Routes>
      <Footer />
      </ CartProvider>
      </ AuthProvider>
    </div>
  );
} export default App;
