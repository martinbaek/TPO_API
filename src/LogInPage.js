import './App.css';
import DrawerLogIn from './componentes/DrawerLogIn';
import LogIn from './componentes/LogIn';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';

function LogInPage() {
  return (
    <div className="App">
      <DrawerLogIn/>
      <h1>LOG IN</h1>
      <LogIn/>
      <Link to="/LoggedPage">
      <Button color='secondary' >Log In</Button>
      </Link>
      <Link to="/OlvidoContrasenaPage">
      <h4>Me olvide la contraseña</h4>
      </Link>
      <h4>Si usted no está registrado toque <Link to ="/SignUpPage" >aqui</Link></h4>
    </div>
  );
}

export default LogInPage;