const ShimerCard = () => {
  return (
    <div className="shimmer-card-list mx-auto max-w-7xl grid gap-4 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-3 p-6 lg:px-7">
      {Array(10)
        .fill("")
        .map((e, i) => {
          return (
            <div
              className=" shadow rounded-md p-4 max-w-sm w-full mx-auto h-80 max-h-80 "
              key={i}
            >
              <div className="rounded bg-gray-400 h-40 w-auto animate-pulse"></div>
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-8 py-3">
                  <div className="h-3 bg-gray-400 rounded"></div>
                  <div className="h-3 bg-gray-400 rounded"></div>
                  <div className="h-3 bg-gray-400 rounded"></div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export const ResturantMenuShimmer = () => {
  return (
    <div className="rounded-md  mx-auto max-w-7xl  p-6 lg:px-8">
      <div className="rounded bg-gray-400 h-60 animate-pulse"></div>
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-8 py-3">
          {Array(6)
            .fill("")
            .map((e, i) => {
              return <div key={i} className="h-6 bg-gray-400 rounded"></div>;
            })}
        </div>
      </div>
    </div>
  );
};

export default ShimerCard;
