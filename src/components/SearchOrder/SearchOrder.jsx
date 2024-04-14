import React from "react";
import axios from "axios";

function SearchOrder() {
  const [apiData, setApiData] = React.useState("");
  const [hotelName, setHotelName] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [amount, setAmount] = React.useState("");

  const handlePOSTSearchOrder = () => {
    axios
      .post("http://localhost:4000/POSTSearchOrder", {
        hotelName: hotelName,
        location: location,
        amount: Number(amount),
      })
      .then((res) => {
        console.log("UI res: ", res);
        setApiData(res.data);
      });
  };

  const handleReset = () => {
    setHotelName("");
    setLocation("");
    setAmount("");
  };

  const handleHNChange = (e) => {
    setHotelName(e.target.value);
  };
  const handleLocChange = (e) => {
    setLocation(e.target.value);
  };
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px 0",
        backgroundColor: "lightgray",
      }}
    >
      <p>POSTSearchOrder</p>
      <input onChange={handleHNChange} value={hotelName} />
      <input onChange={handleLocChange} value={location} />
      <input onChange={handleAmountChange} value={amount} />
      <button onClick={handlePOSTSearchOrder}>POSTSearchOrder</button>
      <button onClick={handleReset}>Reset</button>
      <p>-----------------------------------------------------------------</p>
      <p>API Data: {JSON.stringify(apiData, null, "\t")}</p>
    </div>
  );
}

export default SearchOrder;
