import './App.css';
import DrawerLogIn from './componentes/DrawerLogIn';
import SignIn from './componentes/SignIn';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Link} from "react-router-dom";

import React, { useEffect } from "react";
import {Redirect} from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockIcon from '@material-ui/icons/Lock';
// core components
import GridContainer from "./components/Grid/GridContainer.js";
import GridItem from "./components/Grid/GridItem.js";
import Button from "./components/CustomButtons/Button.js";
import Card from "./components/Card/Card";
import CardBody from "./components/Card/CardBody.js";
import CardHeader from "./components/Card/CardHeader.js";
import CardFooter from "./components/Card/CardFooter.js";
import CustomInput from "./components/CustomInput/CustomInput.js";
import styles from   "./components/css/loginPage.js";
import image from "./img/landing-bg.jpg";

//importo llamada a endpoint
import {login} from "./controller/miApp.controller";

const useStyles = makeStyles(styles);

export default function SignInPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [email,setEmail]=React.useState('');
  const[password,setPassword]=React.useState('');
  const[usuarioValido,setUsuarioValido]=React.useState(false);
  
  setTimeout(function() {
    setCardAnimation("");
  }, 100);
 
  const classes = useStyles();
  const { ...rest } = props;

  const handleEmail=(event)=>{
      setEmail(event.target.value);
  }
  const handlePassword=(event)=>{    
      setPassword(event.target.value);
  }
  
  
  //Ejecuto el endopoint para validar login
  const validarLogin= async function()
  {
      let datos = {
        email: email,
        password:password
      }
      let getLogin = await login(datos);
      if (getLogin.rdo===0 )
      {
        setUsuarioValido(true);
      }
      if (getLogin.rdo===1)
      {
        alert(getLogin.mensaje)
      }
      
  }
  
  //Valido campos y llamo endpoint
  const loginUser=()=>
  {
    if (email!=="" && password!=="")
    {
      validarLogin();
    }
    else
    {
      alert("Debe completar usuario y password");
    }
    
    
  }  
  const redirect= ()=>{
    if (usuarioValido) {

      return <Redirect to='/Main' />
    }
    

  } 
  return (
    <div className="App">

      <DrawerLogIn/>
      <SignIn/>
      <h4>Si usted está registrado toque <Link to ="/LogInPage" >aqui</Link></h4>
      <h4>Si usted no conoce su código postal busquelo
           <a href="https://www.correoargentino.com.ar/formularios/cpa" target="_blank"> aqui</a>
      </h4>
      <Button color='secondary' >Sign In</Button>
    </div>
  );
}

export default SignInPage;