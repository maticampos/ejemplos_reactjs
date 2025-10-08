import { useEffect, useState } from 'react';

const ContadorClic = () => {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    const capturaClick = () => {
      console.log('hizo clic');
      setClicks(prevClicks => prevClicks + 1);
    };

    document.addEventListener('click', capturaClick);

    return () => {
      {console.log("Limpieza realizada.")}
      document.removeEventListener('click', capturaClick);
    };
  }, []);
  return <h1>{clicks}</h1>;
};

const Desmontaje = () => {
  const [mostrar, setMostrar] = useState(true);

  return (
    <div>
      {mostrar && <ContadorClic />}
      <button onClick={() => setMostrar(!mostrar)}>Mostrar/Ocultar</button>
    </div>
  );
}; export default Desmontaje;