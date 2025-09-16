import EquipoTalentoLab from "./components/EquipoTalentoLab";
import TarjetaProyecto from "./components/TarjetaProyecto";
import GaleriaIntereses from "./components/GaleriaIntereses";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer"

function App() {
  const equipo = [
    {
      nombre: "Silvia",
      rol: "Product Owner",
      imagen: "https://picsum.photos/id/64/4326/2884",
    },
    {
      nombre: "Luis",
      rol: "Diseñador UX/UI",
      imagen:
        "https://images.unsplash.com/photo-1525457136159-8878648a7ad0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      nombre: "Matías",
      rol: "Desarrollador Frontend",
      imagen:
        "https://media.istockphoto.com/id/2195226068/es/foto/retrato-al-aire-libre-de-un-hombre-alegre-en-una-naturaleza-llena-de-sol.webp?a=1&b=1&s=612x612&w=0&k=20&c=VOeGqZTdWfIFOVQPXCdNe560phcPw53w71y8EN145BA=",
    },
    {
      nombre: "Sabrina",
      rol: "Desarrolladora Backend",
      imagen:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    },
  ];

  const intereses = ['React', 'JavaScript', 'APIs', 'Diseño UX', 'Node.js'];

  return (
    <>
    <Header />
    <Main />
      <EquipoTalentoLab equipo={equipo} />
      <TarjetaProyecto
        titulo="Web Inmersiva"
        descripcion="Un proyecto innovador para cambiar la web con tecnologías del Metaverso."
        botonTexto="Ver Más"
      />
      <GaleriaIntereses intereses={intereses}/>
      <Footer />
    </>
  );
}
export default App;
