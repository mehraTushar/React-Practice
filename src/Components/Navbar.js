import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faChampagneGlasses,
  faBurger,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      {/* <FontAwesomeIcon icon={faChampagneGlasses} size="2xl" /> */}
      <h1 className="mainHeading">
        HungryHub
        <FontAwesomeIcon icon={faBurger} size="lg" />
      </h1>

      {/* <FontAwesomeIcon icon={faUser} size="2xl" /> */}
    </>
  );
};

export default Navbar;
