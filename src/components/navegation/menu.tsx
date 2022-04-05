import React from "react";
import "../../Styles/navegation/menu.css";

const Menu = () => {
  return (
    <div className="mainMenu">
      <section className="logo">
        <img src="././fakelogo.png"></img>
      </section>
      <section className="menu">
        <h2>Dashboard</h2>
        <p>My pets</p>
        <h2>Articles</h2>
        <h2>Calendar</h2>
      </section>
    </div>
  );
};

export { Menu };
