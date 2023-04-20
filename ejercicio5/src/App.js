import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './shared/Layout';
import Inicio from './inicio/Inicio';
import Datos from './datos/Datos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio/>} />
            <Route path='datos' element={<Datos/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
