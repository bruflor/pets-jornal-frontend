import React, { useState } from "react";
import { CardPets } from "../components/cards/cardPets";
import { NewPet } from "../components/cards/newPet";
import pets from "../database/pets.json";
import "./dashboard.scss";

const Dashboard = () => {
  const [mypets, setMyPets] = useState([]);
  return (
    <div className="mainDashboard">
      <div>
        <h1>Hello X</h1>
      </div>
      <div className="cardsCarousel">
        {pets.map((mypets) => {
          return <CardPets name={mypets.name} birthDate={mypets.birthDate} />;
        })}
        <NewPet />
      </div>
    </div>
  );
};

export { Dashboard };
