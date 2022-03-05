import { Menu } from "../../components/menu"
import { Nav } from "../../components/Nav"
import { Dashboard } from "../Dashboard"
import "./style.css"

const Home = () => {
    return (
        <div>
            <Menu></Menu>
            <div className="main">
                <Nav></Nav>
                <Dashboard></Dashboard>
            </div>
        </div>
    )

}

export { Home }

