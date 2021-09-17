import * as React from "react";
import { styled } from '@mui/material/styles';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';






const label = { inputProps: { "aria-label": "Checkbox demo" } };

function createData(
  TIEMPO,
  BCG,
  HEPATITISB,
  PENTAVALENTE,
  ROTAVIRUS,
  CUADRUPLE,
  SALK,
  NEUMOCOCOCONJUGADA,
  GRIPE,
  MENINGOCOCO,
  TRIPLEVIRAL,
  HEPATITISA,
  VARICELA,
  TRIPLEBACTERIANACELULAR,
  TRIPLEBACTERIANAACELULAR,
  HPV,
) {
  return {
    TIEMPO,
    BCG,
    HEPATITISB,
    PENTAVALENTE,
    ROTAVIRUS,
    CUADRUPLE,
    SALK,
    NEUMOCOCOCONJUGADA,
    GRIPE,
    MENINGOCOCO,
    TRIPLEVIRAL,
    HEPATITISA,
    VARICELA,
    TRIPLEBACTERIANACELULAR,
    TRIPLEBACTERIANAACELULAR,
    HPV,
  };
}

const rows = [
  createData(
    "RECIÉN NACIDO",
    <BasicTextFields/>,
    <BasicTextFields/>,
  ),
  createData("2 MESES", "", "", <BasicTextFields/>, <BasicTextFields/>, "", <BasicTextFields/>, <BasicTextFields/>),
  createData("3 MESES","", "","", "", "", "", "","", <BasicTextFields/>),
  createData("4 MESES", "", "", <BasicTextFields/>, <BasicTextFields/>, "", <BasicTextFields/>, <BasicTextFields/>),
  createData("5 MESES","", "","", "", "", "", "","", <BasicTextFields/>),
  createData("6 MESES",  "", "", <BasicTextFields/>, "", "", <BasicTextFields/>, "", <BasicTextFields/>),
  createData("12 MESES","", "","", "", "", "",<BasicTextFields/>,<BasicTextFields/>, "",<BasicTextFields/>,<BasicTextFields/>),
  createData("15 MESES", "", "","", "", "",  "","",<BasicTextFields/>,<BasicTextFields/>,  "","",<BasicTextFields/>),
  createData("15-18 MESES", "", "","","",<BasicTextFields/>,"","",<BasicTextFields/>),
  createData("24 MESES",  "", "","", "", "",  "","",<BasicTextFields/>),
  createData("5-6 AÑOS", "", "","","","",<BasicTextFields/>,"","","",<BasicTextFields/>,"","",<BasicTextFields/>),
  createData("11 AÑOS", "",<BasicTextFields/>,"","","","","","",<BasicTextFields/>,<BasicTextFields/>,"","","",<BasicTextFields/>,<BasicTextFields/>)
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>EDAD\VACUNA</TableCell>
            <TableCell align="right">BCG</TableCell>
            <TableCell align="right">HEPATITIS B</TableCell>
            <TableCell align="right">PENTAVALENTE</TableCell>
            <TableCell align="right">ROTAVIRUS</TableCell>
            <TableCell align="right">CUADRUPLE(b)</TableCell>
            <TableCell align="right">SALK</TableCell>
            <TableCell align="right">NEUMOCOCO CONJUGADA</TableCell>
            <TableCell align="right">GRIPE</TableCell>
            <TableCell align="right">MENINGOCOCO</TableCell>
            <TableCell align="right">TRIPLE VIRAL</TableCell>
            <TableCell align="right">HEPATITIS A</TableCell>
            <TableCell align="right">VARICELA</TableCell>
            <TableCell align="right">TRIPLE BACTERIANA CELULAR</TableCell>
            <TableCell align="right">TRIPLE BACTERIANA ACELULAR</TableCell>
            <TableCell align="right">HPV</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.TIEMPO}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.TIEMPO}
              </TableCell>
              <TableCell align="right">{row.BCG}</TableCell>
              <TableCell align="right">{row.HEPATITISB}</TableCell>
              <TableCell align="right">{row.PENTAVALENTE}</TableCell>
              <TableCell align="right">{row.ROTAVIRUS}</TableCell>
              <TableCell align="right">{row.CUADRUPLE}</TableCell>
              <TableCell align="right">{row.SALK}</TableCell>
              <TableCell align="right">{row.NEUMOCOCOCONJUGADA}</TableCell>
              <TableCell align="right">{row.GRIPE}</TableCell>
              <TableCell align="right">{row.MENINGOCOCO}</TableCell>
              <TableCell align="right">{row.TRIPLEVIRAL}</TableCell>
              <TableCell align="right">{row.HEPATITISA}</TableCell>
              <TableCell align="right">{row.VARICELA}</TableCell>
              <TableCell align="right">{row.TRIPLEBACTERIANACELULAR}</TableCell>
              <TableCell align="right">
                {row.TRIPLEBACTERIANAACELULAR}
              </TableCell>
              <TableCell align="right">{row.HPV}</TableCell>
              <TableCell align="right">{row.DOBLEBACTERIANA}</TableCell>
              <TableCell align="right">{row.DOBLEVIRAL}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Checkbox {...label} />
      <TextField id="standard-basic" label="Lugar de vacunación" variant="standard" />
      <MultilineTextFields/>
    </Box>
  );
}
function MultilineTextFields() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="standard-textarea"
          label="Fecha"
          placeholder="DD/MM/AAAA"
          multiline
          variant="standard"
        />
      </div>
    </Box>
  );
}