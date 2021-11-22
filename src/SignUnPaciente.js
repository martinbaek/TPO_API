import './App.css';
import DrawerLogged from './componentes/DrawerLogged';
import SignIn from './componentes/SignIn';
//import Button from '@material-ui/core/Button';
//import { makeStyles, useTheme } from '@material-ui/core/styles';
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
//import image from "./img/landing-bg.jpg";

//importo llamada a endpoint
import {agregarNino} from "./controller/miApp.controller";

const useStyles = makeStyles(styles);


function SignUnPaciente (props){
  const [cardAnimaton,setCardAnimation] = React.useState("cardHidden");
  const [name,setName]=React.useState('');
  const [nacimiento,setNacimiento]=React.useState('');
  const [email,setEmail]=React.useState('');
  /*
  const [peso,setPeso]=React.useState('');
  const [altura,setAltura]=React.useState('');
  const [diametroCabeza,setDiametroCabeza]=React.useState('');
  const [medicamentos,setMedicamentos]=React.useState('');
  const [obs,setObs]=React.useState('');
  const [estudios,setEstudios]=React.useState('');
  const [resultados,setResultados]=React.useState('');
  */
  const [usuarioValido,setUsuarioValido]=React.useState(false);

  setTimeout(function() {
    setCardAnimation("");
  }, 100);

  const classes = useStyles();
  const { ...rest } = props;

  const handleName=(event)=>{
      setName(event.target.value);
  }
  const handleNacimiento=(event)=>{
      setNacimiento(event.target.value);
  }
  const handleEmail=(event)=>{
    setEmail(event.target.value);
}
  /*
  const handlePeso=(event)=>{
    setPeso(event.target.value);

  } 
  const handleAltura=(event)=>{
  setAltura(event.target.value);
  }

  const handleDiametroCabeza=(event)=>{
  setDiametroCabeza(event.target.value);
  }

  const handleMedicamentos=(event)=>{
  setMedicamentos(event.target.value);
  }

  const handleObs=(event)=>{
  setObs(event.target.value);
  }

  const handleEstudios=(event)=>{
  setEstudios(event.target.value);
  }

  const handleResultados=(event)=>{
  setResultados(event.target.value);
  }
  */

  const validarSign= async function()
  {
      let datos = {
        name: name,
        nacimiento: nacimiento,
        email: email,
        /*
        peso: peso,
        altura: altura,
        diametroCabeza : diametroCabeza,
        estudios : estudios,
        medicamentos: medicamentos,
        obs: obs,
        estudios: estudios,
        resultados: resultados,
        */
      }
      agregarNino(datos);
      setUsuarioValido(true);

      
  }
  
  //Valido campos y llamo endpoint
  const Signup=()=>
  {
    if (name!=="" && nacimiento!=="")
    {
      validarSign();
    }
    else
    {
      alert("Debe completar todos los campos");
    }
    
    
  }
 
const redirect= ()=>{
  if (usuarioValido) {

    return <Redirect to='/PacientePage' />
  }
  

} 
  return(
    <div
    className={classes.pageHeader}
    style={{
      //backgroundImage: "url(" + image + ")",
      backgroundSize: "cover",
      backgroundPosition: "top center"
    }}
    >
    {redirect()} 

    <div className={classes.container}>
     
    <DrawerLogged/>   
    <CustomInput
              labelText="Nombre..."
              id="name"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "name",
                onChange: (event) => handleName(event),
           
              }}
       />

       <CustomInput
              labelText="Nacimiento..."
              id="nacimiento"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "peso",
                onChange: (event) => handleNacimiento(event),
                
              }}
       />
      {
      /* 
       <CustomInput
              labelText="Altura..."
              id="altura"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "altura",
                onChange: (event) => handleAltura(event),
               
              }}
       />

       <CustomInput
              labelText="DiametroCabeza..."
              id="diametroCabeza"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "ndiametroCabeza",
                onChange: (event) => handleDiametroCabeza(event),
                
              }}
       />

       <CustomInput
              labelText="Medicamentos..."
              id="medicamentos"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "medicamentos",
                onChange: (event) => handleMedicamentos(event),
               
              }}
       />

       <CustomInput
              labelText="Obs..."
              id="obs"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "obs",
                onChange: (event) => handleObs(event),
               
              }}
            />

        <CustomInput
              labelText="Estudios..."
              id="estudios"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "estudios",
                onChange: (event) => handleEstudios(event),
              
              }}
            />

            <CustomInput
              labelText="Resultado..."
              id="resultados"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "resultados",
                onChange: (event) => handleResultados(event),
                
                
              }}
            />
            */
            }
            <Button 
              simple color="primary" 
              size="lg"
              onClick={Signup}
            >
             Crear paciente
            </Button>
          
        
    
   </div>
    </div>
  );
}



export default SignUnPaciente;