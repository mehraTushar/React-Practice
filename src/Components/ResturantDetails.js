import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { imgUrl } from "../config";
import { ResturantinfoShimmer } from "./Shimmer";
import { useResturantById } from "../helper";
const ResturantDetails = () => {
  const { id } = useParams();
  const [Resturant, setResturant] = useState("");
  useEffect(() => {
    const res = useResturantById(id);
    res.then((data) => {
      setResturant(data?.data?.cards[0]?.card?.card?.info);
    });
  }, []);
  // return <ResturantinfoShimmer />;
  return Resturant === "" ? (
    <ResturantinfoShimmer />
  ) : (
    <>
      <section className="main-resturant-details flex items-center justify-center ">
        <div className="card rounded p-4 shadow-lg hover:shadow-2xl ease-in-out duration-200">
          <div className="rounded overflow-hidden shadow-lg h-full">
            <img
              src={imgUrl + Resturant?.cloudinaryImageId}
              alt="Resturant Image"
              className="w-full"
            />
          </div>
          <div className="resturant-header-details">
            <h2 className="font-bold text-xl mb-2">{Resturant?.name}</h2>
            <p className="resturant-cuisines text-gray-700 text-base overflow-hidden">
              {Resturant?.cuisines.map((cuisine, index) => (
                <span key={index}>
                  {index > 0 && ", "}
                  {cuisine}
                </span>
              ))}
            </p>
            <div className="ratingSec">
              <span
                className={
                  Resturant?.avgRating >= 4
                    ? " bg-green-400 text-white rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 flex justify-center items-center"
                    : " bg-orange-400 text-white inline-block rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 "
                }
              >
                <FontAwesomeIcon icon={faStar} className="faStar" />
                <span>{Resturant?.avgRating}</span>
              </span>
            </div>
            <span className="inline-block text-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {Resturant?.areaName} {Resturant?.locality}
            </span>
          </div>
          <div className="resturant-bottom-details"></div>
        </div>
      </section>
    </>
  );
};

export default ResturantDetails;
