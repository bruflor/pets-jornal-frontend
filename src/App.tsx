import { useState } from "react";
import "./App.css";
import { Menu } from "./components/navegation/menu";
import { Nav } from "./components/navegation/nav";
import { AppRoute } from "./routes/router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Nav></Nav>
      <div className="main">
        <Menu></Menu>
        <AppRoute></AppRoute>
      </div>
    </div>
  );
}

export default App;
