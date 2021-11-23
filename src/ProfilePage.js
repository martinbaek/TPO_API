import './App.css';
import Bienvenida from './componentes/Bienvenida';
import Drawer from './componentes/Drawer';
import Chicosjuntos from "./img/Chicosjuntos.jpg";
import DrawerLogged from './componentes/DrawerLogged';
import IconoPaciente from './componentes/IconoPaciente';
import ProfileGrid from './componentes/ProfileGrid';
import EditButton from './componentes/EditButton';
import {getUserByMail} from "./controller/miApp.controller";
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
import CardTemaBoton from "./components/Card/CardTemaBoton";
//import CartTema from "./Card/CardTema";

const useStyles = makeStyles(styles);

function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const perfilClass = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const [usuario,setUsuario]=React.useState('');

  console.log("cargacomponente");
  useEffect(()=>{
    async function componentDidMount() 
    {
      //traer imagenes de User
      let rdo = await getUserByMail();
      setUsuario(rdo); 
    }
    componentDidMount();
  },[]);

  const getUserByMail = async function(){
    console.log("Perfil",usuario)
    let rdo = await getUserByMail();
    setUsuario(rdo);

    console.log("Perfil",usuario)
    console.log("rdoPerfil",rdo)

  }

  return (
    <div>
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div>
        <div className={classes.container}>
          
          <GridContainer>
            {usuario => {          
              let mail = mail;
              let name = name;
              console.log("Perfil",usuario);
              return (
                <GridItem xs={12} sm={4} md={4} className={classes.GridItem}>
                  <CardTemaBoton
                    color={"gray"}
                    subtitulo={""}
                    colorBoton= "rose"
                    titulo={mail}
                  >
                  </CardTemaBoton>
                  
                </GridItem>
              );
            }}
          </GridContainer>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default ProfilePage;