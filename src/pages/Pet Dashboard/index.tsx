// import { PetDataCard } from "../../components/PetDataCards"
import "./style.css";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import API from "../../api";
import { PetDataCard } from "../../components/PetDataCards";
import { Category } from "../Category";

const dataCategory = [
  {
    category: {
      categoryType: "Medicines",
      name: "Vermivet",
      type: "Vermifuge",
      laboratory: "Bauer",
      frequency: "2 doses 6 months apart",
    },
  },
  {
    category: {
      categoryType: "Vaccines",

      name: "V12",
      type: "Polyvalent",
      laboratory: "Bauer",
      frequency: "Yearly",
    },
  },
];
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
          const petCategory = categories.category;
          return (
            <div>
              <h2>{petCategory.categoryType}</h2>
              {/* {petCategory.map(tOfCategory =>
                <PetDataCard
                  categoryType={tOfCategory.name}
                  name={tOfCategory.name}
                />
              )} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { PetDashboard };
