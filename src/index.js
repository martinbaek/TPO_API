import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReportWebVitals from './ReportWebVitals';
import PaginaInicial from './PaginaInicial';
import LogInPage from './LogInPage';
import SignUpPage from './SignUpPage';
import LoggedPage from './LoggedPage';
import PacientePage from './PacientePage';
import Percentiles from './Percentiles';
import ControlesMedicos from "./ControlesMedicos";
import PacienteProfile from './PacienteProfile';
import { createBrowserHistory } from 'history';
//import ReactGA from 'react-ga';
import CalendarioPage from './CalendarioPage';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import OlvidoContrasenaPage from './OlvidoContrasenaPage';


var hist = createBrowserHistory();
ReactDOM.render(
  
  <Router history={hist}>
    <Switch>
      <Route path="/LogInPage" component={LogInPage}/>
      <Route path="/Percentiles" component={Percentiles}/>
      <Route path="/Percentiles" component={LogInPage}/>
      <Route path="/ControlesMedicos" component={ControlesMedicos}/>
      <Route path="/LoggedPage" component={LoggedPage}/>
      <Route path="/CalendarioPage" component={CalendarioPage}/>
      <Route path="/ReportWebVitals" component={ReportWebVitals}/>
      <Route path="/SignUpPage" component={SignUpPage}/>
      <Route path="/PacientePage" component={PacientePage}/>
      <Route path="/PacienteProfile" component={PacienteProfile}/>
      <Route path="/OlvidoContrasenaPage" component={OlvidoContrasenaPage}/>
      <Route path="/" component={PaginaInicial}/>

    </Switch>
  </Router>,
  /*
  <React.StrictMode>
  <PaginaInicial/>
  </React.StrictMode>,
  */
  document.getElementById('root')
);