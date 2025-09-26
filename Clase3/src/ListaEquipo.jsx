function ListaEquipo({equipo}) {

  return (
    <>
    <h2>Equipo de TalentoLab</h2>
    <hr />
    <ul>
      {equipo.map(persona => (
        <li key={persona.id}>
        <b>{persona.nombre}</b>: {persona.tecnologia}
        </li>
      ))}
    </ul>
    </>
  );
} export default ListaEquipo;