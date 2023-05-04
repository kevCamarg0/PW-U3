import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [elementosLista, setElementosLista]  = useState();
  useEffect(() =>{
    const obtenListaPorHacer = async () =>{
      try {
        const respuesta = await axios.get('https://jsonplaceholder.typicode.com/todos');
        setElementosLista(respuesta.data);
        
      } catch (error) {
        console.log("Error al llamar la lista " + error);
      }
    }
    obtenListaPorHacer();
  }, []);

  if(!elementosLista){
    return (
      <div>
        <p>Cargando...</p>
      </div>
    )
  }
  return (
    <div className="App">
      <ul className="list-group">
        {elementosLista.map((elemento) => (
          <li key={elemento.id} className={"list-group-item " + 
          (elemento.completed ? 'list-group-item-success' : 'list-group-item-danger')}>{elemento.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
