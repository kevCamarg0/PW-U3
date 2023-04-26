import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './inicio/Inicio';
import Layout from './shared/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Inicio/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
