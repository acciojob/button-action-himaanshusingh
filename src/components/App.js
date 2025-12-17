import React, { useState } from "react";
import "./../styles/App.css";

const App = (props) => {
  const [flag, setFlag] = useState(false);

  function handleClick() {
    setFlag("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
  }

  return (
    <div className="App" id="main">
      <p id="para" className="show hide">{flag}</p>
      <button id="click" onClick={handleClick}>Click Me</button>
    </div>
  ); // prettier-ignore
};

export default App;
