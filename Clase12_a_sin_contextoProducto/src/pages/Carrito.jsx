import React from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export default function CarritoCompras() {
  const { carrito, vaciarCarrito, agregarCantidad, quitarCantidad, total  } = useCartContext();

  const navigate = useNavigate();

  const irAPagar = () => {
    navigate("/pagar", { state: { carrito } });
  };

  return (
    <div>
      <hr />
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {carrito.map((item) => (
            <div key={item.id}>
                {item.nombre} - ${Number(item.precio).toFixed(3)}
                (Cantidad: {item.cantidad || 1})
                <button onClick={() => quitarCantidad(item.id)}>-</button>
                 <button onClick={() => agregarCantidad(item.id)}>+</button>
            </div>
          ))}
          <div>
            <hr />
            Total: ${Number(total).toFixed(3)}
          </div>
          <button onClick={vaciarCarrito}>Vaciar Carrito</button>
          <button onClick={irAPagar}>Pagar</button>
        </>
      )}
    </div>
  );
}
