import logo from './logo.svg';
import './App.css';

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React - Hola mundo
        </a>
      </header>
      <Hola nombre={nombre} apellido={apellido}/>
      <Hola nombre="Pepito" apellido="González"/>
    </div>
  );
}

export default App;
