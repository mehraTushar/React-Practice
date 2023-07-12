import { useState, useEffect } from "react";
import ShimerCard from "./Shimmer";
import { useResturant } from "../helper";
import Filter from "./Filter";
import Search from "./Search";
import FilterCards from "./FilterCard";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantList, setRestaurantList] = useState("");
  const [filterRestaurantList, setFilterRestaurantList] = useState("");

  useEffect(() => {
    const data = useResturant();
    data.then((res) => {
      setRestaurantList(res?.data?.cards);
      setFilterRestaurantList(res?.data?.cards);
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

  return filterRestaurantList.length == 0 ? (
    //refactor this if you know how to
    <div>
      <section className="uppperBody mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <Search {...searchProps} />
        <Filter />
      </section>
      <div className="NoMatchFound">Sorry No Match Found 😢</div>
    </div>
  ) : (
    <>
      <section className="uppperBody mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <Search {...searchProps} />
        <Filter />
      </section>
      <FilterCards FilterResList={filterRestaurantList} />
    </>
  );
};
export default Body;
