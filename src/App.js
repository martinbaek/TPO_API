import './App.css';
import Bienvenida from './componentes/Bienvenida';
import Drawer from './componentes/Drawer';

function App() {
  return (
    <div className="App">

      <Drawer/>
      <Bienvenida nombre="Martin y Nati"/> 
    </div>
  );
}

export default App;
