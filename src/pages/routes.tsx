import { Route, Router, Routes, Link} from "react-router-dom"
import { Category } from "./Category"
import { Dashboard } from "./Dashboard"
import { Home } from "./home"

 function AppRoute () {
    return (
        <Routes>
            <Route path="/"  element={<Home></Home>}></Route>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="/category" element={<Category></Category>}></Route>

     
        </Routes>
            )
}

export {AppRoute}
