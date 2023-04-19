import './App.css';
import Inicio from './Inicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import FAQ from './FAQ';
import Pricing from './Pricing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/faq' element={<FAQ/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
