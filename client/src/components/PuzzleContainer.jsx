import React from "react";
import Word from "./Word";

const PuzzleContainer = ({ theme }) => {
  return (
    <div
      className="puzzle-container"
      // style={{ color: theme.textColor }}
    >
      <Word />
      <Word />
      <Word />
      <Word />
    </div>
  );
};

export default PuzzleContainer;
