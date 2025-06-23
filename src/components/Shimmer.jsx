const ShimmerCard = () => {
  return (
    <div className="w-72 h-80 p-4 m-4 rounded-xl bg-[#1f2937] shadow-md animate-pulse">
      <div className="w-full h-32 bg-gray-600 rounded-md mb-4"></div>
      <div className="h-4 bg-gray-500 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-500 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-500 rounded w-5/6"></div>
    </div>
  );
};

export default ShimmerCard;
