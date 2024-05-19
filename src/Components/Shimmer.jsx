const ShimmerCard = () => {
  return (
    <div className="shimmer-card-list mx-auto max-w-7xl grid gap-4 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-3 p-6 lg:px-7">
      {Array(10)
        .fill('')
        .map((e, i) => {
          return (
            <div className="shadow rounded-md p-4 max-w-sm w-full mx-auto h-80 max-h-80 dark:bg-gray-800" key={i}>
              <div className="rounded h-40 w-auto animate-pulse bg-gray-400 dark:bg-gray-600"></div>
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-8 py-3">
                  <div className="rounded h-3 bg-gray-400 dark:bg-black"></div>
                  <div className="rounded h-3 bg-gray-400 dark:bg-black"></div>
                  <div className="rounded h-3 bg-gray-400 dark:bg-black"></div>
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
    <div className="rounded-md mx-auto max-w-7xl p-6 lg:px-8 dark:bg-black">
      <div className="rounded h-60 animate-pulse bg-gray-400 "></div>
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-8 py-3">
          {Array(4)
            .fill('')
            .map((e, i) => {
              return <div key={i} className="rounded h-10 bg-gray-400 dark:bg-gray-600"></div>;
            })}
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
