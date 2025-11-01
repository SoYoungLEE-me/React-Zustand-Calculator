import React from "react";
import calcStore from "../stores/calcStore";

const Display = () => {
  const { expression } = calcStore();

  return (
    <div className="display-container">
      <div className="display-expression">{expression || "0"}</div>
    </div>
  );
};

export default Display;
