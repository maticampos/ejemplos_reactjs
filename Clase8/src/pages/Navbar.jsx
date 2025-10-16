import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext';

function Navbar() {

  const { isAuthenticated, usuario, carrito, cerrarSesion } = useAppContext();

  return (
    <nav>
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li >
          {isAuthenticated ? (
            <div >
              <span>Hola, {usuario.nombre}</span>
              <span>Carrito: ({carrito.length})</span>
              <button
                onClick={cerrarSesion}
              >
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