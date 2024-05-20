import { useState, useEffect } from 'react';
import { filterArrList } from '../config';
const Filter = ({ filterList, restaurantList }) => {
  const [ActiveFilter, SetActiveFilter] = useState([]);
  const filters = filterArrList;

  function HandelActiveFilter(e) {
    CurrFilter = e.target.value;
    if (ActiveFilter.includes(CurrFilter)) {
      SetActiveFilter(ActiveFilter.filter((res) => res !== CurrFilter));
    } else {
      SetActiveFilter([...ActiveFilter, CurrFilter]);
    }
  }

  function filterAndSortRestaurants(filterList) {
    const sortRestaurants = [...filterList];
    sortRestaurants.sort((a, b) => {
      return a.info.sla.deliveryTime - b.info.sla.deliveryTime;
    });
    filterData = sortRestaurants;
  }

  function filterAndSortRestRating(filterList) {
    const sortRestaurants = [...filterList];
    sortRestaurants
      .sort((a, b) => {
        return a.info.avgRating - b.info.avgRating;
      })
      .reverse();
    filterData = sortRestaurants;
  }

  function filterAndSortRestLowToHigh(filterList) {
    const sortRestaurants = [...filterList];
    sortRestaurants.sort((a, b) => {
      return a.info.costForTwo.match(/\d+/g) - b.info.costForTwo.match(/\d+/g);
    });
    filterData = sortRestaurants;
  }

  function filterAndSortRestHighToLow(filterList) {
    const sortRestaurants = [...filterList];

    sortRestaurants
      .sort((a, b) => {
        return a.info.costForTwo.match(/\d+/g) - b.info.costForTwo.match(/\d+/g);
      })
      .reverse();
    filterData = sortRestaurants;
  }

  useEffect(() => {
    filterItems(filterList);
  }, [ActiveFilter]);
  return (
    <div className="filterSec flex justify-evenly items-center gap-1">
      <select className="p-2 bg-gray-200 dark:bg-gray-800 " onChange={HandelActiveFilter}>
        {filters.map((curr) => {
          return (
            <option
              key={curr}
              className={`font-semibold hover:bg-gray-200 dark:hover:bg-gray-200 p-2 cursor-pointer rounded-lg`}
            >
              {curr}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filter;
function filterItems(filterList) {
  if (!ActiveFilter.length) {
    filterData = restaurantList;
    return;
  }
  ActiveFilter.map((currFilter) => {
    switch (currFilter) {
      case 'Delivery Time':
        filterAndSortRestaurants(filterList);
        break;
      case 'Rating':
        filterAndSortRestRating(filterList);
        break;
      case 'Low To High':
        filterAndSortRestLowToHigh(filterList);
        break;
      case 'High To Low':
        filterAndSortRestHighToLow(filterList);
        break;
      default:
        break;
    }
  });
  // setFilterList();
}
