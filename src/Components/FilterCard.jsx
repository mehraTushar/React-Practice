import { Link } from 'react-router-dom';
import Card from './Card';

const FilterCards = ({ FilterResList }) => {
  return (
    <>
      <section className="mx-auto max-w-7xl lg:px-7 font-semibold text-xl dark:text-white">
        {FilterResList?.length !== 0
          ? `${FilterResList?.length} Restaurant${FilterResList?.length > 1 ? 's' : ''}`
          : ''}
      </section>
      <section className="foodCardList mx-auto max-w-7xl grid gap-3 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-3 p-6 lg:px-7">
        {FilterResList?.map((restaurant) => {
          let resId = restaurant?.info.id;
          return (
            <Link
              to={'/restaurant/' + resId}
              key={resId}
              className="card m-2 hover:shadow-2xl ease-in-out duration-200 hover:scale-110 transition cursor-pointer dark:bg-black dark:hover:bg-gray-700"
            >
              <Card data={restaurant?.info} />
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default FilterCards;
