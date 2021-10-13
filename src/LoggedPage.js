import './App.css';
import Bienvenida from './componentes/Bienvenida';
import Drawer from './componentes/Drawer';
import Chicosjuntos from "./img/Chicosjuntos.jpg";
import DrawerLogged from './componentes/DrawerLogged';
import Box from '@mui/material/Box';

function LoggedPage() {
  return (
    <div className="App-principal">

      <DrawerLogged/>
      <Box sx={{ 
        p: 1 ,
        bgcolor: 'primary.dark',
        opacity: [0.5, 0.5, 0.9],
       }}>
      <h1>
        Bienvenidos
        </h1>
        <h2>
    <br/>
        Desde MEDIPED queremos brindales el mejor sevicio posible.
        <br/>
        Del lado derecho podran visualizar tanto su perfil en la seccion "Perfil", como el de sus niños en la seccion "Pacientes". 
        <br/>
        Dentro de cada paciente podrá ir completando su calendario de vacunación correspondiente e ir registrando sus controles pediátricos
        <br/>
        Además, del lado derecho tendrán un calendario de vacunacino para que se puedan ir guiando, información precisa sobre cómo debe ser los controles médicos de los niños"
        <br/>
        Y finalmente, en el sector de "Percentiles y parámetros generales de control" podrán visualizar a qué percentil pertenece su hijo, y si el mismo esta debajo o por encima de la norma
</h2>
</Box>
<br/>
<br/>
<br/>
<br/>
<br/>
</div>
  );
}

export default LoggedPage;