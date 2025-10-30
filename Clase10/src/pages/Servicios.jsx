import React from 'react'
import { Link } from 'react-router-dom'

function Servicios() {
  return (
    <>
    <h1>Servicios</h1>
            <hr />
    <div style={{ width: '85%', margin: '0 auto' }}>

        <p>La creación de juegos de mesa es un arte que hunde sus raíces en los albores de la civilización. Desde el antiguo Senet egipcio hasta el estratégico Go chino y el Ajedrez de origen indio-persa, estos entretenimientos han funcionado como un espejo de las sociedades, reflejando sus conflictos, rituales y estructuras de poder. En sus inicios  ligados a las élites y a prácticas religiosas o adivinatorias, su propósito siempre ha sido un medio que combina el aprendizaje, el ocio y el entretenimiento. Durante el siglo XX con ejemplos como el Monopoly y el Scrabble, se democratizaron hasta convertirse en un pilar del ocio familiar.</p>
        <p>Sim embargo, el rol de los juegos de mesa trasciende el mero pasatiempo. En la infancia, son herramientas lúdicas fundamentales para aprender a ciertas reglas y habilidades, gestionar la frustración, fomentar la participación igualitaria por turnos y desarrollar el pensamiento lógico. En la adultez, se revelan como poderosos aliados para la salud cognitiva. La práctica regular con juegos de estrategia o memoria estimula la creación de nuevas conexiones neuronales, mantiene la plasticidad cerebral, ejercita la memoria y la velocidad de razonamiento.</p>
        <p>La participación en una partida pone en marcha un amplio espectro de habilidades que benefician al individuo en múltiples facetas de su vida. A nivel cognitivo, se potencian el pensamiento estratégico —con la anticipación de movimientos—, la planificación de recursos y la resolución de problemas bajo presión. En el ámbito social y emocional, se fomenta la comunicación efectiva, la negociación, el trabajo en equipo (especialmente en los juegos cooperativos) y, de forma crucial, la empatía, al obligar a los jugadores a considerar las perspectivas y estrategias de sus rivales. En esencia, el tablero se convierte en un micromundo donde se practican, de manera segura y lúdica, las complejas interacciones y decisiones de la vida real.</p>
        <Link to="/"><button>Volver al Inicio</button></Link>
    </div>
    </>
  )
}

export default Servicios