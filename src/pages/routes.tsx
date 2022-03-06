import { Route, Router, Routes, Link, matchRoutes} from "react-router-dom"
import { Category } from "./Category"
import { Dashboard } from "./Dashboard"
import { Home } from "./home"
import { PetDashboard } from "./Pet Dashboard"
import { Users } from "./Users"

// const match = matchPath ("/12345", {
//     path: "/:user_id",
//     exact: true,
//     strict: false
// })

 function AppRoute () {
    return (
        <Routes>
            {/* <Route path="/"  element={<Home></Home>}></Route> */}
            <Route path="/"  element={<Users></Users>}></Route>
            {/* <Route path="/petdashboard" element={<PetDashboard></PetDashboard>}></Route> */}
            {/* /:user_id is a variable we create to be used as a params */}
            <Route path="/:user_id" element={<Dashboard />}></Route>
            <Route path="/:user_id/:pet_id" element={<PetDashboard />}></Route>
            <Route path="/category" element={<Category></Category>}></Route>

     
        </Routes>
            )
}

export {AppRoute}
