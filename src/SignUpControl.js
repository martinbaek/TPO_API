import './App.css';
import DrawerLogged from './componentes/DrawerLogged';
import SignUp from './componentes/SignUp';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import CrarControlGrid from './componentes/CrarControlGrid';
import Control from './Control';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    title: {
        display: 'flex', 
        marginLeft: 'auto'
      },
}));
function SignUpControl() {
    const classes = useStyles();
  return (
    <div className="App">

      <DrawerLogged/>
      <CrarControlGrid/>
      <Link to ="./Control" > 
        <Button color='secondary' > Crear </Button>
      </Link>
    </div>
  );
}

export default SignUpControl;