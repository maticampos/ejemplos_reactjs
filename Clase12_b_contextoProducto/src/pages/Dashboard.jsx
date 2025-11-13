import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { usuario, cerrarSesion } = useAuthContext();
  const navigate = useNavigate();

  // Obtener el token actual
  const tokenActual = localStorage.getItem('authToken');

  // Función para navegar al formulario de agregar producto
  const manejarAgregarProducto = () => {
    navigate('/formulario-producto');
  };

  return (
    <div style={{ padding: '20px', minHeight: '60vh' }}>
      <h1>Dashboard Administrativo</h1>
      <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
        <p><strong>Sesión iniciada como: </strong> {usuario.nombre}</p>
       
        {/* TOKEN */}
        <div style={{
          background: '#e9ecef',
          padding: '10px',
          borderRadius: '4px',
          margin: '10px 0',
          fontSize: '14px',
        }}>
          <strong>Token de autenticación:</strong>
          <br />
          <code>{tokenActual}</code>
        </div>

        {/* SECCIÓN DE ACCIONES ADMIN */}
        <div style={{ margin: '20px 0' }}>
          <h3>Acciones:</h3>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
            <button
              onClick={manejarAgregarProducto}
              style={{
                padding: '10px 20px',
                background: '#28a745',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-block'
              }}
            >
              Agregar Productos
            </button>
           
            <Link
              to="/productos"
              style={{
                padding: '10px 20px',
                background: '#17a2b8',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                display: 'inline-block'
              }}
            >
              Ver / Editar / Eliminar Productos
            </Link>
          </div>
        </div>
        <hr></hr>
       
        {/* BOTÓN CERRAR SESIÓN */}
        <button
          onClick={cerrarSesion}
          style={{
            padding: '10px 20px',
            background: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}
