import Logo from "./Logo";
import { Link } from "react-router-dom";
import { NavbarLinksArr } from "../config";

const Navbar = () => {
  return (
    <nav
      className="Navbar mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      key="Navbar"
    >
      <Logo />
      <div>
        <ul className="navbarLinks flex gap-4">
          {NavbarLinksArr.map((e, i) => (
            <Link
              to={e === "Home" ? "" : e.toLowerCase()}
              key={i}
              className="font-semibold"
            >
              {e}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
