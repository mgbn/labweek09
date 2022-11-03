import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 id="welcome">
         {props.info}
        </h1>
        <h2 id="react">
         {props.description}
        </h2>
        <h3 id="sid">
          {props.stuid}
        </h3>
        <h4 id="snm">
        {props.stunm}
        </h4>
        <h4 id="college">
          {props.college}
        </h4>

      </header>
    </div>
  );
}

export default App;
