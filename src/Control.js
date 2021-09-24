import * as React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {Link} from "react-router-dom";
import CrearControlGrid from './componentes/CrarControlGrid';
import SignUpControl from './SignUpControl';
import DrawerLogged from './componentes/DrawerLogged';

export default function ContainedButtons() {
  return (
    <div className="App">
 <DrawerLogged/>
    <Stack direction="column" spacing={2}>
      <Link to="/ControlProfile">
      <Button variant="contained" href="#contained-buttons" >
        Control 1
      </Button>
      </Link>
      <Link to="/ControlProfile">
      <Button variant="contained" href="#contained-buttons" >
        Control 2
      </Button>
      </Link>
      <Link to="/ControlProfile">
      <Button variant="contained" href="#contained-buttons" >
        Control 3
      </Button>
      </Link>
      <Link to="/SignUpControl">
      <Button variant="contained" href="#contained-buttons" >
        Agregar control
      </Button>
      </Link>
    </Stack>
    </div>
  );
}