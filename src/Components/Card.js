import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { imgUrl } from "../config";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="">
        <img src={imgUrl + data?.cloudinaryImageId} alt="Resturant Image" />
      </div>
      <div className="resturant-details">
        <h4>{data?.name}</h4>
        <p className="resturant-cuisines">{data?.cuisines.join(",")}</p>
        <div className="resturant-bottom-details">
          <span
            className={
              data?.avgRating >= 4
                ? "bg-green resturant-rating"
                : "bg-orange resturant-rating"
            }
          >
            <FontAwesomeIcon icon={faStar} className="faStar" />
            <span>{data?.avgRating}</span>
          </span>
          <span>{data?.slaString}</span>
          <span>{data?.costForTwoString}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
