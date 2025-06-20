import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory =(data)=>
{
    const[visible,setvisible]=useState(false)
    
return (
    <div>
        
         <div className=" w-6/12 mx-auto my-5 bg-[#131f2f] p-4 text-amber-50 shadow-lg shadow-cyan-950">
         <div className="flex  justify-between text-center cursor-pointer" onClick={() => setvisible(!visible)}>
        
            
    <span className="text-xl font-bold">{data?.data?.title}({data?.data?.itemCards.length})</span>
     <span>⬇️</span>
     </div>
     {visible && <ItemList items = {data?.data?.itemCards}/>}
   </div>
   
    </div>
  

   
   
);
}

export default RestaurantCategory;
