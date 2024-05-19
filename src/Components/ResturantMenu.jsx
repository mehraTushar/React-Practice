import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faIndianRupeeSign, faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons';

import { ResturantMenuShimmer } from './Shimmer';
import { useResturantById } from '../hooks/useResturantById';
import BreadCrumb from './Breadcrumb';
import { ExpandSearchBar } from './Search';
import NoMatch from './NoMatch';
import MenuCategory from './MenuCategory';
const ResturantMenu = () => {
  const { id } = useParams();
  const [Menu, setMenu] = useState('');
  const [FilterMenu, setFilterMenu] = useState('');
  const [Resturant, setResturant] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchMenu, setSearchMenu] = useState('');
  useEffect(() => {
    const res = useResturantById(id);
    res.then((json) => {
      const data = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      setMenu(data);
      setFilterMenu(data);
      setResturant(json?.data?.cards[2]?.card?.card?.info);
    });
  }, []);
  // return <ResturantinfoShimmer />;
  const searchMenuProps = {
    searchMenu: searchMenu,
    setSearchMenu: setSearchMenu,
    Menu: Menu,
    setFilterMenu: setFilterMenu,
    setIsSearchActive: setIsSearchActive,
  };

  if (FilterMenu === '' && Resturant === '') return <ResturantMenuShimmer />;

  return (
    <>
      <section className="mx-auto max-w-7xl  p-6 lg:px-8 dark:bg-black">
        <div className="flex justify-between items-center">
          <div>
            <BreadCrumb Resturant={Resturant}></BreadCrumb>
          </div>
          <div className="relative">
            {isSearchActive ? (
              <ExpandSearchBar {...searchMenuProps}></ExpandSearchBar>
            ) : (
              <span onClick={() => setIsSearchActive(true)}>
                <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" className="cursor-pointer" />
              </span>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center w-auto pt-8">
          <div>
            <h2 className="font-bold text-xl">{Resturant?.name}</h2>
            <p>
              {Resturant?.cuisines.map((cuisine, index) => (
                <span key={index}>
                  {index > 0 && ', '}
                  {cuisine}
                </span>
              ))}
            </p>
            <p>{Resturant?.areaName}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 border border-gray-300 rounded p-2">
            <span
              className={
                Resturant?.avgRating >= 4
                  ? 'text-green-500 text-lg font-bold flex justify-center items-center gap-1'
                  : 'text-orange-400 text-lg font-bold flex justify-center items-center gap-1'
              }
            >
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>{Resturant?.avgRating}</span>
            </span>
            <span>{Resturant?.totalRatingsString}</span>
          </div>
        </div>
        <div className="flex justify-start gap-4 pt-8 items-center">
          <div className="font-bold flex gap-2 items-center justify-center">
            <span>
              <FontAwesomeIcon icon={faClock} size="lg" />
            </span>
            <span>24 mins</span>
          </div>
          <div className="font-bold flex gap-2 items-center justify-center">
            <span className="">
              <FontAwesomeIcon size="lg" icon={faIndianRupeeSign} border className="border-black" />
            </span>
            <span>{Resturant?.costForTwoMessage}</span>
          </div>
        </div>
        <hr className="h-px mt-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="pt-8">
          {FilterMenu?.length === 0 ? (
            <NoMatch />
          ) : (
            FilterMenu?.filter((item) => {
              return item.card.card.title !== undefined && item?.card?.card?.itemCards !== undefined;
            }).map((item, index) => {
              return <MenuCategory item={item} index={index} key={item.card.card.title} Resturant={Resturant} />;
            })
          )}
        </div>
      </section>
    </>
  );
};

export default ResturantMenu;
