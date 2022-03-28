import { Link } from "react-router-dom";
import "./style.css";

interface IPets {
  id?: string;
  name?: string;
  birthDate?: string;
  breed?: string;
  weight?: number | string;
  weightUnity?: string;
  imgURL?: string;
  femaleOrMale?: string;
  description?: string;
  haveMedicines?: string;
  haveVaccines?: string;
  created_at?: string;
  owner?: string;
  label?: string;
}

const Cards = ({ name, description, weight, id }: IPets) => {
  return (
    <div className="cards">
      <img></img>
      <h3>{<Link to={id}>{name}</Link>} </h3>
      <p>{description} </p>
      <p>{weight}</p>
      <ul className="buttonsCard">
        <li>b1</li>
        <li>b2</li>
        <li>b3</li>
        <li>b4</li>
      </ul>
    </div>
  );
};

export { Cards };
