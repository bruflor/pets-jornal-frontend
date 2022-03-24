import axios from 'axios'
import { Cards } from "../../components/Cards"
import { NewData } from '../../components/PetDataCards/newData'
import { useParams } from "react-router-dom"
import "./style.css"
import { useState } from 'react';
import React from 'react';
import API from "../../api"

interface IPets {
    name: string;
    description?: string;
    weight?: number | string
    dateOfBirth?: string;
    id: string;
    userId?: string
}

const Dashboard = () => {

    const [pets, setPets] = useState<IPets[]>([]) //between <> is the type, that's a Array from my interface. Between the () is a initial value, that's a empty array

    React.useEffect(() => {
        API.get("/pets/").then((response) => {
                const axioPets = response.data;
                setPets(axioPets);
            })
        }, [])
        
        
    return (

        <div className="dashboard">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iusto maiores, dolor iste doloribus ad dolore. Modi quo, commodi hic quibusdam dolorem libero dolores quod ducimus cupiditate, excepturi aut dolor!</p>
            <div>

                <h2>My Pets</h2>
                <div className="cardsLine">
                    {pets.map(pet => {
                        return (
                            <Cards name={pet.name} id={pet.id} key={pet.id} />
                        )
                    })}
                    <NewData />
                </div>
            </div>
        </div>

)

}

export { Dashboard }