// import logo from './logo.svg';
import Nav from './components/Nav';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
    </div>
  );
}

export default App;
