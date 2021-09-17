import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContainedButtons() {
  return (
    <Stack direction="column" spacing={2}>
      <Button variant="contained" href="#contained-buttons" >
        Chico 1
      </Button>
      <Button variant="contained" href="#contained-buttons" >
        Chico 2
      </Button>
      <Button variant="contained" href="#contained-buttons" >
        Chico 3
      </Button>
      <Button variant="contained" href="#contained-buttons" >
        Agregar chico
      </Button>
    </Stack>
  );
}