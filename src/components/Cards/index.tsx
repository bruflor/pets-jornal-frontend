import { Link } from "react-router-dom";
import "./style.css"

interface IPets {
    name: string;
    description?: string;
    weight?: number | string
    dateOfBirth?: string;
    petId?: string | number;
    userId?: string
}

const Cards = ({ name, description, weight, petId, dateOfBirth,userId }: IPets) => {
    return (
        // <div id={petId} className={myClass === undefined ? `cards` : `cards  ${myClass}`}>
        // <div id={petId} className="cards">
        <div className="cards" >
            
            <img></img>
            <h3>{<Link to={`/${userId}/${petId}`}>{name}</Link>} </h3>
            <p>{description} </p>
            <p>{weight}</p>
            <ul className="buttonsCard">
                <li>b1</li>
                <li>b2</li>
                <li>b3</li>
                <li>b4</li>
            </ul>
        </div>
    )

}

export { Cards }