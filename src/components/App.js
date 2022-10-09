import React from "react";
import "../styles/App.css";
import { useState, useEffect } from "react";
const App = () => {
   //code here
  const [name, setName] = useState([]);
  const [id, setId] = useState(1);

  const callApi = async () => {
    const response = await fetch(`https://content.newtonschool.co/v1/pr/main/users/${id}`);
    const finalData = await response.json();
    console.log(finalData);
    setName(finalData);
  };

  const changeInput = (event) => {
    setId(event.target.value);
  };

  useEffect(() => {
    callApi();
  },[id]);
  
  return (
    <div className="App">
      <h1 id="text">Type a number between 1 and 10</h1>
      <input id="input" onChange={changeInput} />
      <p id="name">{name.name}</p>
    </div>
  );
};


export default App;
