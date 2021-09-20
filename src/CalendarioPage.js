import './App.css';
import Bienvenida from './componentes/Bienvenida';
import Drawer from './componentes/Drawer';
import Chicosjuntos from "./img/Chicosjuntos.jpg";
import DrawerLogged from './componentes/DrawerLogged';
import CalendarioVacunacion from "./img/CalendarioVacunacion.jpg";


function LoggedPage() {
  return (
    <div className="App">

      <DrawerLogged/>

      <img src={CalendarioVacunacion} alt="calendario" width="1100" height="500"></img>
    </div>
  );
}

export default LoggedPage;