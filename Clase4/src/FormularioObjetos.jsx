{/* Evento onSubmit */}

import { useState } from 'react';

function FormObjetos() {

  const [formulario, setFormulario] = useState({ // Variable de estado Formulario es un Objeto
    nombre: '',
    correo: ''
  });

  const manejarCambio = (e) => {
    setFormulario({
      ...formulario,  // operador de propagación o spread operator | Mantiene los valores existentes
      [e.target.name]: e.target.value  // Actualiza sólo el campo que cambió
    });
  };

  // Ejecuta al enviar el formulario
  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formulario);
   
    // Limpia
    setFormulario({
      nombre: '',
      correo: ''
    });
  };


  return (
    <div id="tarjeta">
        <h5>useState con evento onSubmit con Objetos</h5>
      <h2>Formulario de Envío</h2>
     
      <form onSubmit={manejarEnvio}>
        <div>
          <label>Nombre: </label>
          <input
            type="text"
            name="nombre"
            value={formulario.nombre}
            onChange={manejarCambio}
            placeholder="Escribe tu nombre"
          />
        </div>
       
        <div>
          <label>Correo: </label>
          <input
            type="email"
            name="correo"
            value={formulario.correo}
            onChange={manejarCambio}
            placeholder="Escribe tu correo"
          />
        </div>
        <hr />
        <button type="submit">Enviar</button>
      </form>
      <div>
        <p>Nombre: {formulario.nombre || 'Anónimo'}</p>
        <p>Correo: {formulario.correo || 'No proporcionado'}</p>
      </div>
    </div>
  );
} export default FormObjetos;