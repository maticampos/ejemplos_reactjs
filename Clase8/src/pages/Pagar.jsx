import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

export default function Pagar() {
  const { usuario, cerrarSesion, carrito, vaciarCarrito } = useAppContext();
  const navigate = useNavigate();

  // Calculo del total
  // Calcula el total x cantidad y muestra precio x unidad
  const total = carrito.reduce((suma, producto) => {
    const cantidad = Number(producto.cantidad || 1);
    const precioUnitario = Number(producto.precio || 0);
    return suma + cantidad * precioUnitario;
  }, 0);


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
            {carrito.map((producto) => {
              const cantidad = Number(producto.cantidad || 1);
              const precioUnitario = Number(producto.precio || 0);
              const subtotal = cantidad * precioUnitario;
              return (
                <div key={producto.id} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <img src={producto.avatar} alt={producto.nombre} width="60" />
                  <div>
                    <div>{producto.nombre}</div>
                    <div>Precio unidad: ${Number(precioUnitario).toFixed(3)}</div>
                    <div>Cantidad: {cantidad}</div>
                    <div><strong>Subtotal: ${Number(subtotal).toFixed(3)}</strong></div>
                  </div>
                </div>
              );
            })}
            <h3>Total a pagar: ${Number(total).toFixed(3)}</h3>
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