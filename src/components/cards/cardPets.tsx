import React, { useState } from "react";
import "./cardPets.scss";
import { GiLoveInjection, GiMedicines, GiDogBowl } from "react-icons/gi";
import IpetsCard from "../../interfaces/interfaces";
import { Link } from "react-router-dom";

const CardPets = ({ name, birthDate }: IpetsCard) => {
  return (
    <a href="/petDashboard" className="cards">
      <div className="mainData">
        <img src="././fakelogo.png" />
        <div>
          <h2>{name}</h2>
          <p>{birthDate}</p>
        </div>
      </div>
      <div className="buttons">
        <ul>
          <li>
            <GiMedicines />
          </li>
          <li>
            <GiLoveInjection />
          </li>
          <li>
            <GiDogBowl />
          </li>
        </ul>
      </div>
    </a>
  );
};

export { CardPets };
