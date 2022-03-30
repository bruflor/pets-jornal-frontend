import "./style.css"

interface IPets {
    petId: string | number;
    medicineName?: string;
    typeOfMedicine?: string;
    applicationDate?:string
    name?:string

}

const PetDataCard = ({ petId, medicineName, typeOfMedicine, applicationDate, name }: IPets) => {
    return (
        // <div id={petId} className={myClass === undefined ? `cards` : `cards  ${myClass}`}>
        // <div id={petId} className="cards">
        <div className="cards">
            <h3>{medicineName}</h3>
            <p>{typeOfMedicine} </p>
            <p>{applicationDate}</p>
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

export { PetDataCard }