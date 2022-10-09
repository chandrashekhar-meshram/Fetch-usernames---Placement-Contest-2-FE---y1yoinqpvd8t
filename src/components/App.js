import React from "react";
import "../styles/App.css";
import { useState, useEffect } from "react";
const App = () => {
  //code here
  const [name, setName] = useState([]);

  // const callApi = async () => {
  //   const response = await fetch(
  //     "https://content.newtonschool.co/v1/pr/main/users"
  //   );
  //   const finalData = await JSON(response);
  //   console.log(finalData);
  // };

  const changeInput = () => {
    //setName(finalData.name);
  };

  // useEffect(() => {
  //   callApi();
  // }, []);

  return (
    <div className="App">
      <h1 id="text">Type a number between 1 and 10</h1>
      <input id="input" onChange={changeInput} />
      <p id="name">{name}</p>
    </div>
  );
};

export default App;
