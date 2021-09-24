import './App.css';
import DrawerLogged from './componentes/DrawerLogged';
import {Link} from "react-router-dom";
import ControlGrid from './componentes/ControlGrid';



function PacienteProfile() {
  return (
    <div className="App">

      <DrawerLogged/>
        <h1>Nombre Paciente</h1>

      <ControlGrid />

      
    
    </div>
  );
}

export default PacienteProfile;