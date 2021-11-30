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
import {getNino} from "./controller/miApp.controller";


function PacientePage() {
  return (
    <div className="App">

      <DrawerLogged/>

      <IconoPaciente/>
    </div>
  );
}

export default PacientePage;








