import { Link, useParams, useLocation } from "react-router-dom";
import styled from 'styled-components';


const ProductoDetalle = () => {
 
    const { id } = useParams();
    const location = useLocation();
    const producto = location.state?.producto;
 
    // if (!producto) {
    //     return (
    //         <div className="container-md py-3">
    //             <div className="alert alert-warning">
    //                 <h4>Producto no encontrado</h4>
    //                 <p>No se pudo cargar la información del producto</p>
    //                 <Link to="/carrito" className="btn btn-primary">
    //                     Volver a Productos
    //                 </Link>
    //             </div>
    //         </div>
    //     );
    // }
 
    return(
        <>
            <h2>Detalles del Producto {id}</h2>
            <ul>
                <li key={producto.id}>
                    {producto.nombre}
                    <br />
                    <p><strong>Descripción: </strong>{producto.descripcion}</p>
                    <p>Precio: ${producto.precio}</p>
                    <img src={producto.avatar} alt={producto.nombre} width="30%" />
                </li>
                <hr />
                <Link to={`/productos`}>
                    <BotonEstilizado>Volver</BotonEstilizado>
                </Link>
            </ul>
        </>
    );
}; export default ProductoDetalle;


const BotonEstilizado = styled.button`
  background: white;
  color: black;
  border: 1px solid black;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;


  &:hover {
    background: #31312eff;
    color: white;


  }
`;