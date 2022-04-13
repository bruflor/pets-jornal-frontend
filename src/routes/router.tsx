import { Route, Router, Routes, Link, matchRoutes } from "react-router-dom";
import App from "../App";
import { AddNewPet } from "../components/forms/addNewPet";
import { Dashboard } from "./dashboard";

import { Login } from "./login";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/:user" element={<Dashboard />} />
      <Route path="/addPet" element={<AddNewPet />} />
    </Routes>
  );
}

export { AppRoute };
