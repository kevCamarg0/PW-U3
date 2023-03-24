import logo from './logo.svg';
import './App.css';
import Kevin from './Kevin';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Aespa <code>BEST</code> gg.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Kevin/>
      </header>
    </div>
  );
}

export default App;
