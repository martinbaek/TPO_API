import './App.css';
import Bienvenida from './componentes/Bienvenida';
import Drawer from './componentes/Drawer';
import Chicosjuntos from "./img/Chicosjuntos.jpg";
import DrawerLogged from './componentes/DrawerLogged';

function LoggedPage() {
  return (
    <div className="App">

      <DrawerLogged/>

      <h4>
        Bienvenidos
        La pagina se usa de la siguiente manera
      </h4>
    </div>
  );
}

export default LoggedPage;