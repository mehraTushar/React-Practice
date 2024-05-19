import { useFilterMenuList } from '../hooks/useFilterMenuList';
import { useFilterCard } from '../hooks/useFilterCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Search = ({ Text, RestaurantList, SetText, filterData }) => {
  return (
    <div className="flex-1">
      <input
        type="text"
        placeholder="Search By Name"
        className="h-10 w-auto rounded-md bg-gray-50 dark:bg-gray-800 px-4 font-thin outline-4 border-black border-2 drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg"
        value={Text}
        onChange={(e) => {
          SetText(e.target.value);
          const res = useFilterCard(e.target.value.trim(), RestaurantList);
          filterData = res;
        }}
      />
    </div>
  );
};

export const ExpandSearchBar = ({ searchMenu, setSearchMenu, Menu, setFilterMenu, setIsSearchActive }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search By Name"
        className="h-10 w-auto rounded-md bg-gray-50 dark:bg-gray-800 px-4 font-thin outline-4 border-black border-2 drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg"
        value={searchMenu}
        onChange={(e) => {
          setSearchMenu(e.target.value);
          const res = useFilterMenuList(e.target.value.trim(), Menu);
          setFilterMenu(res);
        }}
        // onClick={() => setIsSearchActive(false)}
      />
      <FontAwesomeIcon
        icon={faXmark}
        className="absolute top-3 right-2 cursor-pointer z-10 text-gray-700 dark:text-white"
        onClick={() => {
          setIsSearchActive(false);
          setSearchMenu('');
          setFilterMenu(Menu?.itemCards);
        }}
      />
    </>
  );
};

export default Search;
