import logo from "./logo.svg";
import "./App.css";
import "dotenv/config";

function App() {
  require("dotenv").config();

  console.log("process.env: ".process.env);
  console.log("process.env.TEST_ENV_VAR_STR: ".process.env.TEST_ENV_VAR_STR);
  console.log("process.env.TEST_ENV_VAR_NUM: ".process.env.TEST_ENV_VAR_NUM);

  console.log("test");

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
