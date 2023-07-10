import { ResturantDetailsUrl, ResturantMenuUrl } from "./config";

export async function useResturant() {
  try {
    const res = await fetch(ResturantDetailsUrl);
    const data = await res.json();
    return data;
  } catch (ex) {}
}

export const useFilterCard = (searchTest, restaurantList) => {
  const res = restaurantList.filter((meal) => {
    return searchTest.toLowerCase() === ""
      ? meal
      : meal?.data?.data?.name?.toLowerCase()?.includes(searchTest);
  });
  return res;
};
export async function useResturantById(id) {
  try {
    const res = await fetch(ResturantMenuUrl + id);
    const data = await res.json();
    return data;
  } catch (ex) {}
}
