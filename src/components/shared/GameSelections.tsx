import React from "react";
import { Link } from "react-router-dom";

const GameSelections: React.FC = () => {
  return (
    <>
      <div>
        <Link to="/ShowNames">Show Name Game</Link>
      </div>
    </>
  );
};

export default GameSelections;
