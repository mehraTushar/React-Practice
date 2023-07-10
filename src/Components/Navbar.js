import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { NavbarLinksArr } from "../config";

const Navbar = () => {
  return (
    <>
      <div>
        <h1 className="mainHeading">
          <Link to={"/"}>
            HungryHub
            <FontAwesomeIcon icon={faBurger} size="lg" />
          </Link>
        </h1>
      </div>
      <div>
        <ul className="navbarLinks">
          {NavbarLinksArr.map((e, i) => (
            <Link to={e === "Home" ? "" : e.toLowerCase()} key={i}>
              {e}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Navbar;
