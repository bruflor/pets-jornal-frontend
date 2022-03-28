import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import API from "../../api";
import props from "react";

// interface IPets {
//   id?: string;
//   name?: string;
//   birthDate?: string;
//   breed?: string;
//   weight?: number | string;
//   weightUnity?: string;
//   imgURL?: string;
//   femaleOrMale?: string;
//   description?: string;
//   haveMedicines?: string;
//   haveVaccines?: string;
//   created_at?: string;
//   owner?: string;
//   label?: string;
// }
interface Props {
  categoryType: string;
  name: string;
}

const PetDataCard = (props: Props) => {
  //   const [petData, setPetData] = useState<IPets[]>([]);

  //   React.useEffect(() => {
  //     API.get("/pets/").then((response) => {
  //       const axioPets = response.data;
  //       setPetData(axioPets);
  //     });
  //   }, []);

  //In the meantime, befome the DB is ready
  return (
    <div className="card">
      <img src=""></img>
      <h3>{props.categoryType}</h3>
      <p>{props.name}</p>
      <ul>
        <li>b1</li>
        <li>b2</li>
        <li>b3</li>
        <li>b4</li>
        <li>b5</li>
      </ul>
    </div>
  );
};
export { PetDataCard };
