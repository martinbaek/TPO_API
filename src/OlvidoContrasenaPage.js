import './App.css';
import DrawerLogIn from './componentes/DrawerLogIn';
import LogIn from './componentes/LogIn';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import OlvidoMail from './componentes/OlvidoMail';

function OlvidoContrasenaPage() {
  return (
    <div className="App">
      <DrawerLogIn/>
      <h1>Olvido de contraseña</h1>
      <OlvidoMail/>
      <Button color='secondary' >Enviar mail</Button>
      <h4>Si usted no está registrado toque <Link to ="/SignInPage" >aqui</Link></h4>
    </div>
  );
}

export default OlvidoContrasenaPage;