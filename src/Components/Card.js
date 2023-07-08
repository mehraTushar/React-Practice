import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const Card = ({ data }) => {
  return (
    <div className="card">
      <h2>{data.strMeal}</h2>
      <img src={data.strMealThumb} />
      <div>
        <div className="CategoryArea">
          <p>Category: {data.strCategory}</p>
          <p>Area: {data.strArea}</p>
        </div>
        <h4>Instructions:</h4>
        <p>{data.strInstructions}</p>
      </div>
      <div className="recipieLink">
        <p>Click Here For Recipe</p>

        <a href={data.strYoutube} target="_blank">
          <FontAwesomeIcon
            icon={faPlay}
            size="2xl"
            className="recipieVideoIcon"
          />
        </a>
      </div>
      {/* <p>{data.strTags}</p> */}
      <span id="circle"></span>
    </div>
  );
};

export default Card;
