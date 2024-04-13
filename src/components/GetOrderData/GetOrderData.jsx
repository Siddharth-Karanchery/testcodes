import React from "react";
import axios from "axios";

function GetOrderData() {
  const [apiData, setApiData] = React.useState("");

  const handleGETorderData = () => {
    axios.get("http://localhost:4000/GETorderData").then((res) => {
      console.log("UI res: ", res);
      setApiData(res.data);
    });
  };

  return (
    <div style={{ border: "1px solid black", backgroundColor: "lightgray" }}>
      <p>This is a test app</p>
      <button onClick={handleGETorderData}>GETorderData</button>
      <p>-----------------------------------------------------------------</p>
      <p>API Data: {JSON.stringify(apiData, null, "\t")}</p>
    </div>
  );
}

export default GetOrderData;
