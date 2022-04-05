import React from "react";
import "../../Styles/navegation/navbar.css";
import { FaRegUserCircle, FaRegBell } from "react-icons/fa";
import { BiHelpCircle } from "react-icons/bi";

const Nav = () => {
  return (
    <div className="nav">
      <div className="pageName">
        <p>Dashboard</p>
      </div>

      <div className="icons-nav">
        <p>
          <BiHelpCircle />
        </p>
        <p>
          <FaRegBell />
        </p>
        <p>
          <FaRegUserCircle />
        </p>
      </div>
    </div>
  );
};

export { Nav };
