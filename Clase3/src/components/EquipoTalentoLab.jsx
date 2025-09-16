import React from 'react';

function EquipoTalentoLab({ equipo }) {

  return (
    <div className="equipo-container"> 
      {equipo.map((miembro, index) => (
        <div key={index} className="tarjeta-miembro">
          <img
            src={miembro.imagen}
            alt={miembro.nombre}
            className="miembro-imagen"
          />
          <h3 className="miembro-nombre">{miembro.nombre}</h3>
          <p className="miembro-rol">{miembro.rol}</p>
        </div>
      ))}
    </div>
  );
}
export default EquipoTalentoLab;