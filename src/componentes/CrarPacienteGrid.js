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
          id="standard-textarea"
          label="Fecha"
          placeholder="DD/MM/AAAA"
          multiline
          variant="standard"
        />
        <br/>
        <TextField
          id="filled-textarea"
          label="Peso"
          multiline
          variant="filled"
        />
               
         <TextField
          id="filled-textarea"
          label="Altura"
          multiline
          variant="filled"
        />
      <TextField
          id="filled-textarea"
          label="Diametro Cabeza"
          multiline
          variant="filled"
        />
          <br/>
        <TextField
          id="filled-textarea"
          label="Medicamentos recetados, dosis, periodo"
          multiline
          variant="filled"
        />
       
        <TextField
          id="filled-textarea"
          label="Observaciones"
          multiline
          variant="filled"
        />
          <br/>
        <TextField
          id="filled-textarea"
          label="Estudios a realizar"
          multiline
          variant="filled"
        />
       
        <TextField
          id="filled-textarea"
          label="Resultados"
          multiline
          variant="filled"
        />
          <br/>
        <input type="file" name="Resultado"></input>
       
      </div>

    </form>
    
  );
}