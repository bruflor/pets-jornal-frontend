import { Cards } from "../../components/Cards";
import React from "react";
import { useState } from "react";

import "./style.css";
import API from "../../api";

interface IPets {
    id: string;
    name: string;
    description?: string;
    weight?: number | string;
    dateOfBirth?: string;
    petId?: string | number;
    userId?: string;
}

const Dashboard = () => {
    const [pets, setPets] = useState<IPets[]>([]);

    React.useEffect(() => {
        API.get("/pets/").then((response) => {
            const axioPets = response.data;
            setPets(axioPets);
        });
    }, []);


    return (
        <div className="dashboard">


            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                iusto maiores, dolor iste doloribus ad dolore. Modi quo, commodi
                hic quibusdam dolorem libero dolores quod ducimus cupiditate,
                excepturi aut dolor!
            </p>

            <div>
                <h2>My Pets</h2>

                <div className="cardsLine">
                    {pets.map((pet) => {
                        return <Cards key={pet.id} name={pet.name}></Cards>;
                    })}
                </div>
            </div>
        </div>
    );
};

export { Dashboard };
