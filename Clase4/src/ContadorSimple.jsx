import { useState } from 'react';

function EcommerceSimple() {

  {/* Lista de Productos */} 
    const listaProductos = [
    { id: 1, nombre: 'Camiseta', precio: 15.000 },
    { id: 2, nombre: 'Pantalón', precio: 30.000 },
    { id: 3, nombre: 'Zapatos', precio: 50.000 },
    ];

    {/* Variable de estado carrito*/}
    const [carrito, setCarrito] = useState([]);

    {/* Función Agregar Carrito*/}
    const agregarCarrito = (producto) => {
      setCarrito([...carrito, producto]);
    };

    { /* Función Vaciar Carrito */}
    const vaciarCarrito = () => {
      setCarrito([]);
    };

    {/* Retorno UI o gráfico del componente */}

    return (
      <div id="tarjeta">
        <h3>Productos</h3>
        <ul>
          {listaProductos.map((producto) => ( // aplica método .map() sobre la lista "listaProductos" y el parámetro "producto" es la variable de iteración que recorre cada objeto de la lista.
            <li key={producto.id}> {/* usa prducto.id como clave de identificación única del objeto*/}
              {producto.nombre}: ${producto.precio.toFixed(3)} {/* Muestra adentro del <li> el nombre del producto y el precio.con(3)decimales */}
              <button onClick={() => agregarCarrito(producto)}>Agregar</button> {/* El botón "Agregar contiene el llamado a la función "agregarCarrrito" cuando se hace onClick sobre él que modifica la cariable carrito con setCarrito, agregando el producto del botón que se haga click */}
            </li>
          ))}
        </ul>
        <h2>=============================</h2>
        <h3>Carrito</h3>
        {carrito.map((producto) => ( // aplica .map() sobre la variable de estado carrito para mostrar los productos fueron agregados.
          <p key={producto.id}>
            {producto.nombre}: ${producto.precio.toFixed(3)}
          </p>
        ))}
        <button onClick={vaciarCarrito}>Eliminar</button> {/* invoca a la función eliminar carrito que sobrescribe un array vación ([]) eliminando todo lo almacenado */}
      </div>
    );
  }; export default EcommerceSimple;



