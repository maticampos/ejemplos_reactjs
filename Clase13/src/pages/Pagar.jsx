import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../context/AuthContext';
import { useCartContext } from '../context/CartContext';


export default function Pagar() {
  const { usuario, cerrarSesion } = useAuthContext();
  const { carrito, total, vaciarCarrito } = useCartContext();
  const navigate = useNavigate();


  const tokenActual = localStorage.getItem('authToken');


  // Función para finalizar compra
  const comprar = () => {
    alert("¡Compra realizada con éxito!");
    vaciarCarrito(); // Limpiar carrito después de comprar
    navigate("/productos");
  };


  return (
    <>
      {/* Info del usuario */}
      <div>
        <h2>Hola {usuario.nombre}</h2>
        <p>Email: {usuario.email}</p>
       
        {/* Estilo para el Token */}
        <div style={{
          background: '#f0f0f0',
          padding: '8px',
          borderRadius: '4px',
          margin: '10px 0',
          fontSize: '12px',
          wordBreak: 'break-all'
        }}>
          <strong>Token:</strong> {tokenActual}
        </div>
        <button onClick={cerrarSesion}>Cerrar sesión</button>
        <hr />
      </div>


      {/* Carrito */}
      <div className="p-5">
        <h2 className="mb-4">Tu compra:</h2>


        {carrito.length > 0 ? (
          <>
            {carrito.map((producto) => {
              const cantidad = Number(producto.cantidad || 1);
              const precioUnitario = Number(producto.precio || 0);
              const subtotal = cantidad * precioUnitario;
              return (
                <div key={producto.id} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <img src={producto.avatar} alt={producto.nombre} width="100"
 />
                  <div>
                    <div className="fs-5 fw-bold text-success">{producto.nombre}</div>
                    <div>Precio unidad: ${Number(precioUnitario).toFixed(3)}</div>
                    <div className="border-bottom">Cantidad: {cantidad}</div>
                    <div className="mb-4"><strong>Subtotal: ${Number(subtotal).toFixed(3)}</strong></div>
                  </div>
                </div>
              );
            })}
            <hr />
            <h3 className="fs-4 fw-bold text-dark bg-light rounded-4 p-3 shadow-sm">Total a pagar: ${Number(total).toFixed(3)}</h3>
          </>


        ) : (
          <p>No hay productos en el carrito</p>
        )}
      </div>
<div>
        <button className="me-2" onClick={vaciarCarrito}>
          Vaciar Carrito
        </button>
      </div>


      <div className="mt-2">
        <button className="me-2" onClick={() => navigate("/productos")}>
          {carrito.length > 0 ? "Seguir Comprando" : "Volver a Productos"}
        </button>
        {carrito.length > 0 && (
          <button onClick={comprar}>
            Confirmar y Pagar
          </button>
        )}
      </div>
    </>
  );
}


