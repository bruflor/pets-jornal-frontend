import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import API from "../../api";
import props from "react";

interface Props {
  categoryType?: string;
  name?: string;
  children?: JSX.Element;
}

const PetDataCard = (props: Props) => {
  return (
    <div className="cards">
      <h3>{props.categoryType}</h3>
      {props.children}
    </div>
  );
};
export { PetDataCard };
