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
      <Link to="/LoggedPage" style={{ textDecoration: 'none' }}>
      <Button variant="outlined" >Log In</Button>
      </Link>
      <br/>
      <Link to="/OlvidoContrasenaPage" style={{ textDecoration: 'none' }}>
      <Button variant="text" ><h4>Me olvide la contraseña</h4></Button>
      </Link>
      <h4>Si usted no está registrado toque <Link to ="/SignUpPage" style={{ textDecoration: 'none'}}>
      <Button variant="text" >aqui</Button>
      </Link>
      </h4>
    </div>
  );
}

export default LogInPage;