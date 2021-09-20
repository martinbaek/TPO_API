import './App.css';
import Bienvenida from './componentes/Bienvenida';
import Drawer from './componentes/Drawer';
import Chicosjuntos from "./img/Chicosjuntos.jpg";

function PaginaInicial() {
  return (
    <div className="App">

      <Drawer/>
      <img src={Chicosjuntos} alt="juguemos" width="500" height="341"></img>
      <h4>
        Bienvenidos
        La pagina se usa de la siguiente manera
      </h4>
    </div>
  );
}

export default PaginaInicial;