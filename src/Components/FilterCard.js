import { Link } from "react-router-dom";
import Card from "./Card";
import { filterArrList } from "../config";
const FilterCards = ({FilterResList}) =>{
    return <>
        <section className="mx-auto max-w-7xl lg:px-7 font-semibold text-xl">
          {FilterResList?.length} restaurants
        </section>
        <section className="foodCardList mx-auto max-w-7xl grid gap-4 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-3 p-6 lg:px-7 ">
        {FilterResList?.map((restaurant) => {
        let resId = restaurant?.info.id;
          return <Link to={"/resturant/"+resId} key={resId} className="card hover:shadow-2xl ease-in-out duration-200"> <Card data={...restaurant?.info}   /></Link>;
        })}
      </section>
    </>
}
export default FilterCards;