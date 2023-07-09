import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { imgUrl } from "../config";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ResturantMenuUrl } from "../config";
import { ResturantinfoShimmer } from "./Shimmer";
const ResturantDetails = () => {
  const { id } = useParams();
  const [Resturant, setResturant] = useState("");
  useEffect(() => {
    getResturantDetails(id, ResturantMenuUrl, setResturant);
  }, []);
  return Resturant === "" ? (
    <ResturantinfoShimmer />
  ) : (
    <>
      {console.log(Resturant)}
      <section className="main-resturant-details ">
        <div className="card">
          <div>
            <img
              src={imgUrl + Resturant?.cloudinaryImageId}
              alt="Resturant Image"
            />
          </div>
          <div className="resturant-header-details">
            <h2>{Resturant.name}</h2>
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

async function getResturantDetails(id, ResturantMenuUrl, setResturant) {
  const res = await fetch(ResturantMenuUrl + id);
  const data = await res.json();
  setResturant(data?.data?.cards[0]?.card?.card?.info);
}

export default ResturantDetails;
