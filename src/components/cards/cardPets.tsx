import React from "react";
import { GiLoveInjection, GiMedicines, GiDogBowl } from "react-icons/gi";
import IpetsCard from "../../interfaces/interfaces";

const CardPets = ({ name, birthDate }: IpetsCard) => {
  return (
    <div className="cardsRet">
      <div className="mainData">
        <img />
        <h2>{name}</h2>
        <p>{birthDate}</p>
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
    </div>
  );
};

export { CardPets };
