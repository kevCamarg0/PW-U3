import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './componentes/inicio';
import Pagina2 from './componentes/pagina2';
import Contacto from './componentes/contacto';
import Layout from './shared/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio/>} />
            <Route path="/pagina2" element={<Pagina2/>} />
            <Route path="/contacto" element={<Contacto/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
