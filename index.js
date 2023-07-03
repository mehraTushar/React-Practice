import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  { key: "h1" },
  "First React Project"
);
const heading2 = React.createElement("button", { key: "h2" }, "Click Me");
const cotainerElm = React.createElement("section", { id: "container" }, [
  heading1,
  heading2,
]);
const ElmRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(ElmRoot);
root.render(cotainerElm);
