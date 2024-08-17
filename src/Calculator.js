import React, { useState } from "react";
import { evaluate } from "mathjs";

import "./Calculator.css";

export default function Calculator() {
  const [display, setDisplay] = useState("0");

  const handleButtonClick = (value) => {
    setDisplay((prevDisplay) =>
      prevDisplay === "0" ? value : prevDisplay + value
    );
  };

  const handleClear = () => {
    setDisplay("0");
  };

  const handleDelete = () => {
    setDisplay((prevDisplay) =>
      prevDisplay.length > 1 ? prevDisplay.slice(0, -1) : "0"
    );
  };

  const handleCalculate = () => {
    try {
      const sanitizedDisplay = display.replace(/(\d+)%/g, "($1/100)");
      const result = evaluate(sanitizedDisplay);
      setDisplay(String(result));
    } catch (e) {
      setDisplay("Error");
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">
          <input type="text" value={display} readOnly />
        </div>
        <div>
          <button onClick={handleClear} className="operator">
            CA
          </button>
          <button onClick={handleDelete} className="operator">
            DE
          </button>
          <button onClick={() => handleButtonClick("%")} className="operator">
            %
          </button>
          <button onClick={() => handleButtonClick("/")} className="operator">
            /
          </button>
        </div>
        <div>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("*")} className="operator">
            *
          </button>
        </div>
        <div>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("-")} className="operator">
            -
          </button>
        </div>
        <div>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("+")} className="operator">
            +
          </button>
        </div>
        <div>
          <button onClick={() => handleButtonClick("0")}>0</button>
          <button onClick={() => handleButtonClick(".")} className="operator">
            .
          </button>
          <button onClick={handleCalculate} className="operator equal">
            =
          </button>
        </div>
      </div>
    </div>
  );
}
