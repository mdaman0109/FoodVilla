import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utlis/cartSlice";
const Cart=()=>
{
const cartItems = useSelector((store)=>store.cart.items);
const dispatch = useDispatch()

const handleclearcart=()=>
{
dispatch(clearCart())
}
return(

    <div className="w-6/12 mx-auto my-7"><div className="flex justify-center"><button className="p-2 m-auto bg-cyan-900 rounded-3xl text-amber-50 font-bold center cursor-pointer" onClick={handleclearcart}
     >Clear Cart</button></div><ItemList items={cartItems}/></div>
);
}


export default Cart;