import { Link } from "react-router-dom";
import Card from "./Card";
const FilterCards = ({FilterResList}) =>{
    return <>
        <section className="foodCardList">
        {FilterResList?.map((restaurant) => {
          if (restaurant?.cardType != "restaurant")
            return;
          let resId = restaurant?.data?.data?.id;
          return <Link to={"/resturant/"+resId} key={resId} className="card"> <Card data={...restaurant?.data?.data}  /></Link>;
        })}
      </section>
    </>
}
export default FilterCards;