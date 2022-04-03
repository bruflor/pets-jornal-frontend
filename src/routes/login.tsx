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
      <Link to="64de88d0-9b52-41c9-bfec-997170bc9ac7">Logado</Link>
    </div>
  );
};

export { Login };
