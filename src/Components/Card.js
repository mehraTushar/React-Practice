import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { imgUrl } from "../config";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Card = ({ data }) => {
  return (
    <>
      <div className="rounded overflow-hidden h-full">
        <img
          className="w-full"
          src={imgUrl + data?.cloudinaryImageId}
          alt="Resturant Image"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{data?.name}</div>
          <p className="text-gray-700 text-base overflow-hidden">
            {data?.cuisines.map((cuisine, index) => (
              <span key={index}>
                {index > 0 && ", "}
                {cuisine}
              </span>
            ))}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-between items-center">
          <span
            className={
              data?.avgRating >= 4
                ? "bg-green-400 text-white rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 flex justify-center items-center gap-1 "
                : "bg-orange-400 text-white rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 flex justify-center items-center gap-1 "
            }
          >
            <FontAwesomeIcon icon={faStar} className="faStar" />
            <span>{data?.avgRating}</span>
          </span>
          <span
            className={
              data?.sla?.deliveryTime <= 30
                ? " bg-green-400 text-white inline-block rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2"
                : " bg-orange-400 text-white inline-block rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 "
            }
          >
            {data?.sla?.slaString}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {data?.costForTwo}
          </span>
        </div>
      </div>
    </>
  );
};
export default Card;
