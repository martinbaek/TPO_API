import './App.css';
import Bienvenida from './componentes/Bienvenida';
import Drawer from './componentes/Drawer';

function paginaInicial() {
  return (
    <div className="App">

      <Drawer/>
      <Bienvenida nombre="Martin y Nati"/> 
    </div>
  );
}

export default paginaInicial;