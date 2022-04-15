import React from "react";
import { Link } from "react-router-dom";
import "./cardPets.scss";
import { AiOutlinePlusCircle } from "react-icons/ai";

const NewPet = () => {
  return (
    <div className="plus">
      <Link to="/addPet">
        <AiOutlinePlusCircle />
      </Link>
    </div>
  );
};

export { NewPet };
