import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function RutaProtegida({ isAuthenticated, children }) {
  const location = useLocation();
 
  if (!isAuthenticated) {
    // Pasa el state actual (que contiene el carrito) a /login
    return <Navigate to="/iniciar-sesion" state={location.state} replace />;
  }
  return children;
}
export default RutaProtegida;