// import { PetDataCard } from "../../components/PetDataCards"
import "./style.css"
import { useParams } from "react-router-dom"
import React, { useState } from "react"
import API from "../../api"

interface IPet {
    name: string;
    description?: string;
    weight?: number | string
    dateOfBirth?: string;
    id: string;
    userId?: string
}

const PetDashboard = () => {
    const {pet_id} = useParams()
    const [pet, setPet] = useState<IPet>()


    React.useEffect(() => {
        API.get(`/pets/${pet_id}`).then((response) => {
                const axioPets = response.data;

            setPet(response.data);
            })
        }, [])
        
    return (

        <div>
            <p>{pet?.name}</p>
        </div>


    )

}

export { PetDashboard }