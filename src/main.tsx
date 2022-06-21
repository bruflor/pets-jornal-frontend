import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./routes/login";

ReactDOM.render(
  <BrowserRouter>
    {/* {if (<Login /> !== undefined) {
    return (
      <App />
    ) }
    Else { return (<Login />)}} */}
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
