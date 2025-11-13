import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext';
import { useCartContext } from '../context/CartContext';

function Navbar() {
  const { usuario, isAuthenticated, cerrarSesion } = useAuthContext();
  const { vaciarCarrito } = useCartContext();
  const navigate = useNavigate();

    const manejarCerrarSesion = () => {
    navigate("/productos");

    // Tiempo 1'' para asegurar la navegación
    setTimeout(() => {
      vaciarCarrito();
      cerrarSesion();
    }, 100);
  };

  return (
    <nav>
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            
            {/* ENLACE PARA ADMIN - Solo visible para admin */}
            {usuario?.nombre === "admin" && (
              <li>
                <Link to="/agregar-producto">Agregar Producto</Link>
              </li>
            )}
            
            <li>
          {isAuthenticated ? (
            <div>
              <span>Hola, {usuario.nombre}</span>
              
              {/* ENLACE DASHBOARD solo para admin */}
              {usuario.nombre === "admin" && (
                <Link to="/dashboard" style={{margin: '0 10px'}}>
                  Dashboard
                </Link>
              )}
              <button onClick={manejarCerrarSesion}>
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <Link to="/iniciar-sesion">Iniciar Sesión</Link>
          )}
        </li>
        </ul>
    </nav>
  )
} export default Navbar