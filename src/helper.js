export function checkJsonData(jsonData) {
  for (let i = 0; i < jsonData?.data?.cards.length; i++) {
    // Initialize restaurantData and headerData
    let restaurantData = jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    let headerData = jsonData.data.cards[0].card.card;
    // If restaurantData is not undefined, return it along with headerData
    if (restaurantData !== undefined) {
      return { restaurantData, headerData };
    }
  }
}
