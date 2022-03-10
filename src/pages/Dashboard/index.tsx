import { Cards } from "../../components/Cards"
// import { NewCard } from "../../components/Cards/newCard"
import { useParams } from "react-router-dom"
import "./style.css"
import myDataBase from "../../database/pets.json"


const Dashboard = () => {

    //user_id is coming from useParams
    const {user_id} = useParams()
    
    const userIndex = myDataBase.findIndex(user => user.id === user_id)

    const myUser = myDataBase[userIndex]

    return (

        <div className="dashboard">

            <h1>{myUser.name} Dashboard</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iusto maiores, dolor iste doloribus ad dolore. Modi quo, commodi hic quibusdam dolorem libero dolores quod ducimus cupiditate, excepturi aut dolor!</p>

            <div>

                <h2>My Pets</h2>

                <div className="cardsLine">

                    {myUser.pets.map(pet =>

                        <Cards userId={user_id}name={pet.name} weight={pet.weight} key={pet.id} petId={pet.id}></Cards>

                    )}

                    {/* <NewCard /> */}

                </div>

            </div>

        </div>

    )

}

export { Dashboard }