import { useState } from "react";
import "./Styles/app.scss";
import { Menu } from "./components/navegation/menu";
import { Nav } from "./components/navegation/nav";
import { AppRoute } from "./routes/router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Menu></Menu>
      <div className="main">
        <Nav></Nav>
        <AppRoute></AppRoute>
      </div>
    </div>
  );
}

export default App;
