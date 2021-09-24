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
        
        <br/>
      <TextField
          id="filled-textarea"
          label="Mail"
          placeholder="mail@gmail.com"
          multiline
          variant="filled"
        />
       
        <br/>
        <TextField
          id="filled-textarea"
          label="Grupo Sanguineo"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Alergias"
          multiline
          variant="filled"
        />
        <br/>
        <TextField
          id="filled-textarea"
          label="Enfermedades Crónicas"
          multiline
          variant="filled"
        />
       
        
       
      </div>

    </form>
    
  );
}