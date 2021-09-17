import './App.css';
import Bienvenida from './componentes/Bienvenida';
import Drawer from './componentes/Drawer';
import Chicosjuntos from "./img/Chicosjuntos.jpg";
import DrawerLogged from './componentes/DrawerLogged';
import IconoPaciente from './componentes/IconoPaciente';
import ProfileGrid from './componentes/ProfileGrid';
import EditButton from './componentes/EditButton';
import CalendarioVac from './componentes/CalendarioVac';


function PacienteProfile() {
  return (
    <div className="App">

      <DrawerLogged/>
        <h1>Nombre Paciente</h1>

      <ProfileGrid />
      <br/>
      <EditButton/>
      <br/>
      <CalendarioVac/>
    </div>
  );
}

export default PacienteProfile;