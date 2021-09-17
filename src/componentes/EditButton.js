import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContainedButtons() {
  return (
    <Stack direction="column" spacing={2}>
      <Button variant="contained" href="#contained-buttons">
        Editar
      </Button>
      <br/>

    </Stack>
    

  );
}
