import { useState } from "react";
import { LOGO_URL } from "../utlis/Constants";
import { Link } from "react-router-dom";
import useOnline from "../utlis/useOnline";
import UserNameContext from "../utlis/UserNameContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
const Header=()=>
{

    const status = useOnline()

    const[loginbtnreact, setloginbtnreact]=useState("Login");
    //USNIG OUT CONTEXT
    const{loggedInUser}=useContext(UserNameContext)
    const cartItems = useSelector((store)=>store.cart.items);
    return (
  <div className="bg-[#131f2f] text-white flex justify-between items-center px-6 py-4 sticky top-0 z-50 shadow-lg shadow-cyan-950">
    <img className="w-16 h-16 rounded-full" src={LOGO_URL} alt="logo" />
    
    <nav className="flex space-x-4 items-center">
      <ul className="flex flex-wrap gap-4 items-center text-lg font-medium">
        <li className={`text-sm ${status ? "text-green-400" : "text-red-500"}`}>
          {status ? "Online : 🟢" : "Offline : 🔴"}
        </li>
        <li className="px-3 py-2 rounded-md hover:bg-gray-700 hover:text-cyan-400 transition duration-200">
          <Link to="/">Home</Link>
        </li>
        <li className="px-3 py-2 rounded-md hover:bg-gray-700 hover:text-cyan-400 transition duration-200">
          <Link to="/about">About</Link>
        </li>
        <li className="px-3 py-2 rounded-md hover:bg-gray-700 hover:text-cyan-400 transition duration-200">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="px-3 py-2 rounded-md hover:bg-gray-700 hover:text-cyan-400 transition duration-200">
          <Link to="/cart">🛒({cartItems.length})</Link>
        </li>
        <li className="px-3 py-2 rounded-md hover:bg-gray-700 hover:text-cyan-400 transition duration-200">
          <Link to="/groceries">Groceries</Link>
        </li>
        <li>
          <button
            className="px-3 py-2 rounded-md hover:bg-gray-700 hover:text-cyan-400 transition duration-200"
            onClick={() =>
              loginbtnreact === "Login"
                ? setloginbtnreact("Logout")
                : setloginbtnreact("Login")
            }
          >
            {loginbtnreact}
          </button>
        </li>
            {loggedInUser}
        <li></li>
      </ul>
    </nav>
  </div>
);

}

export default Header;