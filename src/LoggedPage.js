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
        <h4>
        Desde MEDIPED queremos brindales el mejor sevicio posible.
      </h4>
      <h4>
        Del lado derecho podran visualizar tanto su perfil en la seccion "Perfil", como el de sus niños en la seccion "Pacientes". 
      </h4>
      <h4>
        Dentro de cada paciente podrá ir completando su calendario de vacunación correspondiente e ir registrando sus controles pediátricos
      </h4>
      <h4>
        Además, del lado derecho tendrán un calendario de vacunacino para que se puedan ir guiando, información precisa sobre cómo debe ser los controles médicos de los niños"
      </h4>
      <h4>
        Y finalmente, en el sector de "Percentiles y parámetros generales de control" podrán visualizar a qué percentil pertenece su hijo, y si el mismo esta debajo o por encima de la norma
      </h4>
      </h4>
    </div>
  );
}

export default LoggedPage;