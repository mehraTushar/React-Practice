import { data } from "../config";
import Card from "./Card";

const Body = () => {
  return (
    <div className="foodCardList">
      {data.meals.map((meal) => {
        return <Card data={meal} key={meal.idMeal} />;
      })}
    </div>
  );
};

export default Body;
