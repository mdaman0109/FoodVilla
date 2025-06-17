
import ShimmerCard from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utlis/useRestaurantMenu";
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


    return(
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(",")}</h2>
            <h3>{costForTwoMessage}</h3>
            <h2></h2>
            <ul>
                {itemCards.map(items=><li key={items.card.info.id}>{items.card.info.name}- {"Rs."}{(items.card.info.price || items.card.info.defaultPrice)/100}</li>)}

            </ul>
        </div>
    )
}

export default RestaurantMenu;