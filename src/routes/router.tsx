import { Route, Router, Routes, Link, matchRoutes } from "react-router-dom";
import App from "../App";
import { Dashboard } from "./dashboard";

import { Login } from "./login";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/:user" element={<Dashboard />} />
    </Routes>
  );
}

export { AppRoute };
