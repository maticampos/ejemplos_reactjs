import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function FormularioProducto() {
  // Estados del componente
  const [producto, setProducto] = useState({nombre: '', precio: '', descripcion: '', categoria: '', avatar: ''});
  const [errores, setErrores] = useState({});
  const [cargando, setCargando] = useState(false);
  const navigate = useNavigate();

  // f(x) manejarCambios | inputs
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    
    // Valida longitud max. descripción
    if (name === 'descripcion' && value.length > 200) return;
    
    setProducto(prev => ({ ...prev, [name]: value }));
    
    // Limpiar error del campo si existe
    if (errores[name]) {
      setErrores(prev => ({ ...prev, [name]: '' }));
    }
  };

  // f(x) validarFormulario
  const validarFormulario = () => {
    const errorDeCarga = {};

    // nombre
    if (!producto.nombre.trim()) {
      errorDeCarga.nombre = 'El nombre es obligatorio.';
    }

    // precio
    if (!producto.precio.trim()) {
      errorDeCarga.precio = 'El precio es obligatorio.';
    } else {
      const precioLimpio = producto.precio.replace(/\./g, '').replace(',', '.');
      const precioNumerico = parseFloat(precioLimpio);
      
      if (!/^[\d.,]+$/.test(producto.precio.replace(/\./g, ''))) {
        errorDeCarga.precio = 'Solo números, puntos o comas.';
      } else if (isNaN(precioNumerico)) {
        errorDeCarga.precio = 'Precio no válido.';
      } else if (precioNumerico <= 0) {
        errorDeCarga.precio = 'Debe ser mayor a 0.';
      }
    }

    // descripción
    if (!producto.descripcion.trim()) {
      errorDeCarga.descripcion = 'La descripción es obligatoria.';
    } else if (producto.descripcion.length < 10) {
      errorDeCarga.descripcion = 'Mínimo 10 caracteres.';
    } else if (producto.descripcion.length > 200) {
      errorDeCarga.descripcion = 'Máximo 200 caracteres.';
    }

    setErrores(errorDeCarga);
    return Object.keys(errorDeCarga).length === 0;
  };

  // f(x) para agregarProducto
  const agregarProducto = async (producto) => {
    try {
      const productoEnviar = {
        ...producto,
        precio: producto.precio.replace(',', '.')
      };

      const respuesta = await fetch('https://68d482e3214be68f8c696ae2.mockapi.io/api/productos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productoEnviar),
      });

      if (!respuesta.ok) throw new Error('Error al agregar el producto.');

      const data = await respuesta.json();
      alert('Producto agregado correctamente');
      return data;
    } catch (error) {
      alert('Hubo un problema al agregar el producto.');
      throw error;
    }
  };

  // f(x) manejarEnvio
  const manejarEnvio = async (e) => {
    e.preventDefault();
    
    // Validar antes de enviar
    if (!validarFormulario()) return;

    setCargando(true);
    try {
      await agregarProducto(producto);

      const agregarOtro = window.confirm('Producto agregado correctamente!\n\n¿Desea agregar otro producto?\n\n• "Aceptar": Agrega otro producto\n• "Cancelar": Redirige a la lista de productos');
   
    if (agregarOtro) {
      // Limpiar formulario para nuevo producto
      setProducto({nombre: '', precio: '', descripcion: '', categoria: '', avatar: ''});
      setErrores({});
    } else {

    setTimeout(() => {
    navigate('/productos');
        }, 100);
    }
      
      // Limpiar formulario después del éxito
      setProducto({nombre: '', precio: '', descripcion: '', categoria: '', avatar: ''});
      setErrores({});
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setCargando(false);
    }

  
  };

  // Renderizado del componente
  return (
    <form onSubmit={manejarEnvio} style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>Agregar Producto</h2>
      
      {/* Campo Nombre */}
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Nombre: *
        </label>
        <input
          type="text"
          name="nombre"
          value={producto.nombre}
          onChange={manejarCambio}
          disabled={cargando}
          style={{
            width: '100%',
            padding: '8px',
            border: `1px solid ${errores.nombre ? 'red' : '#ccc'}`,
            borderRadius: '4px'
          }}
          placeholder="Ingrese el nombre del producto"
        />
        {errores.nombre && <p style={{ color: 'red', margin: '5px 0', fontSize: '14px' }}>{errores.nombre}</p>}
      </div>

      {/* Campo Precio */}
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Precio: *
        </label>
        <input
          type="text"
          name="precio"
          value={producto.precio}
          onChange={manejarCambio}
          disabled={cargando}
          placeholder="Ej: 40.000 o 40.000,50"
          inputMode="decimal"
          style={{
            width: '100%',
            padding: '8px',
            border: `1px solid ${errores.precio ? 'red' : '#ccc'}`,
            borderRadius: '4px'
          }}
        />
        <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
          Formato argentino: punto para miles, sin decimales.
        </div>
        {errores.precio && <p style={{ color: 'red', margin: '5px 0', fontSize: '14px' }}>{errores.precio}</p>}
      </div>

      {/* Campo Categoría */}
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Categoría:
        </label>
        <input
          type="text"
          name="categoria"
          value={producto.categoria}
          onChange={manejarCambio}
          disabled={cargando}
          placeholder="Ej: Electrónica, Ropa, Hogar, etc."
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
      </div>

      {/* Campo Avatar URL */}
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Imagen (URL):
        </label>
        <input
          type="text"
          name="avatar"
          value={producto.avatar}
          onChange={manejarCambio}
          disabled={cargando}
          placeholder="https://ejemplo.com/avatar.jpg"
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
      </div>

      {/* Campo Descripción */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Descripción: *
        </label>
        <textarea
          name="descripcion"
          value={producto.descripcion}
          onChange={manejarCambio}
          rows="4"
          disabled={cargando}
          maxLength="200"
          placeholder="Mínimo 10 caracteres, máximo 200 caracteres"
          style={{
            width: '100%',
            padding: '8px',
            border: `1px solid ${errores.descripcion ? 'red' : '#ccc'}`,
            borderRadius: '4px',
            resize: 'vertical'
          }}
        />
        <div style={{
          fontSize: '12px',
          color: producto.descripcion.length > 200 ? 'red' : '#666',
          marginTop: '5px'
        }}>
          {producto.descripcion.length}/200 caracteres
        </div>
        {errores.descripcion && (
          <p style={{ color: 'red', margin: '5px 0', fontSize: '14px' }}>{errores.descripcion}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={cargando}
        style={{
          width: '100%',
          padding: '12px',
          backgroundColor: cargando ? '#ccc' : 'darkolivegreen',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '16px',
          cursor: cargando ? 'not-allowed' : 'pointer'
        }}
      >
        {cargando ? 'Agregando...' : 'Agregar Producto'}
      </button>
      <p>(*) Campos obligatorios</p>
    </form>
  );
} export default FormularioProducto;