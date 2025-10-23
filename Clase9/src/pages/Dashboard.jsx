import React from 'react';
import { useAuthContext } from '../context/AuthContext';

export default function Dashboard() {
  const { usuario, cerrarSesion } = useAuthContext();

  // Obtener el token actual
  const tokenActual = localStorage.getItem('authToken');

  return (
    <div style={{ padding: '20px', minHeight: '60vh' }}>
      <h1>Dashboard Administrativo</h1>
      <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
        <p><strong>Sesión iniciada como: </strong> {usuario.nombre}</p>
       
        {/* Muestra token */}
        <div style={{
          background: '#e9ecef',
          padding: '10px',
          borderRadius: '4px',
          margin: '10px 0',
          fontSize: '14px',
          wordBreak: 'break-all'
        }}>
          <strong>Token de autenticación:</strong>
          <br />
          <code>{tokenActual}</code>
        </div>
       
        <button
          onClick={cerrarSesion}
          style={{
            padding: '10px 20px',
            background: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}
