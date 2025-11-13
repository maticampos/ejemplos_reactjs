import { Link, useNavigate } from "react-router-dom";
import CarritoCompras from "./Carrito";
import { useCartContext } from "../context/CartContext";
import { useAuthContext } from "../context/AuthContext";
import { useProducts } from "../context/ProductsContext";

export default function Productos() {
  const { productos, cargando, error } = useProducts();
  const { agregarAlCarrito } = useCartContext();
  const { esAdmin } = useAuthContext();
  const navigate = useNavigate();

  const manejarEliminar = (producto) => {
    // Navegar a la página de confirmación de eliminación
    navigate('/eliminar-producto', { state: { producto } });
  };

  const manejarEditar = (producto) => {
    // Navegar al formulario de edición
    navigate('/formulario-producto', { state: { producto } });
  };

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <ul id="lista-productos">
        {productos.map((producto) => (
          <ProductoItem
            key={producto.id}
            producto={producto}
            esAdmin={esAdmin}
            onEditar={() => manejarEditar(producto)}
            onEliminar={() => manejarEliminar(producto)}
            onAgregarCarrito={() => agregarAlCarrito(producto)}
          />
        ))}
      </ul>
      <CarritoCompras />
    </>
  );
}

const ProductoItem = ({ producto, esAdmin, onEditar, onEliminar, onAgregarCarrito }) => (
  <li>
    <h2>{producto.nombre}</h2>
    <p>Descripción: {producto.descripcion}</p>
    <img src={producto.avatar} alt={producto.nombre} width="80%" />
    <p><strong>Precio: ${producto.precio}</strong></p>
   
    <Link to={`/productos/${producto.id}`} state={{producto}}>
      <button>Más detalles</button>
    </Link>
   
    <button onClick={onAgregarCarrito}>Comprar</button>

    {/* BOTONES ADMIN - Agregar contenedor */}
    {esAdmin && (
      <div className="btn-admin-container">
        <hr/>
        <button onClick={onEditar} className="btn-editar">
          Editar
        </button>
        <button onClick={onEliminar} className="btn-eliminar">
          Eliminar
        </button>
      </div>
    )}
  </li>
);
