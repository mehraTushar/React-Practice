import { filterArrList } from "../config";
const Filter = () => {
  return (
    <>
      <div className="filterSec">
        <ul className="flex items-center  gap-4 ">
          {filterArrList?.map((filter, index) => {
            return (
              <li key={index} className="not-Developed">
                {filter}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default Filter;
