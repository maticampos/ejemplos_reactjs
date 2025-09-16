import './Tarjeta.css'

function Tarjeta({ titulo, descripcion, botonTexto }) {
    return (
        <div className="tarjeta">
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <button>{botonTexto}</button>
        </div>
    );
}
export default Tarjeta;