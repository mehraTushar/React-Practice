import { useFilterCard } from "../helper";

const Search = ({ Text, RestaurantList, SetText, SetFilterRestaurantList }) => {
  return (
    <div className="SearchCardSec">
      <input
        type="text"
        placeholder="Search By Name"
        className="SearchBox"
        value={Text}
        onChange={(e) => {
          SetText(e.target.value);
        }}
      />
      <span>
        <button
          onClick={() => {
            const res = useFilterCard(Text, RestaurantList);
            SetFilterRestaurantList(res);
          }}
        >
          Search
        </button>
      </span>
    </div>
  );
};
export default Search;
