import './App.css';
import Bienvenida from './componentes/Bienvenida';
import Drawer from './componentes/Drawer';
import Chicosjuntos from "./img/Chicosjuntos.jpg";
import DrawerLogged from './componentes/DrawerLogged';

function LoggedPage() {
  return (
    <div className="App">

      <DrawerLogged/>

      <img src="./img/CalendarioVacunacion.jpg"/>
    </div>
  );
}

export default LoggedPage;