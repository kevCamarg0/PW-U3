import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './inicio/Inicio';
import Layout from './shared/Layout';
import Blog from './blog/Blog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Inicio/>}></Route>
          <Route path='/blog/:id' element={<Blog/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
