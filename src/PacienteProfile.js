import './App.css';
import Bienvenida from './componentes/Bienvenida';
import Drawer from './componentes/Drawer';
import Chicosjuntos from "./img/Chicosjuntos.jpg";
import DrawerLogged from './componentes/DrawerLogged';
import IconoPaciente from './componentes/IconoPaciente';
import PacienteGrid from './componentes/PacienteGrid';
import EditButton from './componentes/EditButton';
import CalendarioVac from './componentes/CalendarioVac';


function PacienteProfile() {
  return (
    <div className="App">

      <DrawerLogged/>
        <h1>Nombre Paciente</h1>

      <PacienteGrid />
      <br/>
      <EditButton/>
      <br/>
      <CalendarioVac/>
    </div>
  );
}

export default PacienteProfile;