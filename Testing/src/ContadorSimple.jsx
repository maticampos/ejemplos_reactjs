{/* useState con evento onClick */}

import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div id="tarjeta">
      <h5>useState con evento onClick</h5>
      <h1>Contador simple</h1>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>Contador</button>
    </div>
  );
} export default Contador

{/* 



const [contador, setContador] = useState(valorInicial);
  Es la variable de estado.
  
contador: es variable con el valor actual o incial del estado. 

setContador: 
es la función que actualiza el estado y ejecuta el nuevo renderizado del componente.

valorInicial: el valor inicial del estado (puede ser un primitivo(string, número, Bool), objeto, array, etc.).

*/ }
