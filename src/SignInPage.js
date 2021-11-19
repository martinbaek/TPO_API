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
  const[name,setName]=React.useState('');
  const[dni,setDni]=React.useState('');
  const[obraSocial,setObraSocial]=React.useState('');
  const[plan,setPlan]=React.useState('');
  const[afiliado,setAfiliado]=React.useState('');
  const[direccion,setDireccion]=React.useState('');
  const[cp,setCp]=React.useState('');
  const[ciudad,setCiudad]=React.useState('');
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
  const handleDireccion=(event)=>{    
    setDireccion(event.target.value);
  }
  
  
  //Ejecuto el endopoint para validar login
  const validarSign= async function()
  {
      let datos = {
        name: name,
        email: email,
        password: password,
        dni : dni,
        obraSocial: obraSocial,
        plan: plan,
        afiliado: afiliado,
        direccion: direccion,
        cp: cp,
        ciudad: ciudad
      }
      let getSignIn = await registration(datos);
      if (getSignIn.rdo===0 )
      {
        setUsuarioValido(true);
      }
      if (getSignIn.rdo===1)
      {
        alert(getSignIn.mensaje)
      }
      
  }
  
  //Valido campos y llamo endpoint
  const Signup=()=>
  {
    if (email!=="" && password!=="")
    {
      validarLogin();
    }
    else
    {
      alert("Debe completar todos los campos");
    }
    
    
  }  
  const redirect= ()=>{
    if (usuarioValido) {

      return <Redirect to='/LogInPage' />
    }
    

  } 
  return (
    <div className="App">

      <DrawerLogIn/>
      <div>
      <CustomInput
              labelText="Nombre..."
              id="name"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "name",
                onChange: (event) => handleName(event),
                endAdornment: (
                  <InputAdornment position="end">
                    <Email className={classes.inputIconsColor} />
                  </InputAdornment>
                )
              }}
            />
      <CustomInput
              labelText="Mail..."
              id="email"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "email",
                onChange: (event) => handleEmail(event),
                endAdornment: (
                  <InputAdornment position="end">
                    <Email className={classes.inputIconsColor} />
                  </InputAdornment>
                )
              }}
            />
        <CustomInput
              labelText="DNI..."
              id="dni"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "dni",
                onChange: (event) => handleDni(event),
                endAdornment: (
                  <InputAdornment position="end">
                    <Email className={classes.inputIconsColor} />
                  </InputAdornment>
                )
              }}
            />
        <CustomInput
              labelText="Password..."
              id="password"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "password",
                onChange: (event) => handlePassword(event),
                endAdornment: (
                  <InputAdornment position="end">
                    <Email className={classes.inputIconsColor} />
                  </InputAdornment>
                )
              }}
            />
        <CustomInput
              labelText="Obra Social..."
              id="obraSocial"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "obraSocial",
                onChange: (event) => handleObraSocial(event),
                endAdornment: (
                  <InputAdornment position="end">
                    <Email className={classes.inputIconsColor} />
                  </InputAdornment>
                )
              }}
            />
      <CustomInput
              labelText="Plan..."
              id="plan"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "plan",
                onChange: (event) => handlePlan(event),
                endAdornment: (
                  <InputAdornment position="end">
                    <Email className={classes.inputIconsColor} />
                  </InputAdornment>
                )
              }}
            />
        <CustomInput
              labelText="Afiliad..."
              id="afiliado"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "afiliado",
                onChange: (event) => handleAfiliado(event),
                endAdornment: (
                  <InputAdornment position="end">
                    <Email className={classes.inputIconsColor} />
                  </InputAdornment>
                )
              }}
            />
        <CustomInput
              labelText="Direccion..."
              id="direccion"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "direccion",
                onChange: (event) => handleDireccion(event),
                endAdornment: (
                  <InputAdornment position="end">
                    <Email className={classes.inputIconsColor} />
                  </InputAdornment>
                )
              }}
            />
        <CustomInput
              labelText="CP..."
              id="cp"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "cp",
                onChange: (event) => handleCp(event),
                endAdornment: (
                  <InputAdornment position="end">
                    <Email className={classes.inputIconsColor} />
                  </InputAdornment>
                )
              }}
            />
        <CustomInput
              labelText="Ciudad..."
              id="ciudad"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "ciudad",
                onChange: (event) => handleCiudad(event),
                endAdornment: (
                  <InputAdornment position="end">
                    <Email className={classes.inputIconsColor} />
                  </InputAdornment>
                )
              }}
            />
            <Button 
              simple color="primary" 
              size="lg"
              onClick={Signup}
            >
              Sign Up
            </Button>

      </div>
      <h4>Si usted está registrado toque <Link to ="/LogInPage" >aqui</Link></h4>
      <h4>Si usted no conoce su código postal busquelo
           <a href="https://www.correoargentino.com.ar/formularios/cpa" target="_blank"> aqui</a>
      </h4>
      <Button color='secondary' >Sign In</Button>
    </div>
  );
}

export default SignInPage;