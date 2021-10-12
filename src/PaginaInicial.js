import './App.css';
import Bienvenida from './componentes/Bienvenida';
import Drawer from './componentes/Drawer';
import Chicosjuntos from "./img/Chicosjuntos.jpg";
import prueba from "./img/prueba.png"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function PaginaInicial() {
  return (
    <div className="App-principal">

      <Drawer/>
      <Box sx={{ 
        p: 1 ,
        bgcolor: 'primary.dark',
        opacity: [0.5, 0.5, 0.9],
       }}>
      <h1>
        MEDIPED - Lideres en Medicina Pedíatrica.
      </h1>
      <h4>
        Asumimos el compromiso de brindar el servicio más completo para sus niños, 
        acompañado de información útil y un sólido respaldo tecnológico.
      </h4>
      <h4>
        Desde nuestro portal podrán visualizar los turnos pendientes de cada hijo, 
        y también realizar los nuevos. 
      </h4> 
      <h4>
        Además, podrán cargar los estudios médicos para poder 
        llevar un control ordenado de cada uno de ellos. 
      </h4>  
      <h4>
        Le brindaremos toda la información 
        necesaria actualizada, y estamos a su disposición ante cualquier inconveniente.

      </h4>   
      </Box>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h4>
      <img src={prueba} alt="juguemos" width="800" height="201"></img>
      </h4>

    </div>
  );
}

export default PaginaInicial;