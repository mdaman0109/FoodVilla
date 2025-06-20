
import ShimmerCard from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utlis/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu =()=>
{

const {resID} = useParams()



const resinfo= useRestaurantMenu(resID) //CALLING A CUSTOM HOOK

if(resinfo===null)
{
    return (<ShimmerCard/>)
}
const {itemCards}=resinfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
const {name,id,cuisines,costForTwoMessage}=resinfo?.cards[2]?.card?.card?.info;



const categories = resinfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (e)=>e?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    
    
    return(
        <div className="menu">
            <h1 className="text-amber-100 text-center font-bold text-6xl my-10">{name}</h1>
            <h2 className="text-amber-100 text-center font-bold text-2xl m-3">{cuisines.join(",")}</h2>
            <h3 className="text-amber-100 text-center font-bold text-2xl m-3">{costForTwoMessage}</h3>
            {categories.map((category)=> <RestaurantCategory key ={category?.card?.card?.title} data ={category?.card?.card}/>)}
            
        </div>
    )
}

export default RestaurantMenu;