import Montaje from './Montaje'
import Actualizacion from './Actualizacion'
import Desmontaje from './Desmontaje'
import Temporizador from './Temporizador'
import MockAPI from './MockAPI'
import Perfil_ID_API from './Perfil_ID_API'


import './App.css'


import React from 'react'
import EcommerceTotal from './EcommerceTotal'

function App() {
  return (
    <div>
      <h1>Clase #5 | useEffect + API</h1>
      <h2>useEffect</h2>
      <h3>Montaje | Mount</h3>
      <Montaje />
      <h3>Actualización | Update</h3>
      <Actualizacion />
      <h3>Desmontaje | Limpieza o cleanup</h3>
      <Desmontaje />
      <br />
      <h3>Ejemplos de useEffect</h3>
      <Temporizador />
      <br />
      <hr />
      <h3>Implementación de useEffect con API</h3>
      <MockAPI />
      <Perfil_ID_API />
      <hr />
      <h3>Ejercicio #5</h3>
      <EcommerceTotal />
    </div>
  )
}

export default App
