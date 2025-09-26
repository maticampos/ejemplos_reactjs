function BotonReutilizable({ texto, color }) {

  const estilo = {
    backgroundColor: color,
    color: 'white',
    padding: '10px',
    border: 'none'
  };

  return <button style={estilo}>{texto}</button>;

} export { BotonReutilizable };