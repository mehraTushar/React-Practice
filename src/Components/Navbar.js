import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChampagneGlasses } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => (
  <>
    <FontAwesomeIcon icon={faChampagneGlasses} size="2xl" />
    <input
      type="text"
      placeholder="Click here To Search"
      className="SearchBox"
    />
    <FontAwesomeIcon icon={faUser} size="2xl" />
  </>
);

export default Navbar;
