import './App.css';
import DrawerLogIn from './componentes/DrawerLogIn';
import SignUp from './componentes/SignUp';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    title: {
        display: 'flex', 
        marginLeft: 'auto'
      },
}));
function SignUpPage() {
    const classes = useStyles();
  return (
    <div className="App">

      <DrawerLogIn/>
      <SignUp/>
      <h4>Si usted está registrado toque <Link to ="/LogInPage" >aqui</Link></h4>
      <h4>Si usted no conoce su código postal busquelo
           <a href="https://www.correoargentino.com.ar/formularios/cpa" target="_blank"> aqui</a>
      </h4>
      <Button color='secondary' >Sign Up</Button>
    </div>
  );
}

export default SignUpPage;