import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {Link} from "react-router-dom";


export default function ContainedButtons() {
  return (
    <Stack direction="column" spacing={2}>
      <Link to="/PacienteProfile">
      <Button variant="contained" href="#contained-buttons" >
        Chico 1
      </Button>
      </Link>
      <Link to="/PacienteProfile">
      <Button variant="contained" href="#contained-buttons" >
        Chico 2
      </Button>
      </Link>
      <Link to="/PacienteProfile">
      <Button variant="contained" href="#contained-buttons" >
        Chico 3
      </Button>
      </Link>
      <Link to="/PacienteProfile">
      <Button variant="contained" href="#contained-buttons" >
        Agregar Chico
      </Button>
      </Link>
    </Stack>
  );
}