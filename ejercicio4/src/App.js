import './App.css';
import Inicio from './Inicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ComponenteDemo from './ComponenteDemo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/demo' element={<ComponenteDemo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
