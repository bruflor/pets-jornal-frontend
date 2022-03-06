import "./style.css"
import { Link } from "react-router-dom"

const Menu = () => {
 return (
     <div className="menu">
         <p>{<Link to="/">Home</Link>}</p>
         {/* <p>{<Link to="/petdashboard">Pet Dashboard</Link>}</p> */}
         <p>{<Link to="/category">Category</Link>}</p>
     </div>

 )
}

export {Menu}