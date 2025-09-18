import { useState } from 'react';

function EcommerceSimple() {

    const listaProductos = [
    { id: 1, nombre: 'Camiseta', precio: 15.000 },
    { id: 2, nombre: 'Pantalón', precio: 30.000 },
    { id: 3, nombre: 'Zapatos', precio: 50.000 },
    ];

    const [carrito, setCarrito] = useState([]);

    const agregarCarrito = (producto) => {
      setCarrito([...carrito, producto]);
    };

    const vaciarCarrito = () => {
      setCarrito([]);
    };

    return (
      <div id="tarjeta">
        <h3>Productos</h3>
        <ul>
          {listaProductos.map((producto) => (
            <li key={producto.id}>
              {producto.nombre}: ${producto.precio.toFixed(3)}
              <button onClick={() => agregarCarrito(producto)}>Agregar</button>
            </li>
          ))}
        </ul>
        <h2>=============================</h2>
        <h3>Carrito</h3>
        {carrito.map((producto, index) => (
          <p key={index}>
            {producto.nombre}: ${producto.precio.toFixed(3)}
          </p>
        ))}
        <button onClick={vaciarCarrito}>Eliminar</button>
      </div>
    );
  }; export default EcommerceSimple;