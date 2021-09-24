import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {Link} from "react-router-dom";


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function ContainedButtons() {
  return (
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
      <Link to="/ControlProfile">
      <Button variant="contained" href="#contained-buttons" >
        Agregar Control
      </Button>
      </Link>
    </Stack>

    /* Cada control me lleve a ControlProfile*/
  );
}
