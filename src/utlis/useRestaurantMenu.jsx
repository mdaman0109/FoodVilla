//CUSTOM HOOKS

import { MENU_API } from "./Constants";
import { useState,useEffect } from "react";

const useRestaurantMenu = (resID)=>
{
    const[resinfo,setresinfo]=useState(null)

    useEffect(()=>{
    fetchmenu()
},[]);


const fetchmenu=async()=>{

const data = await fetch(MENU_API+resID)
const json = await data.json()
setresinfo(json.data)
//console.log(json)

}
return resinfo;
}

export default useRestaurantMenu;