import Rescard,{withpromotedlabel} from "./Rescard";
import { useState, useEffect } from "react";
import ShimmerCard from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utlis/useOnline";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [SearchText, setSearchText] = useState("");
  const [searchedlistRes, setsearchedlistRes] = useState([]);
  const RestaurantCardPromoted = withpromotedlabel(Rescard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=22.56430&lng=88.36930&carousel=true&third_party_vendor=1"
    );
    const json = await data.json();
    const restaurantList =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setListOfRes(restaurantList);
    setsearchedlistRes(restaurantList);
  };

  const onlinestatus = useOnline();
  if (onlinestatus === false)
    return (
      <h1 className="text-center mt-10 text-red-500 text-xl font-semibold">
        Looks like you are offline... Please turn on your internet
      </h1>
    );

  if (listOfRes.length === 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <ShimmerCard key={index} />
          ))}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Search & Filter Section */}
      <div className="mb-6 flex flex-wrap gap-4 items-center justify-between">
        <input
          type="text"
          className="flex-1 min-w-[200px] px-4 py-2 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-3 focus:ring-cyan-500 shadow-sm"
          value={SearchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search restaurants..."
        />
        <button
          className="px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition duration-200 shadow-sm"
          onClick={() => {
            const searchedlist = listOfRes.filter((res) =>
              res.info.name.toLowerCase().includes(SearchText.toLowerCase())
            );
            setsearchedlistRes(searchedlist);
          }}
        >
          Search
        </button>

        <button
          className="px-6 py-2 bg-[#131f2f] border-b-blue-100 border-spacing-x-0.5 text-white rounded-md hover:bg-gray-700 transition duration-200 shadow-sm"
          onClick={() => {
            if (!isFiltered) {
              const filteredList = searchedlistRes.filter(
                (res) => res.info.avgRating > 4.5
              );
              setsearchedlistRes(filteredList);
            } else {
              setsearchedlistRes(listOfRes);
              setSearchText("");
            }
            setIsFiltered(!isFiltered);
          }}
        >
          {isFiltered
            ? "Show All Restaurants (Clear Filters)"
            : "Show Only Top Rated Restaurants"}
        </button>
      </div>

      

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {searchedlistRes.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            <div className="bg-gray-900 text-white rounded-xl shadow-lg p-4 hover:bg-gray-800 hover:scale-105 transition-all duration-300 border border-gray-800 w-full h-[380px] flex flex-col justify-between hover:ring-3 hover:ring-emerald-500">
             {res.info.promoted?<RestaurantCardPromoted resData={res}/> : <Rescard resData={res} />}
              
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
