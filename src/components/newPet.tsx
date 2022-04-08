import React from "react";
import { Link } from "react-router-dom";
import "../Styles/cardPets.scss";
import { AiOutlinePlusCircle } from "react-icons/ai";

const NewPet = () => {
  return (
    <div className="cards">
      <Link to="" className="plus">
        <AiOutlinePlusCircle />
      </Link>
    </div>
  );
};

export { NewPet };
