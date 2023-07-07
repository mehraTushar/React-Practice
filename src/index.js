import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";
const MainContainer = () => {
  return (
    <>
      <section className="Navbar" key="Navbar">
        <Navbar />
      </section>
      <section className="mainBody" key="mainBody">
        <Body />
      </section>
    </>
  );
};
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<MainContainer />);

//https://www.themealdb.com/api/json/v1/1/random.php
