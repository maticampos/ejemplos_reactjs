import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useProducts } from '../context/ProductsContext';

function FormularioProducto() {
  const navigate = useNavigate();
  const location = useLocation();
  const { agregarProducto, editarProducto, validar } = useProducts();
 
  // Obtener el producto pasado por el state
  const productoRecibido = location.state?.producto;
 
  // Determina el modo
  const modo = productoRecibido ? "editar" : "agregar";
 
  // Estados del componente
  const [producto, setProducto] = useState({
    id: '',
    nombre: '',
    precio: '',
    descripcion: '',
    categoria: '',
    avatar: ''
  });
 
  const [errores, setErrores] = useState({});
  const [cargando, setCargando] = useState(false);

  // Cargar datos del producto si estamos en modo editar
  useEffect(() => {
    if (modo === "editar" && productoRecibido) {
      setProducto({
        id: productoRecibido.id || '',
        nombre: productoRecibido.nombre || '',
        precio: productoRecibido.precio || '',
        descripcion: productoRecibido.descripcion || '',
        categoria: productoRecibido.categoria || '',
        avatar: productoRecibido.avatar || ''
      });
    }
  }, [modo, productoRecibido]);

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

  // f(x) validarFormulario - ahora usa la validación del contexto
  const validarFormulario = () => {
    const resultado = validar(producto);
    setErrores(resultado.errores);
    return resultado.esValido;
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
   
    // Valida antes de enviar usando el contexto
    if (!validarFormulario()) return;

    setCargando(true);
    try {
      const productoEnviar = {
        ...producto,
        precio: producto.precio.toString().replace(',', '.')
      };

      if (modo === "agregar") {
        // Usar el contexto para agregar producto
        const nuevoProducto = await agregarProducto(productoEnviar);
        alert(`Producto "${nuevoProducto.nombre}" agregado correctamente con ID: ${nuevoProducto.id}`);
       
        // Limpiar formulario después del éxito
        setProducto({
          id: '',
          nombre: '',
          precio: '',
          descripcion: '',
          categoria: '',
          avatar: ''
        });

        setTimeout(() => {
          navigate('/productos');
        }, 100);

      } else {
        // Usar el contexto para editar producto
        await editarProducto(productoEnviar);
        alert('Producto actualizado correctamente');

        setTimeout(() => {
          navigate('/productos');
        }, 100);
      }
     
      setErrores({});
     
    } catch (error) {
      alert(`Hubo un problema al ${modo === "editar" ? 'actualizar' : 'agregar'} el producto`);
      console.error('Error:', error);
    } finally {
      setCargando(false);
    }
  };

  const cancelarEdicion = () => {
    if (modo === "editar") {
      alert('Edición cancelada');
      navigate('/productos');
    }
  };

  // Renderizado del componente
  return (
    <form onSubmit={manejarEnvio} style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>{modo === "editar" ? 'Editar' : 'Agregar'} Producto</h2>
     
      {modo === "editar" && productoRecibido && (
        <p style={{ color: '#666', fontStyle: 'italic' }}>
          Editando: {productoRecibido.nombre} (ID: {productoRecibido.id})
        </p>
      )}
     
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
          placeholder="Ej: 40.000"
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

      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        <button
          type="submit"
          disabled={cargando}
          style={{
            flex: 1,
            padding: '12px',
            backgroundColor: cargando ? '#ccc' : 'darkolivegreen',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: cargando ? 'not-allowed' : 'pointer'
          }}
        >
          {cargando
            ? (modo === "editar" ? 'Actualizando...' : 'Agregando...')
            : (modo === "editar" ? 'Confirmar Cambios' : 'Agregar Producto')
          }
        </button>
       
        {modo === "editar" && (
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
        )}
      </div>
     
      <p>(*) Campos obligatorios</p>
    </form>
  );
} export default FormularioProducto;
