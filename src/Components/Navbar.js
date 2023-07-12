import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { NavbarLinksArr } from "../config";

const Navbar = () => {
  return (
    <nav
      className="Navbar mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      key="Navbar"
    >
      <div>
        <Link
          to={"/"}
          className="flex mx-auto  items-center justify-between gap-2 text-2xl"
        >
          <h1 className="mainHeading">HungryHub</h1>
          <FontAwesomeIcon icon={faBurger} size="lg" />
        </Link>
      </div>
      <div>
        <ul className="navbarLinks flex gap-4">
          {NavbarLinksArr.map((e, i) => (
            <Link to={e === "Home" ? "" : e.toLowerCase()} key={i}>
              {e}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
