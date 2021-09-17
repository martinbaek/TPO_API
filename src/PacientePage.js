import './App.css';
import Bienvenida from './componentes/Bienvenida';
import Drawer from './componentes/Drawer';
import Chicosjuntos from "./img/Chicosjuntos.jpg";
import DrawerLogged from './componentes/DrawerLogged';
import IconoPaciente from './componentes/IconoPaciente';


function PacientePage() {
  return (
    <div className="App">

      <DrawerLogged/>

      <IconoPaciente/>
    </div>
  );
}

export default PacientePage;
