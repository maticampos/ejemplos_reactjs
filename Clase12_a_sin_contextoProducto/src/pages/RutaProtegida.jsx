import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from "../context/AuthContext";

function RutaProtegida({ children, soloAdmin = false }) {
  const { usuario } = useAuthContext();
  const location = useLocation();
 
  if (!usuario) {
    // Pasa el state actual (que contiene el carrito) a /login
    return <Navigate to="/iniciar-sesion" state={location.state} replace />;
  }

  if (soloAdmin && usuario.nombre !== "admin") {
    return <Navigate to="/productos" replace />;
  }
  return children;
} export default RutaProtegida;