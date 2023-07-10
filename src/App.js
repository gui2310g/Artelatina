import './App.css';
import Introducao from './componentes/Intro/Introducao';
import Produtos from './componentes/Produtos/produtos';
import Redes from './componentes/Redes/Redes';


function App() {
  return (
    <div className='app'>
      <Introducao />
      <Produtos />
      <Redes />
    </div>
  );
}

export default App;
