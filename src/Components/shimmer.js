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

export default ShimerCard;
