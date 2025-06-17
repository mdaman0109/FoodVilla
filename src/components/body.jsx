import Rescard from "./Rescard";
import { useState, useEffect } from "react";
import ShimmerCard from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utlis/useOnline";
const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
 // const [originalList, setOriginalList] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
const [SearchText, setSearchText] = useState("");
const [searchedlistRes , setsearchedlistRes]=useState([]);




  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=22.56430&lng=88.36930&carousel=true&third_party_vendor=1"
    );
    const json = await data.json();
    const restaurantList = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setListOfRes(restaurantList);
    setsearchedlistRes(restaurantList);
    //setOriginalList(restaurantList); // save original list
  };



const onlinestatus = useOnline()
if(onlinestatus=== false)
 return (<h1>Looks like you are offline.... Please Turn on your internet</h1>);


  if (listOfRes.length === 0) {
    return (
      <div className="res-container">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <ShimmerCard key={index} />
          ))}
      </div>
    );
  }



 



  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="searchtext" value={SearchText} 
          onChange={(e)=>{setSearchText(e.target.value)}}></input>
          <button className="searchbtn" onClick={()=>{
            const searchedlist = listOfRes.filter((res)=>{
             return res.info.name.toLowerCase().includes(SearchText.toLowerCase())
            });
            setsearchedlistRes(searchedlist)
          }}>Search</button>
        </div>
        <button
          className="filterbtn"
          onClick={() => {
            if (!isFiltered) {
              const filteredList = searchedlistRes.filter(
                (res) => res.info.avgRating > 4.5
              );
              setsearchedlistRes(filteredList);
            } else {
              setsearchedlistRes(listOfRes);
              setSearchText("")
            }
            setIsFiltered(!isFiltered);
          }}
        >
          {isFiltered
            ? "List All the Restaurants Back and Remove Search/Rating Filters"
            : "Click to Get Top Rated Restaurants"}
        </button>
      </div>
      <div className="res-container">
        {searchedlistRes.map((res) => (
         <Link key={res.info.id} to={"/restaurants/"+res.info.id}><Rescard resData={res} /></Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;
