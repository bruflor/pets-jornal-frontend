import { Cards } from "../../components/Cards"
// import { NewCard } from "../../components/Cards/newCard"
import "./style.css"

const myPets = [

    {

        "name": "Nala",

        'id': 1,

        "weight": 25

    },

    {

        "name": "Cuscus",

        'id': 2,

        "weight": 16

    },

    {

        "name": "Cuscuos",

        'id': 3,

        "weight": 16

    }

]

const Dashboard = () => {

    return (

        // console.log(myPets[0].name)

        <div className="dashboard">

            <h1>Dashboard</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iusto maiores, dolor iste doloribus ad dolore. Modi quo, commodi hic quibusdam dolorem libero dolores quod ducimus cupiditate, excepturi aut dolor!</p>

            <div>

                <h2>My Pets</h2>

                <div className="cardsLine">

                    {myPets.map(pet =>

                        //  <Cards name={pet.name} weight={pet.weight} key={pet.id} petId={pet.name} myClass={pet.name==="Nala" ? "red": undefined }></Cards>

                        <Cards name={pet.name} weight={pet.weight} key={pet.id} petId={pet.name}></Cards>

                    )}

                    {/* <NewCard /> */}

                </div>

            </div>

        </div>

    )

}

export { Dashboard }