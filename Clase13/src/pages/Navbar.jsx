import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext';
import { useCartContext } from '../context/CartContext';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar() {
  const { usuario, isAuthenticated, cerrarSesion } = useAuthContext();
  const { vaciarCarrito, carrito } = useCartContext();
  const navigate = useNavigate();

  const totalItemsCarrito = carrito.reduce((total, item) => total + item.cantidad, 0);

  const manejarCerrarSesion = () => {
    navigate("/productos");
    setTimeout(() => {
      vaciarCarrito();
      cerrarSesion();
    }, 100);
  };

  return (
    <>
      <NavbarContainer className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid">
          <Logo to="/" className="navbar-brand">Juegos</Logo>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarContent"
            aria-controls="navbarContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/servicios" className="nav-link">Servicios</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/productos" className="nav-link">Productos</NavLink>
              </li>
              {usuario?.nombre === "admin" && (
                <li className="nav-item">
                  <NavLink to="/formulario-producto" className="nav-link">Agregar Producto</NavLink>
                </li>
              )}
            </ul>

            <SeccionUsuario className="d-flex align-items-center gap-3">
              <ContenedorCarrito> 
                <IconoCarrito to="/pagar" className="nav-link d-flex align-items-center">
                  <span className="me-1">Carrito</span>
                  <FaShoppingCart />  
                  {totalItemsCarrito > 0 && (
                    <ContadorCarrito>
                      {totalItemsCarrito}
                    </ContadorCarrito>
                  )}
                </IconoCarrito>
              </ContenedorCarrito>

              {isAuthenticated ? (
                <ContenedorUsuario className="d-flex align-items-center gap-3">
                  <Bienvenida>Hola, {usuario.nombre}</Bienvenida>
                 
                  {usuario.nombre === "admin" && (
                    <NavLinkAdmin to="/dashboard" className="nav-link">Dashboard</NavLinkAdmin>
                  )}
                 
                  <BotonCerrarSesion onClick={manejarCerrarSesion} className="btn btn-outline-light btn-sm">
                    Cerrar Sesión
                  </BotonCerrarSesion>
                </ContenedorUsuario>
              ) : (
                <NavLink to="/iniciar-sesion" className="nav-link">Iniciar Sesión</NavLink>
              )}
            </SeccionUsuario>
          </div>
        </div>
      </NavbarContainer>
      <NavbarSpacer />
    </>
  )
} 

export default Navbar;

// Styled Components actualizados
const NavbarContainer = styled.nav`
  background-color: #556B2F !important;
  padding: 0.5rem 1rem;
`;

const NavbarSpacer = styled.div`
  height: 80px;

  @media (max-width: 991.98px) {
    height: 76px;
  }
`;

const Logo = styled(Link)`
  color: white !important;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
 
  &:hover {
    color: white !important;
  }
`;

// NavLink normal (para usuarios)
const NavLink = styled(Link)`
  color: white !important;
  text-decoration: none;
  padding: 0.5rem 1rem;
 
  &:hover {
    color: white !important;
    text-decoration: underline;
  }
`;

// NavLink especial para admin
const NavLinkAdmin = styled(Link)`
  color: black !important;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-weight: bold;
 
  &:hover {
    color: gold !important;
    text-decoration: underline;
  }
`;

const Bienvenida = styled.span`
  color: white;
  font-size: 0.9rem;
  margin: 0;
  white-space: nowrap;

  @media (max-width: 991.98px) {
    margin-bottom: 0.5rem;
  }
`;

const BotonCerrarSesion = styled.button`
  background: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  white-space: nowrap;
 
  &:hover {
    background: white;
    color: #556B2F;
  }

  @media (max-width: 991.98px) {
    width: 100%;
    margin-top: 0.5rem;
  }
`;

const ContenedorCarrito = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const IconoCarrito = styled(Link)`
  color: white !important;
  text-decoration: none;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  position: relative;
  font-size: 1rem;
  gap: 5px;
 
  &:hover {
    color: gold !important;
  }
`;

const ContadorCarrito = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background: red;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
`;

const SeccionUsuario = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 991.98px) {
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
    width: 100%;
  }
`;

const ContenedorUsuario = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 991.98px) {
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }
`;