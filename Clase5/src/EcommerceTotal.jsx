import { useState, useEffect } from 'react';
import CarritoCompras from './Tienda'; // Importa CarritoCompras con los Productos

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

function ListaProductos({ agregarAlCarrito }) {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://68d482e3214be68f8c696ae2.mockapi.io/api/productos")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error!", error);
        setError("Hubo un problema al cargar los productos.");
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Productos Disponibles</h2>
      {productos.map((producto) => (
        <div key={producto.id}>
          <span>{producto.nombre} - ${producto.precio}</span>
          <button onClick={() => agregarAlCarrito(producto)}>
            Agregar
          </button>
        </div>
      ))}
    </div>
  );
}

function EcommerceTotal() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <Layout>
      <ListaProductos agregarAlCarrito={agregarAlCarrito} />
      <CarritoCompras carrito={carrito} setCarrito={setCarrito} />
    </Layout>
  );
} export default EcommerceTotal;