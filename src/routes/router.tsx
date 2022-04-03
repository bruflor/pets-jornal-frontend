import { Route, Router, Routes, Link, matchRoutes } from "react-router-dom";
import App from "../App";

import { Login } from "./login";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export { AppRoute };
