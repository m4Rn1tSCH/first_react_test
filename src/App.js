import logo from './logo.svg';
import './App.css';

function App() {
  const title = 'React';
  const welcome = {
    greeting: 'Dear',
    title: 'Sir',
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/*PLAYGROUND AREA*/}
          Edit <code>src/App.js</code> and save to reload.
          <div>
            <h1>{welcome.greeting} {welcome.title}</h1>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" />
          </div>
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
