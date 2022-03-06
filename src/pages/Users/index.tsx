import { Cards } from "../../components/Cards"
// import { NewCard } from "../../components/Cards/newCard"
import "./style.css"
import users from "../../database/pets.json"
import { Link } from "react-router-dom"



const Users = () => {

    return (

        <div className="dashboard">

            <h1>Usuários</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iusto maiores, dolor iste doloribus ad dolore. Modi quo, commodi hic quibusdam dolorem libero dolores quod ducimus cupiditate, excepturi aut dolor!</p>

            <div>

                <h2>Users</h2>

                <div className="cardsLine">

                    {users.map(user =>
                        <p>
                            <Link to={user.id}>{user.name}</Link>
                        </p>
                        

                    )}

                    {/* <NewCard /> */}

                </div>

            </div>

        </div>

    )

}

export { Users }