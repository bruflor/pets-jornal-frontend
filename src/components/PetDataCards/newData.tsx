import { useState } from "react"
import "./style.css"
import { NewPet } from "../Forms/newPet"
import { Link } from "react-router-dom"


const NewData = () =>{
    return (
        <div className="cards">
        <p className="plus">{<Link to="/newpet">+</Link>}</p>
     </div>
 )
}




export {NewData}