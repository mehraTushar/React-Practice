import React from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSquareNfi } from "@fortawesome/free-solid-svg-icons";

const Navbar = (
  <div className="MainHeader">
    <FontAwesomeIcon icon={faSquareNfi} size="2xl" />
    <input
      type="text"
      placeholder="Click here To Search"
      className="SearchBox"
    />
    <FontAwesomeIcon icon={faUser} size="2xl" />
  </div>
);

const Container = () => {
  return <section>{Navbar}</section>;
};
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Container />);
