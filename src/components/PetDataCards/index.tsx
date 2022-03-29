import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import API from "../../api";
import props from "react";

interface Props {
  categoryType: string;
  name?: string;
}

const PetDataCard = (props: Props) => {
  return (
    <div className="cards">
      <h3>{props.categoryType}</h3>
      <ul>
        <li></li>
        <li>b2</li>
        <li>b3</li>
        <li>b4</li>
        <li>b5</li>
      </ul>
    </div>
  );
};
export { PetDataCard };
