import './App.css';
import Bienvenida from './componentes/Bienvenida';
import Drawer from './componentes/Drawer';
import Chicosjuntos from "./img/Chicosjuntos.jpg";
import DrawerLogged from './componentes/DrawerLogged';
import IconoPaciente from './componentes/IconoPaciente';
import {Link} from "react-router-dom";
import {getNinos} from "./controller/miApp.controller";
import React,{useEffect} from "react";
import Button from "./components/CustomButtons/Button.js";
import Stack from '@mui/material/Stack';
import { makeStyles } from "@material-ui/core/styles";
import styles from "./components/css/profilePage.js";

const useStyles = makeStyles(styles);
function PacientePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const [ninos,setNinos]=React.useState('');
  const[usuarioValido,setUsuarioValido]=React.useState(false);


  console.log("cargacomponente");
  useEffect(()=>{
    async function componentDidMount() 
    {
      //traer imagenes de User
      let p = await getNinos();
      setNinos(p);
      setUsuarioValido(true);
      console.log(ninos)
    }
    componentDidMount();
  },[]);

  const cargaNinos = async function(){
    console.log("Ninos",ninos)
    let rdo = await getNinos();
    setNinos(rdo);
    setUsuarioValido(true);

    console.log("Ninos",ninos)
    console.log("rdoNinos",rdo)

  }

  return (
    <div className="App">

      <DrawerLogged/>

      <Stack direction="column" spacing={2}>
      <Link to="/PacienteProfile" style={{ textDecoration: 'none' }}>
      <Button variant="contained" href="#contained-buttons" >
        Chico 1
      </Button>
      </Link>
      <Link to="/PacienteProfile" style={{ textDecoration: 'none' }}>
      <Button variant="contained" href="#contained-buttons" >
        Chico 2
      </Button>
      </Link>
      <Link to="/PacienteProfile" style={{ textDecoration: 'none' }}>
      <Button variant="contained" href="#contained-buttons" >
        Chico 3
      </Button>
      </Link>
      <Link to="/SignUnPaciente" style={{ textDecoration: 'none' }}>
      <Button variant="contained" href="#contained-buttons" >
        Agregar Chico
      </Button>
      </Link>
    </Stack>
    </div>
  );
}

export default PacientePage;
