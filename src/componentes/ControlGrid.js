import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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
          <Item>Fecha</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Peso</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Altura</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Diametro Cabeza</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Medicamentos recetados, dosis, período</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Observaciones</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Estudios a realizar</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Resultados</Item>
          <input type="file" name="Resultado"></input>
        </Grid>
      </Grid>
    </Box>
  );
}
