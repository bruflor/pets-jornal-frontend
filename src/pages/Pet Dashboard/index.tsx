import { PetDataCard } from "../../components/PetDataCards"
import "./style.css"
import { useParams } from "react-router-dom"
import myDataBase from "../../database/pets.json"


const PetDashboard = () => {

    const { user_id, pet_id } = useParams()
   //
    const userIndex = myDataBase.findIndex(user => user.id === user_id)
    const userData = myDataBase[userIndex]
   
    const myUserPetIndex = userData.pets.findIndex(pet => pet.id === pet_id)
    const myPetData = userData.pets[myUserPetIndex]

    return (
        console.log(myPetData),
        <div className="dashboard">

            <h1>{myPetData.name} Dashboard</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iusto maiores, dolor iste doloribus ad dolore. Modi quo, commodi hic quibusdam dolorem libero dolores quod ducimus cupiditate, excepturi aut dolor!</p>

            <div>

                <h2>Medicine</h2>

                <div className="cardsLine">

                    {myPetData.haveMedicines.map(medicine =>

                        <PetDataCard medicineName={medicine.medicineName} typeOfMedicine={medicine.typeOfMedicine} key={medicine.id} petId={medicine.id}></PetDataCard>

                    )}

                </div>

            </div>

        </div>

    )

}

export { PetDashboard }