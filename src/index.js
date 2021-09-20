import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PaginaInicial from './PaginaInicial';
import LogInPage from './LogInPage';
import SignInPage from './SignInPage';
import LoggedPage from './LoggedPage';
import PacientePage from './PacientePage';
import PacienteProfile from './PacienteProfile';

import CalendarioPage from './CalendarioPage';


ReactDOM.render(

  <React.StrictMode>
    <PaginaInicial/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
