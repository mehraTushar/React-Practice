import { useState, useEffect } from 'react';
import ShimerCard from './Shimmer.jsx';
import { useFilterCard } from '../hooks/useFilterCard.js';
import { useRestaurant } from '../hooks/useRestaurant.js';
import Search from './Search';
import FilterCards from './FilterCard.jsx';
import NoMatch from './NoMatch.jsx';
import { Header } from './Header.jsx';

const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [restaurantList, setRestaurantList] = useState([]);
  const [headerList, setHeaderList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { restaurantData, headerData } = await useRestaurant();
      setRestaurantList(restaurantData);
      setHeaderList(headerData);
    };

    fetchData();
  }, []);

  if (restaurantList?.length === 0) {
    return <ShimerCard />;
  }

  var filterData = useFilterCard(searchText, restaurantList);

  const searchProps = {
    Text: searchText,
    SetText: setSearchText,
    RestaurantList: restaurantList,
    filterData,
  };
  return (
    <>
      <Header headerList={headerList?.imageGridCards.info} />
      <section className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 bg-white dark:bg-black text-black dark:text-white">
        <Search {...searchProps} />
        {/* <Filter restaurantList={restaurantList} /> */}
      </section>
      {filterData?.length === 0 ? (
        <NoMatch className="bg-white dark:bg-black text-black dark:text-white" />
      ) : (
        <FilterCards FilterResList={filterData} className="bg-white dark:bg-black text-black dark:text-white" />
      )}
    </>
  );
};
export default Body;
