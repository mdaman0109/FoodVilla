import { CDN_URL } from "../utlis/Constants";

const Rescard =(props)=>
{
    const {resData }= props;
    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime}=resData?.info;
return(

    <div className="res-card">
        <img className="foodlogo" src={CDN_URL+cloudinaryImageId}></img>
        <h4>{name}</h4>
        <h4>{cuisines.join(',')}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime} mins</h4>
    </div>
)
}

export default Rescard;