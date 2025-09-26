import React, { useEffect, useState } from 'react';


function Actualizacion() {
  const [contador, setContador] = useState(0);


useEffect(() => {
  document.title = `Contador: ${contador}`;
  console.log("Componente actualizado.");
}, [contador]); // Se ejecuta cada vez que 'contador' cambia


  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
} export default Actualizacion