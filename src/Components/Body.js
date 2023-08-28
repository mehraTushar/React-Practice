import { useState, useEffect } from "react";
import ShimerCard from "./Shimmer";
import { useResturant } from "../helper";
import Filter from "./Filter";
import Search from "./Search";
import FilterCards from "./FilterCard";
import NoMatch from "./NoMatch";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterRestaurantList, setFilterRestaurantList] = useState([]);

  useEffect(() => {
    const data = useResturant();
    data.then((res) => {
      setRestaurantList(res);
      setFilterRestaurantList(res);
    });
  }, []);

  if (restaurantList.length === 0) {
    return <ShimerCard />;
  }
  const searchProps = {
    Text: searchText,
    SetText: setSearchText,
    RestaurantList: restaurantList,
    SetFilterRestaurantList: setFilterRestaurantList,
  };
  // return <ShimerCard />;
  return (
    <>
      <section className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <Search {...searchProps} />
        <Filter
          filterList={filterRestaurantList}
          setFilterList={setFilterRestaurantList}
          restaurantList={restaurantList}
        />
      </section>
      {filterRestaurantList.length === 0 ? (
        <NoMatch></NoMatch>
      ) : (
        <FilterCards FilterResList={filterRestaurantList} />
      )}
    </>
  );
};
export default Body;
