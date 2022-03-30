import "./style.css";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import API from "../../api";
import { PetDataCard } from "../../components/PetDataCards";
import { Category } from "../Category";
import dataCategory from "../../database/categories.json";

const PetDashboard = () => {
  const { pet_id } = useParams();
  const [pet, setPet] = useState<IPet>();
  const [products, setProducts] = useState<IPet[]>([]);

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
          return (
            <div>
              {products?.map((product) => {
                console.log(categories.allMedicines[0].name);
              })}
              <PetDataCard categoryType={categories.type} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { PetDashboard };
