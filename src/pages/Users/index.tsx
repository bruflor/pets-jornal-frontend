import { Cards } from "../../components/Cards"
// import { NewCard } from "../../components/Cards/newCard"
import "./style.css"
import users from "../../database/pets.json"
import { Link } from "react-router-dom"



const Users = () => {

    return (

        <div className="dashboard">

            <h1>Login</h1>

          <div>


                <div className="cardsLine">
                    <Link to="64de88d0-9b52-41c9-bfec-997170bc9ac7">Logado</Link>

                    {/* {users.map(user =>
                        <p>
                            <Link to={user.id}>{user.name}</Link>
                        </p>
                        

                    )} */}

                    {/* <NewCard /> */}

                </div>

            </div>

        </div>

    )

}

export { Users }