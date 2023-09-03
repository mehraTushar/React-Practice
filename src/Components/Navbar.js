import Logo from "./Logo";
import { Link } from "react-router-dom";
import { NavbarLinksArr } from "../config";
import { useSelector } from "react-redux";

const Navbar = () => {
  const count = useSelector((state) => state.cart.value);
  return (
    <nav
      className="Navbar mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      key="Navbar"
    >
      <Logo />
      <div key="navBarLinks">
        <ul className="navbarLinks flex gap-4">
          {NavbarLinksArr.map((e, i) =>
            e.toLowerCase() === "cart" ? (
              <span
                className="flex justify-center items-center relative"
                key={i}
              >
                <Link
                  to={e === "Home" ? "" : e.toLowerCase()}
                  className="font-semibold"
                >
                  {e}
                  <svg
                    className=" fill-white stroke-slate-700 stroke-2 inline-block ml-2 "
                    viewBox="-1 2 37 32"
                    height="25"
                    width="25"
                    fill="#686b78"
                  >
                    <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                    <text x="12" y="23" fontSize="20">
                      {count}
                    </text>
                  </svg>
                </Link>
              </span>
            ) : (
              <Link
                to={e === "Home" ? "" : e.toLowerCase()}
                key={i}
                className="font-semibold"
              >
                {e}
              </Link>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
