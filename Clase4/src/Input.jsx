{/* useState con evento onChange */}

import { useState } from 'react';

function Input() {
  const [nombre, setNombre] = useState(''); 
  
const manejarCambio = (e) => {
    setNombre(e.target.value); 
  };

  return (
    <div id="tarjeta">
      <h5>useState con evento onChange</h5>
        <h2>Ingrese su nombre y apellido</h2>
      <input
        type="text"
        value={nombre}
        onChange={manejarCambio}
        placeholder="Escribe tu nombre"
      />
      <p>¡Hola, {nombre || 'Anónimo'}!</p>
    </div>
  );
} export default Input;

{/* 
    
La función: manejarCambio: 
    se ejecuta cada vez que el usuario escribe en el campo de texto (input). El parámetro e: referencia al evento (event) generado en el input, en este caso, un evento onChange (que se activa cuando se produce un cambio en el elemento <input>). 

con e.target.value:
    accede al valor actual del campo de texto (lo que el usuario escriba) y con 

setNombre(e.target.value): 
    actualiza el estado "nombre" con el nuevo valor del input. Esto asegura que el estado refleje lo que el usuario está escribiendo.

En el bloque return() donde se define la interfaz del componente:

<input
type="text": 
    define el tipo de input como  campo de texto.

value={nombre}: 
    vincula el valor del input al estado de "nombre". Esto hace que el input sea controlado y su valor gestionado por el estado de React. Si el estado "nombre" cambia, el valor del input se actualiza automáticamente.

onChange={manejarCambio}: 
    asocia el evento onChange del input con la función manejarCambio. Para que cada vez que el usuario escribe o borra algo en el input, se dispare el evento y ejecuta la función manejarCambio que aplica setNombre.

placeholder="Escribe tu nombre": 
    es el texto que muestra de ejemplo en el campo del input cuando está vacío.

<p>: muestra un mensaje dinámico con el valor de "nombre" :
{nombre || 'Anónimo'}: 
    usa el operador lógico OR (||) para mostrar el valor de nombre si existe, o 'Anónimo' si "nombre" es un string vacío (''). Esto asegura que el mensaje no quede en blanco si el usuario no ha escrito nada.

    */}