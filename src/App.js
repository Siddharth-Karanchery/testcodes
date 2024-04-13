import React from "react";

import logo from "./logo.svg";
import "./App.css";
import GetOrderData from "./components/GetOrderData/GetOrderData";
import SearchOrder from "./components/SearchOrder/SearchOrder";

function App() {
  console.log("process.env: ", process.env);
  console.log("process.env.TEST_ENV_VAR_STR: ", process.env.TEST_ENV_VAR_STR);
  console.log("process.env.TEST_ENV_VAR_NUM: ", process.env.TEST_ENV_VAR_NUM);

  console.log("test change");

  return (
    <div className="App">
      <GetOrderData />
      <SearchOrder />
    </div>
  );
}

export default App;
