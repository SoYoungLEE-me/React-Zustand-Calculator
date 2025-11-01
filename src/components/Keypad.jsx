import React from "react";
import calcStore from "../stores/calcStore";

const Keypad = () => {
  const buttons = [
    "C",
    "(",
    ")",
    "÷",
    "7",
    "8",
    "9",
    "×",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
    "←",
  ];
  const { append, clear, evaluate, backspace } = calcStore();

  const handleClick = (btn) => {
    if (btn === "C") {
      clear();
    } else if (btn === "=") {
      evaluate();
    } else if (btn === "←") {
      backspace();
    } else {
      append(btn);
    }
  };

  return (
    <div className="keypad-container">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => handleClick(btn)}
          className={`keypad-button 
            ${["C"].includes(btn) ? "function-btn" : ""}
            ${
              ["÷", "×", "-", "+", "=", "←"].includes(btn) ? "operator-btn" : ""
            }
          `}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default Keypad;
