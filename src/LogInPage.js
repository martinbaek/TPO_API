import './App.css';
import DrawerLogIn from './componentes/DrawerLogIn';
import LogIn from './componentes/LogIn';

function LogInPage() {
  return (
    <div className="App">

      <DrawerLogIn/>
      <LogIn/>
      <h4>Si usted no está registrado toque el boton de SIGN IN arriba a la derecha.</h4>
    </div>
  );
}

export default LogInPage;