import logo from './logo.svg';
import './App.css';
import Frase from './components/Frase';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const nome = 'Maria';
  return (
    <div className="App">
      <h1>Testado CSS</h1>
      <Frase />
      <Frase />
      {/* <HelloWord /> */}
      <SayMyName nome="Eliane" />
      <SayMyName nome="Leppy" />
      <SayMyName nome={nome} />
      <Pessoa 
        nome="Hudson" 
        idade="36" 
        profissao="estudante" 
        foto="https://via.placeholder.com/120" 
      />
    </div>
  );
}

export default App;
