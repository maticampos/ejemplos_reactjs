import { useState } from 'react';

function Layout({ children }) {
  return (
    <div id="tarjeta">
      <header>
        <h1>Tienda Online</h1>
      </header>
      <main>{children}</main>
      <footer id="footer"> 
        © 2025 Tienda Online - Todos los derechos reservados
      </footer>
    </div>
  );
}


function ProductoList({ agregarAlCarrito }) {
  const productos = [
    { id: 1, nombre: 'Camiseta', precio: 15.000 },
    { id: 2, nombre: 'Pantalón', precio: 30.000 },
    { id: 3, nombre: 'Zapatos', precio: 50.000 },
  ];

  return (
    <div>
      <h2>Productos Disponibles</h2>
      {productos.map((producto) => (
        <div key={producto.id}>
          <span>{producto.nombre} - ${producto.precio.toFixed(3)}</span>
          <button
            onClick={() => agregarAlCarrito(producto)}
          >
            Agregar
          </button>
        </div>
      ))}
    </div>
  );
}

function Carrito({ carrito, vaciarCarrito }) {
  // Calcular el total de la compra
  const total = carrito.reduce((sum, item) => sum + item.precio, 0);

  return (
    <div>
        <hr />
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {carrito.map((item) => (
            <div >
              {item.nombre} - ${item.precio.toFixed(3)}
            </div>
          ))}
         
          {/* Muestra el total de la compra */}
          <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#f5f5f5', fontWeight: 'bold' }}>
            Total: ${total.toFixed(3)}
          </div>
         
          <button
            onClick={vaciarCarrito}
            style={{ marginTop: '10px', padding: '5px 10px', cursor: 'pointer', backgroundColor: '#ff4444', color: 'white' }}
          >
            Vaciar Carrito
          </button>
        </>
      )}
    </div>
  );
}

function EcommerceTotal() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <Layout>
        <ProductoList agregarAlCarrito={agregarAlCarrito} />
        <Carrito carrito={carrito} vaciarCarrito={vaciarCarrito} />
    </Layout>
  );
} export default EcommerceTotal;