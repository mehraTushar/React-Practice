import { useState, useEffect } from 'react';
import ShimmerCard from './Shimmer.jsx';
import { useFilterCard } from '../hooks/useFilterCard.js';
import { useRestaurant } from '../hooks/useRestaurant.js';
import Search from './Search';
import FilterCards from './FilterCard.jsx';
import NoMatch from './NoMatch.jsx';
import { Header } from './Header.jsx';
import Filter from './Filter.jsx';
import { useQuery } from '@tanstack/react-query';

const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  // const [headerList, setHeaderList] = useState([]);

  // const fetchData = async () => {
  //   const { restaurantData, headerData } = await useRestaurant();
  //   setRestaurantList(restaurantData);
  //   setFilterList(restaurantData);
  //   setHeaderList(headerData);
  // };

  const query = useQuery({ queryKey: ['Resturant'], queryFn: useRestaurant });
  useEffect(() => {
    const filteredList = useFilterCard(searchText, restaurantList);
    setFilterList(filteredList);
  }, [searchText, restaurantList]);
  if (query.isError) return;
  if (query.isLoading) return <ShimmerCard />;
  const { restaurantData, headerData } = query?.data;
  return (
    <>
      <Header headerList={headerData?.imageGridCards?.info} />
      <section className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 bg-white dark:bg-black text-black dark:text-white">
        <Search Text={searchText} SetText={setSearchText} />
        <Filter restaurantList={restaurantData} setFilterList={setFilterList} />
      </section>
      {restaurantData?.length === 0 ? (
        <NoMatch className="bg-white dark:bg-black text-black dark:text-white" />
      ) : (
        <FilterCards FilterResList={restaurantData} className="bg-white dark:bg-black text-black dark:text-white" />
      )}
    </>
  );
};

export default Body;
