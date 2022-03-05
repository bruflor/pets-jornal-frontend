import "./style.css"

interface IPets {
    name: string;
    description?: string;
    weight?: number | string
    dateOfBirth?: string;
    petId: string | number;
    myClass?: string
}

const Cards = ({ name, description, weight, petId, myClass, dateOfBirth }: IPets) => {
    return (
        // <div id={petId} className={myClass === undefined ? `cards` : `cards  ${myClass}`}>
        // <div id={petId} className="cards">
        <div className="cards">
            <img></img>
            <h3>{name}</h3>
            <p>{description} </p>
            <p>{weight}</p>
            <ul className="buttonsCard">
                <li>b1</li>
                <li>b2</li>
                <li>b3</li>
                <li>b4</li>
                <li>b5</li>
            </ul>
        </div>
    )

}

export { Cards }