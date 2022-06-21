import React from "react";
import IpetsCard from "../interfaces/interfaces";
import pet from "../database/pets.json";
import "./petDashboard.scss";

const PetDashboard = (pet: IpetsCard) => {
  return (
    <div className="mainPetDashboard">
      <div className="petBasicInfo">
        <img src="././fakelogo.png" />
        <div>
          {/* I need to connect these to each pet id on click the buttons in their cards */}
          <h2>Pet Name</h2>
          <p>Pet birthdate</p>
        </div>
      </div>
      <div id="medContainer">
        <p>
          Here goes the component for the medicine type | Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Aspernatur, reprehenderit? Sequi
          non quod laudantium. Voluptatibus, libero nam cumque consequatur
          commodi illum tempore explicabo, velit facilis dolor ex dicta vitae
          quam.
        </p>
      </div>
      <div id="vacContainer">
        <p>
          Here goes the component for the vaccine type | Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Aspernatur, reprehenderit? Sequi
          non quod laudantium. Voluptatibus, libero nam cumque consequatur
          commodi illum tempore explicabo, velit facilis dolor ex dicta vitae
          quam.
        </p>
      </div>
    </div>
  );
  console.log("babana");
};

export { PetDashboard };
