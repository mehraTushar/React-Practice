import { useFilterCard } from "../helper";

const Search = ({ Text, RestaurantList, SetText, SetFilterRestaurantList }) => {
  return (
    <div className="flex-1">
      <input
        type="text"
        placeholder="Search By Name"
        className="h-10 w-auto rounded-md bg-gray-50 px-4 font-thin outline-4 border-black border-2 drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg"
        value={Text}
        onChange={(e) => {
          SetText(e.target.value);
          const res = useFilterCard(e.target.value, RestaurantList);
          SetFilterRestaurantList(res);
        }}
      />
      {/* <span>
        <button
          className="rounded-lg px-4 mx-2 py-2 bg-purple-500 text-white hover:bg-purple-600 duration-300"
          onClick={() => {
            const res = useFilterCard(Text, RestaurantList);
            SetFilterRestaurantList(res);
          }}
        >
          Search
        </button>
      </span> */}
    </div>
  );
};
export default Search;
