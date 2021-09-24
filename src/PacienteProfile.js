import './App.css';
import Bienvenida from './componentes/Bienvenida';
import Drawer from './componentes/Drawer';
import Chicosjuntos from "./img/Chicosjuntos.jpg";
import DrawerLogged from './componentes/DrawerLogged';
import IconoPaciente from './componentes/IconoPaciente';
import PacienteGrid from './componentes/PacienteGrid';
import EditButton from './componentes/EditButton';
import CalendarioVac from './componentes/CalendarioVac';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";



function PacienteProfile() {
  return (
    <div className="App">

      <DrawerLogged/>
        <h1>Nombre Paciente</h1>

      <PacienteGrid />
      <br/>
      <EditButton/>
      <br/>
      <h4>
        Controles pediátricos:
      </h4>
      <Link to="/Control.js" >
      <Button variant="contained" href="#contained-buttons" > 
        Controles:
      </Button>
      </Link>
      
      <br/>
      <br/>
      <h4>
        Calendario de vacunacion:
      </h4>
      <br/>
      <br/>
      <CalendarioVac/>
    </div>
  );
}

export default PacienteProfile;