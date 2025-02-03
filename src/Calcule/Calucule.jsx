import React, { useState } from "react";
import "./Calcule.css";

function Calcule() {
  const [input, setInput] = useState("");

  const handleInput = (btn) => {
    if (/[*+\-/]{2,}/.test(input + btn)) return;
    setInput((prev) => prev + btn);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try {
      setInput(Function(`"use strict"; return (${input})`)().toString());
    } catch (error) {
      setInput("Erreur");
      setTimeout(() => setInput(""), 1500);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {["7", "8", "9", "/"].map((btn, index) => (
          <button key={index} className="operator" onClick={() => handleInput(btn)}>
            {btn}
          </button>
        ))}
        {["4", "5", "6", "*"].map((btn, index) => (
          <button key={index} className="operator" onClick={() => handleInput(btn)}>
            {btn}
          </button>
        ))}
        {["1", "2", "3", "-"].map((btn, index) => (
          <button key={index} className="operator" onClick={() => handleInput(btn)}>
            {btn}
          </button>
        ))}
        <button onClick={() => handleInput("0")}>0</button>
        <button className="clear" onClick={handleClear}>C</button>
        <button className="equal" onClick={handleEqual}>=</button>
        <button className="operator" onClick={() => handleInput("+")}>+</button>
      </div>
    </div>
  );
}

export default Calcule;
