import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faIndianRupeeSign,
  faMagnifyingGlass,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import { ResturantinfoShimmer } from "./Shimmer";
import { useResturantById } from "../helper";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
const ResturantDetails = () => {
  const { id } = useParams();
  const [Menu, setMenu] = useState("");
  const [Resturant, setResturant] = useState("");
  useEffect(() => {
    const res = useResturantById(id);
    res.then((json) => {
      const res =
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card?.itemCards;
      setMenu(res);
      setResturant(json?.data?.cards[0]?.card?.card?.info);
    });
  }, []);
  // return <ResturantinfoShimmer />;
  return Menu === "" ? (
    <ResturantinfoShimmer />
  ) : (
    <>
      <section className="mx-auto max-w-7xl  p-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link
                    to={"/"}
                    className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-400"
                  >
                    <svg
                      className="w-3 h-3 mr-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="w-3 h-3 text-gray-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span
                      href="#"
                      className="ml-1 text-sm font-medium text-gray-700 md:ml-2 dark:text-gray-400"
                    >
                      {Resturant.city}
                    </span>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg
                      className="w-3 h-3 text-gray-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span className="ml-1 text-sm font-medium text-gray-700 md:ml-2 dark:text-gray-700">
                      {Resturant.name}
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
          </div>
        </div>
        <div className=" flex justify-between items-center w-auto pt-8">
          <div>
            {/* {console.log(Resturant)} */}
            <h2 className="font-bold text-xl">{Resturant.name}</h2>
            <p>
              {Resturant?.cuisines.map((cuisine, index) => (
                <span key={index}>
                  {index > 0 && ", "}
                  {cuisine}
                </span>
              ))}
            </p>
            <p>{Resturant.areaName}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 border border-gray-300 rounded p-2">
            <span
              className={
                Resturant?.avgRating >= 4
                  ? "text-green-500 text-lg font-bold flex justify-center items-center gap-1 "
                  : "text-orange-400 text-lg font-bold flex justify-center items-center gap-1 "
              }
            >
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>{Resturant.avgRating}</span>
            </span>
            <span>{Resturant.totalRatingsString}</span>
          </div>
        </div>
        <div className=" flex justify-start gap-4 pt-8 items-center">
          <div className="font-bold flex gap-2 items-center justify-center">
            <span>
              <FontAwesomeIcon icon={faClock} size="lg" />
            </span>
            <span>24 mins</span>
          </div>
          <div className="font-bold flex gap-2 items-center justify-center">
            <span className="">
              <FontAwesomeIcon
                size="lg"
                icon={faIndianRupeeSign}
                border
                className="border-black"
              />
            </span>
            <span>{Resturant.costForTwoMessage}</span>
          </div>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="pt-8">
          <div>
            {Menu.map((menuItem) => {
              return (
                <>
                  {console.log(menuItem.card.info.id)}
                  <MenuItem
                    Item={menuItem.card.info}
                    key={menuItem.card.info.id}
                  ></MenuItem>
                  <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ResturantDetails;
