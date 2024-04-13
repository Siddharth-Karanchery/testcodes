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

  React.useEffect(() => {
    axios.get("http://localhost:4000/GETorderData").then((res) => {
      console.log(res);
      setApiData(res.data);
    });
  });

  return (
    <div className="App">
      <p>This is a test app</p>
      <p>API Data: {apiData}</p>
    </div>
  );
}

export default App;
