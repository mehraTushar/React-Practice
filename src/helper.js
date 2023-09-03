import { ResturantDetailsUrl, ResturantMenuUrl } from "./config";

export async function useResturant() {
  try {
    const res = await fetch(ResturantDetailsUrl);
    const json = await res.json();

    async function checkJsonData(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {
        // initialize checkData for Swiggy Restaurant data
        let checkData =
          json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        // if checkData is not undefined then return it
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }
    // call the checkJsonData() function which return Swiggy Restaurant data
    const resData = await checkJsonData(json);
    return resData;
  } catch (ex) {}
}

export async function useResturantById(id) {
  try {
    const res = await fetch(ResturantMenuUrl + id);
    const data = await res.json();
    return data;
  } catch (ex) {}
}

export const useFilterList = (searchTest, restaurantList) => {
  const res = restaurantList.filter((meal) => {
    return searchTest.toLowerCase() === ""
      ? meal
      : meal?.info?.name?.toLowerCase()?.includes(searchTest);
  });
  return res;
};
// export function useGetLocation() {
//   const [location, setLocation] = useState(null);

//   function successFunction(position) {
//     var lat = position.coords.latitude;
//     var long = position.coords.longitude;
//     setLocation([lat, long]);
//   }

//   function errorFunction() {
//     alert("Please Allow Your Location Access");
//   }

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
//     } else {
//       alert(
//         "It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it."
//       );
//     }
//   }, []); // The empty dependency array ensures the effect runs only once

//   return location;
// }
