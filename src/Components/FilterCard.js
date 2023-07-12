import { Link } from "react-router-dom";
import Card from "./Card";
const FilterCards = ({FilterResList}) =>{
    return <>
        <section className="foodCardList flex flex-wrap mx-auto max-w-7xl gap-8 p-6 lg:px-7">
        {FilterResList?.map((restaurant) => {
          if (restaurant?.cardType != "restaurant")
            return;
          let resId = restaurant?.data?.data?.id;
          return <Link to={"/resturant/"+resId} key={resId} className="card shadow-lg hover:shadow-2xl ease-in-out duration-200"> <Card data={...restaurant?.data?.data}   /></Link>;
        })}
      </section>
    </>
}
export default FilterCards;