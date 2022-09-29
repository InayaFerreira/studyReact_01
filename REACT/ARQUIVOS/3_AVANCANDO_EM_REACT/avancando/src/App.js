import './App.css';

import City from "./assets/city.jpg";
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {
  //Mesmo resultado com abordagens diferentes!!!
  return (
    <div className="App">
      <h1>Avançando em React Finalmente</h1>
      <p>TCC QUE LUTE BEBE</p>
    {/* Imagem em public*/}
    <div>
      <img src="/img1.jpg" alt="Paisagem" />
    </div>
    {/* Imagem em assets*/}
    <div>
      <img src={City} alt="Cidade" />
    </div>
    <ManageData/>
    <ListRender/>
    </div>
  );
}

export default App;
