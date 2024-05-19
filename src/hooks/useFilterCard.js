export const useFilterCard = (searchTest, restaurantList) => {
  const res = restaurantList.filter((meal) => {
    return searchTest.toLowerCase() === '' ? meal : meal?.info?.name?.toLowerCase()?.includes(searchTest);
  });
  return res;
};
