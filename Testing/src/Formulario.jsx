{/* useState con evento onSubmit */}

import { useState } from 'react';

function FormularioEnvio() {
  const [nombre, setNombre] = useState(''); 
  const [correo, setCorreo] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    console.log('Datos enviados:', { nombre, correo });
   
    // Limpiar los campos después de ejecutar el evento onSubmit
    setNombre('');
    setCorreo('');
  };

  return (
    <div id="tarjeta">
        <h5>useState con evento onSubmit </h5>
        <h2>Formulario de Envío</h2>

      <form onSubmit={manejarEnvio}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Escribe tu nombre"
          />
        </div>
       
        <div>
          <label>Correo:</label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Escribe tu correo"
          />
        </div>
        <hr />
        <button type="submit">Enviar</button>
      </form>

      <div>
        <p>Nombre: {nombre || 'Anónimo'}</p>
        <p>Correo: {correo || 'No proporcionado'}</p>
      </div>
    </div>
  );
}

export default FormularioEnvio;