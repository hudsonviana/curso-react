import './App.css';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';

function App() {

  const meusItens = ['React', 'Vue', 'Angular'];
  const meusItens2 = ['Fusca', 'Gol', 'Kombi'];

  return (
    <div className="App">
      <h1>Renderização de Listas</h1>
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]} />
      <OutraLista itens={meusItens2} />
    </div>
  );
}

export default App;
