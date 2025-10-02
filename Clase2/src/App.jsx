import Tarjeta from './Tarjeta.jsx'
import ListaFrutas from './lista.jsx'
import { MiBoton } from './MiBoton.jsx'

function App() {

  return (
    <>
    <h1 className="titulo"> Comenzando con React</h1>
    <h2>Ejercicios Clase #2</h2>
        <h2>Lista de Frutas</h2>
        <ListaFrutas frutas={['Manzana', 'Banana', 'Cereza', 'Durazno']} />
        <hr />
        <div>
            <Tarjeta
                titulo="Oferta"
                descripcion="20% de descuento en todos los productos"
                botonTexto="Ver más"
            />
            <Tarjeta
                titulo="Nuevo producto"
                descripcion="Descubre nuestra última innovación"
                botonTexto="Comprar ahora"
            />
            <Tarjeta
                titulo="Envío gratis"
                descripcion="En compras superiores a $50"
                botonTexto="Aprovechar"
            />
        </div>
        <hr />
        <h2>Botones Personalizados</h2>
        <MiBoton texto="Aceptar" color="green" />
        <MiBoton texto="Cancelar" color="red" />
        <MiBoton texto="Más información" color="blue" />

    </>
  )
} export default App

  

