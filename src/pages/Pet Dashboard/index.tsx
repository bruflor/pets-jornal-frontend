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
  const [products, setProducts] = useState<IProduct[]>([]);

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
          return (
            <div key={categories.type}>
              <PetDataCard categoryType={categories.type}>
                <ul>
                  {categories.allMedicines.map((product: IProduct) => {
                    return <li key={product.name}>{product.name}</li>;
                  })}
                </ul>
              </PetDataCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { PetDashboard };
