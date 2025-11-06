import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


function EditarProductos() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const productoOriginal = state.producto;


  const [producto, setProducto] = useState({
    ...productoOriginal,
    categoria: productoOriginal.categoria || 'Sin categoría'
  });
  const [cargando, setCargando] = useState(false);


  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setProducto(prev => ({ ...prev, [name]: value }));
  };


  const manejarEnvio = async (e) => {
    e.preventDefault();
    setCargando(true);
    try {
      const productoEnviar = {
        ...producto,
        precio: producto.precio.replace(',', '.')
      };
      const respuesta = await fetch(`https://68d482e3214be68f8c696ae2.mockapi.io/api/productos/${producto.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productoEnviar),
      });
      if (!respuesta.ok) throw new Error('Error al actualizar');
      alert('Producto actualizado correctamente');
      navigate('/productos');
    } catch (error) {
      alert('Error al actualizar el producto');
      console.error(error);
    } finally {
      setCargando(false);
    }
  };


  const cancelarEdicion = () => {
    alert('Edición cancelada');
    navigate('/productos');
  };


  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px' }}>
      <h2>Editar Producto</h2>
      <form onSubmit={manejarEnvio}>
        <div style={{ marginBottom: '15px' }}>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={producto.nombre}
            onChange={manejarCambio}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>


        <div style={{ marginBottom: '15px' }}>
          <label>Precio:</label>
          <input
            type="text"
            name="precio"
            value={producto.precio}
            onChange={manejarCambio}
            placeholder="Ej: 40.000 o 40.000,50"
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
          <small style={{ color: '#666' }}>Formato: punto para miles, coma para decimales</small>
        </div>


        <div style={{ marginBottom: '15px' }}>
          <label>Categoría:</label>
          <input
            type="text"
            name="categoria"
            value={producto.categoria}
            onChange={manejarCambio}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>


        <div style={{ marginBottom: '15px' }}>
          <label>Imagen (URL):</label>
          <input
            type="text"
            name="avatar"
            value={producto.avatar}
            onChange={manejarCambio}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>


        <div style={{ marginBottom: '20px' }}>
          <label>Descripción:</label>
          <textarea
            name="descripcion"
            value={producto.descripcion}
            onChange={manejarCambio}
            rows="4"
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>


        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            type="submit"
            disabled={cargando}
            style={{
              flex: 1,
              padding: '12px',
              backgroundColor: cargando ? '#ccc' : '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: cargando ? 'not-allowed' : 'pointer'
            }}
          >
            {cargando ? 'Actualizando...' : 'Confirmar Cambios'}
          </button>
          <button
            type="button"
            onClick={cancelarEdicion}
            style={{
              flex: 1,
              padding: '12px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
} export default EditarProductos;