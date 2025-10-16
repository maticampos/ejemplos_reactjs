import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

export default function Pagar() {
  const { usuario, cerrarSesion, carrito, vaciarCarrito } = useAppContext();
  const navigate = useNavigate();

  // Calculo del total
  const total = carrito.reduce(
    (suma, producto) => suma + Number(producto.precio),
    0
  );

  // Función para finalizar compra
  const comprar = () => {
    alert("¡Compra realizada con éxito!");
    vaciarCarrito(); // Limpiar carrito después de comprar
    navigate("/productos");
  };

  return (
    <div>
      {/* Info del usuario */}
      <div>
        <h2>{usuario.nombre}</h2>
        <p>Email: {usuario.email}</p>
        <button onClick={cerrarSesion}>Cerrar sesión</button>
        <hr />
      </div>

      {/* Carrito */}
      <div>
        <h2>Tu compra:</h2>

        {carrito.length > 0 ? (
          <>
            {carrito.map((producto) => (
              <div key={producto.id}>
                <img src={producto.avatar} alt={producto.nombre} width="60" />
                <span>{producto.nombre}</span>
                <strong>${producto.precio}</strong>
              </div>
            ))}
            <h3>Total a pagar: ${total}</h3>
          </>
        ) : (
          <p>No hay productos en el carrito</p>
        )}
      </div>
      
      <div>
        {carrito.length > 0 && (
          <button onClick={comprar}>Confirmar y Pagar</button>
        )}
        <button onClick={() => navigate("/productos")}>
          {carrito.length > 0 ? "Seguir Comprando" : "Volver a Productos"}
        </button>
      </div>
    </div>
  );
}