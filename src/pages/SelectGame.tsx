import React from "react";
import { NavLink } from "react-router-dom";

const SelectGame: React.FC = () => {
  return (
    <>
      <h1>Select Game Type</h1>
      <div>
        <NavLink to="/ShowNames/0/start">Show Names</NavLink>
      </div>
    </>
  );
};

export default SelectGame;
