import { useState } from 'react';


function Hover() {
  const [estilo, setEstilo] = useState({ backgroundColor: 'white' });

  const manejarMouseOver = () => {
    setEstilo({ backgroundColor: 'green', color: "white" });
  };

  const manejarMouseOut = () => {
    setEstilo({ backgroundColor: 'white' });
  };

  return (
    <div id="tarjeta">
        <h5>useState con evento MouseOver y MouseOut</h5>
        <button
        onMouseOver={manejarMouseOver}
        onMouseOut={manejarMouseOut}
        style={estilo}
        >
        Botón con Hover
        </button>
    </div>
  );
} export default Hover;