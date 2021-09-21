import './App.css';
import Bienvenida from './componentes/Bienvenida';
import Drawer from './componentes/Drawer';
import orejas from "./img/orejas.jpg"
import Cabeza from "./img/cabeza.jpg"
import ojos from "./img/ojos.jpg"
import boca from "./img/boca.jpg"
import piel from "./img/piel.jpg"
import corazon from "./img/corazon.jpg"
import caderas from "./img/caderas.jpg"
import abdomen from "./img/abdomen.jpg"
import genitales from "./img/genitales.jpg"



function ControlesMedicos() {
  return (
    <div className="App">

      <Drawer/>
      <h4>
      Controles Médicos:
      </h4>
      <h4>
      Durante el control, el médico realizará un examen físico a su bebé. Mencioná cualquier preocupación
      que tengas o cualquier área que desees que el médico revise.
      </h4>
      <h4>
       A continuación, te ofrecemos los conceptos básicos para tener en cuenta:
      </h4>
      <p>
        • Cabeza:
        <img src={Cabeza} align="left" width="200" height="101"></img>
        <h4>
           El médico revisará las partes blandas (fontanelas) en la cabeza de tu bebé.
        </h4>
        <h4>
           El punto más pequeño de la parte posterior de la cabeza suele cerrarse a los dos o tres meses de edad.
        </h4>
        <h4>
           La fontanela más grande en el frente a menudo se cierra alrededor de los 18 meses.
        </h4>
      </p>
      
      <p>
        • Orejas:
        <img src={orejas} align="left" width="200" height="101"></img>
        <h4>
           El médico usará un instrumento llamado otoscopio para controlar que ese sano.
        </h4>
        <h4>
          También observará la respuesta de tu bebé a diferentes sonidos (¡incluido el tuyo!).
        </h4>
      </p>

      
      <p>
        • Ojos:
        <img src={ojos} align="left" width="200" height="101"></img>
        <h4>
        El médico observará los ojos de tu bebé con un instrumento llamado oftalmoscopio.
        </h4>
      </p>

      <p>
        • Boca:
        <img src={boca} align="left" width="200" height="101"></img>
        <h4>
        El médico revisará paladar de la boca de tu bebé para ver si hay una abertura. 
        </h4>
      </p>
     
      <p>
        • Piel:
        <img src={piel} align="left" width="200" height="101"></img>
        <h4>
        Durante el examen se podrían identificar varias enfermedades de la piel, marcas de nacimiento o sarpullidos.
        </h4>
      </p>

      <p>
        • Corazón y pulmones:
        <img src={corazon} align="left" width="200" height="101"></img>
        <h4>
        El médico utilizará un estetoscopio para detectar cualquier sonido o ritmo cardíaco anormal o dificultades para respirar
        </h4>
      </p>

      <p>
        • Abdomen:
        <img src={abdomen} align="left" width="200" height="101"></img>
        <h4>
        Al presionar suavemente el vientre de tu bebé, el médico puede detectar sensibilidad, órganos agrandados o masas inusuales.
        </h4>
      </p>

      <p>
        • Caderas y Piernas:
        <img src={caderas} align="left" width="200" height="101"></img>
        <h4>
        El médico podría mover las piernas de tu bebé para controlar que no haya dislocación u otros problemas con las articulaciones de la cadera.
        </h4>
      </p>

      <p>
        • Genitales:
        <img src={genitales} align="left" width="200" height="101"></img>
        <h4>
        El médico inspeccionará los genitales de tu bebé para detectar sensibilidad, bultos u otros signos de infección.
        </h4>
      </p>



    </div>
  );
}



export default ControlesMedicos;