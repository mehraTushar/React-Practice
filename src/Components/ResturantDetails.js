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
  return Resturant === "" ? (
    <ResturantinfoShimmer />
  ) : (
    <>
      <section className="main-resturant-details ">
        <div className="card">
          <div>
            <img
              src={imgUrl + Resturant?.cloudinaryImageId}
              alt="Resturant Image"
            />
          </div>
          <div className="resturant-header-details">
            <h2>{Resturant?.name}</h2>
            <p className="resturant-cuisines">
              {Resturant?.cuisines.join(",")}
            </p>
            <div className="ratingSec">
              <span
                className={
                  Resturant?.avgRating >= 4
                    ? "bg-green resturant-rating"
                    : "bg-orange resturant-rating"
                }
              >
                <FontAwesomeIcon icon={faStar} className="faStar" />
                <span>{Resturant?.avgRating}</span>
              </span>
            </div>
            <span>{Resturant?.slaString}</span>
            <span>
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
