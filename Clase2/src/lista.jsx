function ListaFrutas( {frutas} ) {


    return (
        <ol>
            {frutas.map(fruta => (
                <li key={fruta}>{fruta}</li>
            ))}
        </ol>
    );
} export default ListaFrutas 