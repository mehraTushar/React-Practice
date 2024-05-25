import { useState, useEffect } from 'react';
import { filterArrList } from '../config';

const Filter = ({ filterList, restaurantList }) => {
  const [activeFilter, setActiveFilter] = useState([]);

  function handleActiveFilter(e) {
    const currFilter = e.target.value;
    if (activeFilter.includes(currFilter)) {
      setActiveFilter(activeFilter.filter((res) => res !== currFilter));
    } else {
      setActiveFilter([...activeFilter, currFilter]);
    }
  }

  function filterAndSortRestaurants(list) {
    const sortedRestaurants = [...list].sort((a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime);
    filterData = sortedRestaurants;
  }

  function filterAndSortRestRating(list) {
    const sortedRestaurants = [...list].sort((a, b) => b.info.avgRating - a.info.avgRating);
    filterData = sortedRestaurants;
  }

  function filterAndSortRestLowToHigh(list) {
    const sortedRestaurants = [...list].sort(
      (a, b) => parseInt(a.info.costForTwo.match(/\d+/g)) - parseInt(b.info.costForTwo.match(/\d+/g))
    );
    filterData = sortedRestaurants;
  }

  function filterAndSortRestHighToLow(list) {
    const sortedRestaurants = [...list].sort(
      (a, b) => parseInt(b.info.costForTwo.match(/\d+/g)) - parseInt(a.info.costForTwo.match(/\d+/g))
    );
    filterData = sortedRestaurants;
  }

  function filterItems(list) {
    if (!activeFilter.length) {
      filterData = restaurantList;
      return;
    }
    activeFilter.forEach((currFilter) => {
      switch (currFilter) {
        case 'Delivery Time':
          filterAndSortRestaurants(list);
          break;
        case 'Rating':
          filterAndSortRestRating(list);
          break;
        case 'Low To High':
          filterAndSortRestLowToHigh(list);
          break;
        case 'High To Low':
          filterAndSortRestHighToLow(list);
          break;
        default:
          break;
      }
    });
  }

  useEffect(() => {
    filterItems(filterList);
  }, [activeFilter, filterList, restaurantList]);

  return (
    <div className="filterSec flex justify-evenly items-center gap-1">
      <select className="p-2 bg-gray-200 dark:bg-gray-800" onChange={handleActiveFilter}>
        {filterArrList.map((curr) => (
          <option
            key={curr}
            className="font-semibold hover:bg-gray-200 dark:hover:bg-gray-200 p-2 cursor-pointer rounded-lg"
          >
            {curr}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
