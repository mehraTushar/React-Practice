import { useState, useEffect } from "react";
import Card from "./Card";
import ShimerCard from "./Shimmer";
import {Link} from "react-router-dom"


const filterArrList = [
  "Delivery TIme",
  "Rating",
  "Cost: Low TO High",
  "Cost: High TO Low",
];
const SearchCard = ({Text,RestaurantList,SetText,SetFilterRestaurantList}) =>{
  return (
  <div className="uppperBody">
    <div className="SearchCardSec" >
        <input
          type="text"
          placeholder="Search By Name"
          className="SearchBox"
          value={Text}
          onChange={(e) => {
            SetText(e.target.value);      
                  
          }}
        />
        <span>  
          <button
            onClick={() => {
              const res = filterData(Text, RestaurantList);
              SetFilterRestaurantList(res);
            }}
            >
            Search
          </button>
          </span>
      </div>
      <div className="filterCardSec" >
        <ul>{filterArrList?.map((filter,index)=>{return <li key={index} className="not-Developed">{filter}</li>})}</ul>
      </div>
  </div>)

}




const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantList, setRestaurantList] = useState("");
  const [filterRestaurantList, setFilterRestaurantList] = useState("");

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7046486&lng=76.71787259999999&offset=1"
      ); //https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7046486&lng=76.71787259999999&offset=1
      const data = await res.json();
      if (data != "") {
        setRestaurantList(data.data.cards);
        setFilterRestaurantList(data.data.cards);
      }
    } catch (ex) {}
  }

  if(restaurantList.length === 0){
    return <ShimerCard/>
  }

  return filterRestaurantList.length == 0 ? (
    <div><SearchCard Text={searchText}SetText={setSearchText} RestaurantList={restaurantList} SetFilterRestaurantList={setFilterRestaurantList} /><div className="NoMatchFound">Sorry No Match Found 😢</div></div>
  ) : (
    <>
      <SearchCard Text={searchText}SetText={setSearchText} RestaurantList={restaurantList} SetFilterRestaurantList={setFilterRestaurantList} />
      {}
      <div className="foodCardList">
        {filterRestaurantList?.map((restaurant) => {
          if (restaurant.cardType != "restaurant") {
            
            return;
          }
          let resId = restaurant.data.data.id;
          return <Link to={"/resturant/"+resId} key={resId} className="card"> <Card data={...restaurant.data.data}  /></Link>;
        })}
      </div>
    </>
  );
};
const filterData = (searchTest, restaurantList) => {
  var res = restaurantList.filter((meal) => {
    return searchTest.toLowerCase() === ""? meal : meal?.data?.data?.name?.toLowerCase()?.includes(searchTest);
  });
  return res;
};

export default Body;
