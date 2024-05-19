export const useFilterMenuList = (searchTest, menuList) => {
  if (!searchTest.trim()) {
    return menuList;
  }
  const filteredMenuList = menuList.filter((meal) =>
    meal?.card?.card?.itemCards?.some((card) =>
      card?.card?.info?.name?.toLowerCase().includes(searchTest.toLowerCase())
    )
  );

  return filteredMenuList;
};
