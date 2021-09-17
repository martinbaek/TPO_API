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
          <Item>Apellido</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>DNI</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>mail</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>grupo sanguineo</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>alergia</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>enfermedades Cronicas</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
