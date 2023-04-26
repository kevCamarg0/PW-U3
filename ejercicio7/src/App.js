import { useState } from 'react';
import './App.css';

function App() {
  const [stateNumero, setStateNumero] = useState(false);
  const verificar = () => {
    let num = document.getElementById('numero').value;
    if (num >= 0){
      setStateNumero(true);
      
    }
    else{
      setStateNumero(false);
    }
  }
  return (
    <div className="App">
      <h1>Ejercicio 7 - Manejo de estados</h1>
      <label for='numero'>Introduzca un numero entero </label>
      <br></br>
      <input onChange={verificar} id='numero' type='number'></input>
      <br/> <br></br>
      <label>{stateNumero ? (
        <div className="alert alert-success" role="alert">
          El numero es positivo
        </div>
      ) : (
        <div className="alert alert-danger" role="alert">
          El numero es negativo
        </div>
      )}</label>
    </div>
  );
}

export default App;
