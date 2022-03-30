import { Link } from "react-router-dom";
import "./style.css";

const Cards = ({ name, description, weight, id }: IPet) => {
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
