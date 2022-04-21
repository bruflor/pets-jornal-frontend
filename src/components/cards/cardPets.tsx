import React from "react";
import "./cardPets.scss";
import { GiLoveInjection, GiMedicines, GiDogBowl } from "react-icons/gi";
import IpetsCard from "../../interfaces/interfaces";
import { Link } from "react-router-dom";

const CardPets = ({ name, birthDate }: IpetsCard) => {
  return (
    <div className="cards">
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
            <a href="/petDashboard#medContainer" className="iconButtons">
              <GiMedicines />
            </a>
          </li>
          <li>
            <a href="/petDashboard#vacContainer" className="iconButtons">
              <GiLoveInjection />
            </a>
          </li>
          <li>
            <GiDogBowl />
          </li>
        </ul>
      </div>
    </div>
  );
};

export { CardPets };
