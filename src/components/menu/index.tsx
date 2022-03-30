import "./style.css"
import { Route, Router, Routes, Link, matchRoutes} from "react-router-dom"
import { Users } from "../../pages/Users"
import { Cards } from "../Cards"

const Menu = () => {
 return (
     <div className="menu">
         <p>{<Link to="/">Home</Link>}</p>
         {/* <p>{<Link to=":user_id">My Pets</Link>}</p> */}
         <p>{<Link to="/category">Category</Link>}</p>
     </div>

 )
}

export {Menu}