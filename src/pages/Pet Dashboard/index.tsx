// import { PetDataCard } from "../../components/PetDataCards"
import "./style.css";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import API from "../../api";
import { PetDataCard } from "../../components/PetDataCards";
import { Category } from "../Category";
import dataCategory from "../../database/categories.json";

interface IPet {
  id: string;
  name: string;
  birthDate?: string;
  breed?: string;
  weight?: number | string;
  weightUnity: string;
  imgURL: string;
  femaleOrMale: string;
  description?: string;
  haveMedicines: string;
  haveVaccines: string;
  created_at: string;
  owner?: string;
  label?: string;
}

interface IDataCategory {
  typeOfMedicineObj: string;
}

interface IMedicinesGroup {
  type: string;
  allMedicines: IMedicine[];
}
interface IMedicine {
  name: string;
  typeOfMediccine: string;
  laboratory: string;
  frequency: string;
}

const PetDashboard = () => {
  const { pet_id } = useParams();
  const [pet, setPet] = useState<IPet>();

  React.useEffect(() => {
    API.get(`/pets/${pet_id}`).then((response) => {
      const axioPets = response.data;

      setPet(response.data);
    });
  }, []);

  return (
    <div className="dashboard">
      <div className="petSumary">
        <h1>{pet?.name}</h1>
        <ul>
          <li>Birthdate: {pet?.birthDate} |</li>
          <li>Gender: {pet?.femaleOrMale} |</li>
          <li>
            Weight: {pet?.weight} {pet?.weightUnity}
          </li>
        </ul>
        <p>{pet?.description}</p>
      </div>
      <div className="dashboardCards">
        {dataCategory.map((categories) => {
          console.log(categories.type);
          //TODO If type === medicine will map the array of allMedicines and return the medicine name
          console.log(categories.allMedicines[0].name);
          return (
            <div>
              <PetDataCard categoryType={categories.type} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { PetDashboard };
