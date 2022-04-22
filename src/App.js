import logo from './logo.svg';
import './App.css';

function App() {
  const nome = 'Hudson Andrade Viana';
  const url = 'https://via.placeholder.com/150';
  return (
    <div className="App">
      <h1>Meu Primeiro App em React</h1>
      <p>Olá, {nome.toUpperCase()}!</p>
      <img src={url} />
    </div>
  );
}

export default App;
