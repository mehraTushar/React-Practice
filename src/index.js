import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Error from "./Components/Error";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
const MainContainer = () => {
  return (
    <>
      <section className="Navbar" key="Navbar">
        <Navbar />
      </section>
      <section className="mainBody" key="mainBody">
        <Outlet />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.querySelector("#root")).render(
  <RouterProvider router={router} />
);

//https://www.themealdb.com/api/json/v1/1/random.php
