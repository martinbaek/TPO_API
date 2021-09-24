import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState('mail@gmail.com');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
      <TextField
          id="filled-textarea"
          label="Nombre"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Apellido"
          multiline
          variant="filled"
        />
        <br/>
        <TextField
          id="filled-textarea"
          label="DNI"
          placeholder="XX.XXX.XXX"
          multiline
          variant="filled"
        />
         <TextField
          id="filled-textarea"
          label="Nro. de telefono"
          multiline
          variant="filled"
        />
        <br/>
      <TextField
          id="filled-textarea"
          label="Mail"
          placeholder="mail@gmail.com"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Repetir Mail"
          placeholder="mail@gmail.com"
          multiline
          variant="filled"
        />
        <br/>
        <TextField
          id="filled-textarea"
          label="Contraseña"
          placeholder="Password"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Repetir contraseña"
          placeholder="Password"
          multiline
          variant="filled"
        />
        <br/>
        <TextField
          id="filled-textarea"
          label="Obra Social"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Plan"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Nro. Afiliado"
          multiline
          variant="filled"
        />
        <br/>
        <TextField
          id="filled-textarea"
          label="Dirección"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="CP"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Ciudad"
          multiline
          variant="filled"
        />
      </div>

    </form>
    
  );
}