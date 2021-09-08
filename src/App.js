import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Muebleria Cotex</h1>
        <ul>
          <li><a href="index.html"></a>Home</li>
          <li><a href="contacto.html"></a>Contacto</li>
          <li><a href="catalogo.html"></a>Catalógo</li>
        </ul> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
