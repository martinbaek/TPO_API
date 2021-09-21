import './App.css';
import Bienvenida from './componentes/Bienvenida';
import Drawer from './componentes/Drawer';
import Chicosjuntos from "./img/Chicosjuntos.jpg";
import DrawerLogged from './componentes/DrawerLogged';
import IconoPaciente from './componentes/IconoPaciente';
import ProfileGrid from './componentes/ProfileGrid';
import EditButton from './componentes/EditButton';
import CalendarioVac from './componentes/CalendarioVac';
import percentil from "./img/percentil.jpg"



function Percentiles() {
  return (
    <div className="App">

      <Drawer/>
      <h4>
        ¿Quiéres conocer el percentil de tu hijo?
      </h4>
      <h4>Puedes buscarlo
           <a href="http://www.materna.com.ar/tabla-de-percentiles" target="_blank"> aqui</a>
      </h4><h4>
          Completando todos los datos
      </h4>
      <h4>
      <img src={percentil} alt="percentiles" width="500" height="201"></img>
      </h4>
      
    </div>
  );
}



export default Percentiles;