import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Link} from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>Nombre</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Apellido</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>DNI</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>mail</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Nro de telefono</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Obra Social</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Plan</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Afiliado</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Dirección</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>CP</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Ciudad</Item>
        </Grid>
        <Grid item xs={4}>
          <Item><Link to="/PacientePage">Pacientes</Link></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
