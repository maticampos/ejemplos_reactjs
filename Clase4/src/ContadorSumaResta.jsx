{/* useState con evento onClick */}

import { useState } from 'react'
import './App.css' 

function ContadorSumaResta() {
  const [contador, setContador] = useState(0)

  return (
    <div id="tarjeta">
    <h5>useState con evento onClick</h5>
      <h1>Suma y Resta</h1>
      <div id="suma-resta">
        <button id="btnSuma" onClick={() => setContador((contador) => contador + 1)}>Suma</button>
        <button id="btnResta" onClick={() => setContador((contador) => contador - 1)}>Resta</button>
      </div>
      <div>Total: {contador}</div>
      <br />
      <button onClick={() => setContador(0)}>Borrar</button>
    </div>
  )}
export default ContadorSumaResta