import './App.css';
import Bienvenida from './componentes/Bienvenida';
import Drawer from './componentes/Drawer';
import Chicosjuntos from "./img/Chicosjuntos.jpg";
import DrawerLogged from './componentes/DrawerLogged';
import IconoPaciente from './componentes/IconoPaciente';
import ProfileGrid from './componentes/ProfileGrid';
import EditButton from './componentes/EditButton';
import {getPerfil} from "./controller/miApp.controller";
import React,{useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "./components/css/profilePage.js";
//import Button from "components/CustomButtons/Button.js";
import GridContainer from "./components/Grid/GridContainer.js";
import GridItem from "./components/Grid/GridItem.js";
//import CustomFileInput from ".cp,`pmemts/CustomFileInput/CustomFileInput.js";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import Button from "./components/CustomButtons/Button.js";
import Card from "./components/Card/Card";
//import CartTema from "./Card/CardTema";

const useStyles = makeStyles(styles);

function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const [usuario,setUsuario]=React.useState('');
  const [email,setEmail]=React.useState('');
  const[name,setName]=React.useState('');
  const[dni,setDni]=React.useState('');
  const[obraSocial,setObraSocial]=React.useState('');
  const[plan,setPlan]=React.useState('');
  const[afiliado,setAfiliado]=React.useState('');
  const[direccion,setDireccion]=React.useState('');
  const[cp,setCp]=React.useState('');
  const[ciudad,setCiudad]=React.useState('');
  const[usuarioValido,setUsuarioValido]=React.useState(false);

  const handleEmail=(event)=>{
    setEmail(event.target.value);
  }
  const handleName=(event)=>{    
    setName(event.target.value);
  }
  const handleDni=(event)=>{    
    setDni(event.target.value);
  }
  const handleObraSocial=(event)=>{    
    setObraSocial(event.target.value);
  }
  const handlePlan=(event)=>{    
    setPlan(event.target.value);
  }
  const handleAfiliado=(event)=>{    
    setAfiliado(event.target.value);
  }
  const handleDireccion=(event)=>{    
    setDireccion(event.target.value);
  }
  const handleCp=(event)=>{    
    setCp(event.target.value);
  }
  const handleCiudad=(event)=>{    
    setCiudad(event.target.value);
  }

  console.log("cargacomponente");
  useEffect(()=>{
    async function componentDidMount() 
    {
      //traer imagenes de User
      let p = await getPerfil();
      setUsuario(p.user);
      setUsuarioValido(true);
      console.log(usuario)
    }
    componentDidMount();
  },[]);

  const cargarPerfil = async function(){
    console.log("Perfil",usuario)
    let rdo = await getPerfil();
    setUsuario(rdo);
    setUsuarioValido(true);

    console.log("Perfil",usuario)
    console.log("rdoPerfil",rdo)

  }
  return (
    <div>
      <DrawerLogged/>
    <div>
      {cargarPerfil}
      <div className="App-principal" >
      <h3>{usuario.name}</h3>
      <h3>{usuario.email}</h3>
      <h3>{usuario.dni}</h3>
      <h3>{usuario.obraSocial}</h3>
      <h3>{usuario.plan}</h3>
      <h3>{usuario.afiliado}</h3>
      <h3>{usuario.direccion}</h3>
      <h3>{usuario.cp}</h3>
      <h3>{usuario.ciudad}</h3>

      </div>
    </div>
      
    </div>
  );
}

export default ProfilePage;