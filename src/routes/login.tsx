import React, { useState } from "react";
import axios from "axios";
// import "./style.css";
import API from "../api";
import { Link } from "react-router-dom";

const Login = () => {
  const [users, setUsers] = useState([]);

  React.useEffect(() => {
    API.get("/users/").then((response) => {
      const axioUsers = response.data;
      setUsers(axioUsers);
    });
  });
  return (
    <div>
      <Link to="4714bc98-7044-451b-84bc-381a1613fc71">Logado</Link>
    </div>
  );
};

export { Login };
