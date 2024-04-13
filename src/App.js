import React from "react";

import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [apiData, setApiData] = React.useState("");

  console.log("process.env: ", process.env);
  console.log("process.env.TEST_ENV_VAR_STR: ", process.env.TEST_ENV_VAR_STR);
  console.log("process.env.TEST_ENV_VAR_NUM: ", process.env.TEST_ENV_VAR_NUM);

  console.log("test change");

  const handleGETorderData = () => {
    axios.get("http://localhost:4000/GETorderData").then((res) => {
      console.log("UI res: ", res);
      setApiData(res.data);
    });
  };
  return (
    <div className="App">
      <p>This is a test app</p>
      <button onClick={handleGETorderData}>GETorderData</button>
      <p>-----------------------------------------------------------------</p>
      <p>API Data: {JSON.stringify(apiData, null, "\t")}</p>
    </div>
  );
}

export default App;
