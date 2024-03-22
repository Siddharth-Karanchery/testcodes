import logo from "./logo.svg";
import "./App.css";

function App() {
  // require("dotenv").config();

  console.log("process.env: ", process.env);
  console.log("process.env.TEST_ENV_VAR_STR: ", process.env.TEST_ENV_VAR_STR);
  console.log("process.env.TEST_ENV_VAR_NUM: ", process.env.TEST_ENV_VAR_NUM);

  console.log("test change");

  return (
    <div className="App">
      <p>This is a test app</p>
    </div>
  );
}

export default App;
