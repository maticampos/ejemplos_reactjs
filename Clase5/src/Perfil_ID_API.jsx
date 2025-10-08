import React, { useEffect, useState } from 'react';

function PerfilUsuario({ id }) {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    console.log(`Iniciando carga de datos para el usuario con ID: ${id}`);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { signal })
      .then(response => response.json())
      .then(data => {
        setUsuario(data);
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          console.log(`Solicitud abortada para el usuario con ID: ${id}`);
        } else {
          console.error(`Error al cargar datos del usuario con ID ${id}:`, error);
        }
      });

    return () => {
      console.log(`Cleanup ejecutado: cancelando solicitud para el usuario con ID ${id} (por cambio de ID o desmontaje del componente)`);
      controller.abort();
    };
  }, [id]);

  return (
    <div>
      <h3>Perfil del Usuario {id}</h3>

      {usuario && usuario.name ? (
        <div>
          <p><strong>Nombre:</strong> {usuario.name}</p>
          <p><strong>Email:</strong> {usuario.email}</p>
          <p><strong>Ciudad:</strong> {usuario.address.city}</p>
        </div>
      ) : (
        <p>Usuario no encontrado</p>
      )}
    </div>
  );
}

// Componente principal
function Perfil_ID_API() {
  const [usuario, setUsuario] = useState(1);

  return (
    <div>
      <h1>Ejemplo de Perfil de Usuario</h1>

      <div>
        <button onClick={() => setUsuario(1)}>Usuario 1</button>
        <button onClick={() => setUsuario(2)}>Usuario 2</button>
        <button onClick={() => setUsuario(3)}>Usuario 3</button>
        <button onClick={() => setUsuario(999)}>Usuario Inexistente</button>
        <button onClick={() => setUsuario(null)}>Desmontar Componente</button>
      </div>

      {usuario !== null && <PerfilUsuario id={usuario} />}
    </div>
  );
} export default Perfil_ID_API;