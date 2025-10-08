import Montaje from './Montaje'
import Actualizacion from './Actualizacion'
import Desmontaje from './Desmontaje'
import Temporizador from './Temporizador'
import MockAPI from './MockAPI'
import Perfil_ID_API from './Perfil_ID_API'
import EcommerceTotal from './EcommerceTotal'
import './App.css'

function App() {
  return (
    <div>
      <h1>Clase #5 | useEffect + API</h1>
      <hr/>
      <h2>useEffect</h2>
      <h3>[a]Montaje | Mount</h3>
      <Montaje />
      <h3>[b] Actualización | Update</h3>
      <Actualizacion />
      <h3>[c]Desmontaje | Limpieza o cleanup</h3>
      <Desmontaje />
      <br />
      <hr />
      <h3>Otro Ejemplo de useEffect con evento setInterval()</h3>
      <Temporizador />
      <br />
      <hr />
      <h3>1° Implementación de useEffect con API</h3>
      <MockAPI />
      <h3>2° Implementación de useEffect con API</h3>
      <Perfil_ID_API />
      <hr />
      <h3>Ejercicio #5</h3>
      <EcommerceTotal />
    </div>
  )
}

export default App
