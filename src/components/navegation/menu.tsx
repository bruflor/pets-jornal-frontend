import React from "react";
import "./menu.scss";
import { MdDashboard } from "react-icons/md";

const Menu = () => {
  return (
    <div className="mainMenu">
      <div className="logo">
        <img src="././fakelogo.png"></img>
        <p>Pet Journal</p>
      </div>
      <ul className="menu">
        <li className="currentPage">
          <MdDashboard />
          <span>Dashboard</span>
        </li>
        <li>
          <MdDashboard />
          <span>Articles</span>
        </li>
        <li>
          <MdDashboard />
          <span>Calendar</span>
        </li>
      </ul>
    </div>
  );
};

export { Menu };
