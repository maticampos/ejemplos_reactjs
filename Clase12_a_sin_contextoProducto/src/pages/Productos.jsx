import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CarritoCompras from "./Carrito";

import { useCartContext } from "../context/CartContext";
import { useAuthContext } from "../context/AuthContext";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
 
  // Contexto 
  const { agregarAlCarrito } = useCartContext();
  const { usuario } = useAuthContext();

  const esAdmin = usuario?.nombre === "admin";

useEffect(() => {
    fetch("https://68d482e3214be68f8c696ae2.mockapi.io/api/productos")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        {console.error("Error!,", error)}
        setError("Hubo un problema al cargar los productos.");
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <ul id="lista-productos">
        {productos.map((producto) => (
          <li key={producto.id}>
            <h2>{producto.nombre}</h2>
            <br />
            Descripción: {producto.descripcion}
            <br />
            <br/>
            Precio: ${producto.precio}
            <br />
            <br/>
            <img src={producto.avatar} alt={producto.nombre} width="80%" />
            <br />
            <Link to={`/productos/${producto.categoria || 'sin-categoria'}/${producto.id}`} state={{producto}}>
              <button>Más detalles</button>
            </Link>
            <button onClick={() => agregarAlCarrito(producto)}>Comprar</button>

            {/* Botón Editar - SOLO visible para admin */}
            {esAdmin && (
              <div>
                <hr/>
                <button
                  onClick={() =>
                    navigate("/editar-productos", {
                      state: { producto: producto },
                    })
                  }
                  style={{
                    backgroundColor: "#28a745",
                    color: "white",
                    marginRight: "10px",
                  }}
                >
                  Editar
                </button>

                 <button
                  onClick={() =>
                    navigate("/eliminar-productos", {
                      state: { producto: producto },
                    })
                  }
                  style={{
                    backgroundColor: "#dc3545",
                    color: "white",
                    marginRight: "10px",
                  }}
                >
                  Eliminar
                </button>

                </div>
            )}

          </li>
        ))}
      </ul>
      <CarritoCompras />
    </>
  );
}