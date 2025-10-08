import React, { useEffect } from 'react';


export default function Montaje() {
  useEffect(() => {
    console.log('El componente se ha montado');
  }, []); // Arreglo vacío: se ejecuta solo al montar


  return <h1>Hola, mundo</h1>;
}
