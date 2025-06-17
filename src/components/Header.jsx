import { useState } from "react";
import { LOGO_URL } from "../utlis/Constants";
import { Link } from "react-router-dom";
import useOnline from "../utlis/useOnline";

const Header=()=>
{

    const status = useOnline()

    const[loginbtnreact, setloginbtnreact]=useState("Login");
    return(
        <div className="header">
            <img className="logo" src= {LOGO_URL}/>
            <div className="nav">
                <ul>
                <li>{status?"Online : 🟢 " : "Offline : 🔴"}</li>
                <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                <li ><Link to="/cart">Cart</Link></li>
                <li ><Link to="/groceries">Groceries</Link></li>
                <button className="Login-btn"
                onClick={()=>
                    loginbtnreact==="Login"
                    ?setloginbtnreact("Logout")
                    :setloginbtnreact("Login")
                }>{loginbtnreact}</button>

            </ul>
            </div>
        </div>
        
    )
}

export default Header;