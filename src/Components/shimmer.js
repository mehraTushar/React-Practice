const ShimerCard = () => {
  return (
    <div className="shimmer-card-list">
      {Array(10)
        .fill("")
        .map((e, i) => {
          return (
            <div key={i} className="shimmer-card">
              {e}
            </div>
          );
        })}
    </div>
  );
};

export const ResturantinfoShimmer = () => {
  return (
    <div className="Resturant-Info-shimmer-card-list">
      <div className="Resturant-Info-shimmer-card"></div>
    </div>
  );
};

export default ShimerCard;
