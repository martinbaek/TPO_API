import './App.css';
import DrawerSignIn from './componentes/DrawerSignIn';
import SignIn from './componentes/SignIn';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    title: {
        display: 'flex', 
        marginLeft: 'auto'
      },
}));
function SignInPage() {
    const classes = useStyles();
  return (
    <div className="App">

      <DrawerSignIn/>
      <SignIn/>
      <h4>Si usted está registrado toque el boton de LOG IN arriba a la derecha.</h4>
      <h4>Si usted no conoce su código postal busquelo
           <a href="https://www.correoargentino.com.ar/formularios/cpa" target="_blank"> aqui</a>
      </h4>
      <Button color='secondary' >Sign In</Button>
    </div>
  );
}

export default SignInPage;