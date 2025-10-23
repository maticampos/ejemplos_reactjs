import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

export default function CarritoCompras() {
  const { carrito, vaciarCarrito, setCarrito } = useAppContext();

  const navigate = useNavigate();

  const irAPagar = () => {
    navigate("/pagar", { state: { carrito } });
  };

    const quitarCantidad = (idProducto) => {
    const carritoActualizado = carrito.map(producto => {
      if (producto.id === idProducto) {
        const cantidadActual = producto.cantidad || 1;
        if (cantidadActual === 1) {
          return null;
        }
        return { ...producto, cantidad: cantidadActual - 1 };
      }
      return producto;
    }).filter(producto => producto !== null);

    setCarrito(carritoActualizado);
  };

    const agregarCantidad = (idProducto) => {
    const nuevoCarrito = carrito.map(producto => {
      if (producto.id === idProducto) {
        return {
          ...producto,
          cantidad: (producto.cantidad || 1) + 1
        };
      }
      return producto;
    });
    setCarrito(nuevoCarrito);
  };

  const total = carrito.reduce((sum, item) => {
    const cantidad = item.cantidad || 1;
    return sum + (Number(item.precio) * cantidad);
  }, 0);

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
