import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello/hello.jsx';
import Hello2 from './components/Hello2/hello2.jsx';

function Hola(props) {
  return (
    <div>
      <h1>Hola Mundo</h1>
      <p>Que tal, {props.nombre}, {props.apellido}</p>
    </div>
  );
}

function App() {
  const nombre = 'Paco'
  const apellido = 'Perez'
  return (
    <div className="App">
      <Hola nombre={nombre} apellido={apellido}/>
      <Hola nombre="Pepito" apellido="González"/>
      <Hello nombre={nombre} apellido={apellido}/>
      <Hello2 nombre="Esteban" apellido="Corral"/>
    </div>
  );
}

export default App;
