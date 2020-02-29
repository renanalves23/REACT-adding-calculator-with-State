import React, { useState } from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

function App() {
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(0);
  const [total, setTotal] = useState(num1 + num2);

  const addThem = () => {
    setTotal(num1 + num2);
  };

  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>

      <div className="number-inputs">
        <input
          value={num1}
          type="number"
          placeholder="0"
          onChange={event => setnum1(+event.target.value)}
        />

        <input
          value={num2}
          type="number"
          placeholder="0"
          onChange={event => setnum2(+event.target.value)}
        />
      </div>

      <button onClick={addThem}>Add Them!</button>

      <h2>{total}</h2>

      <ScotchInfoBar seriesNumber={5} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
