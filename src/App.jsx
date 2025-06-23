//Making a Food ordering APP
//ALL THE COMPONENTS
//HEADER,
//      -LOGO
//      -NAV
//      
// BODY,
//      -SEARCH
//      -RESTRURANT CONTAINER
//                   -RESTRURANT CARDS
// FOOTER
//      -COPYRIGHTS
//      -LINKS AND ALL
import React from "react"
import { Suspense,lazy } from "react"
import Error from "./components/Error"
import About from "./components/About"
import Cart from "./components/Cart"
import Contact from "./components/Contact"
import RestaurantMenu from "./components/RestaurantMenu"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/body"
import UserNameContext from "./utlis/UserNameContext"
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import ShimmerCard from "./components/Shimmer"
import {Provider} from "react-redux"
import appStore from "./utlis/appStore"

const AppLayout = () =>
{
    
    return(

        <Provider store={appStore}>
{/* Way to change our  REACT CONTEXT */}
        <UserNameContext.Provider value={{loggedInUser : "Md Aman"}}> 
        <div className = " bg-gray-800 min-h-screen">
            
            <Header/>
            <Outlet/>
            
        </div>
        </UserNameContext.Provider>
        </Provider>
        
    )
}

const Groceries = lazy(()=>import("./components/Groceries"));



const appRouter = createBrowserRouter(
    [
        {
            path:"/",
            element:<AppLayout/>,


           children: [
            {
            path:"/",
            element:<Body/>,
            
        },
            
            
            {
            path:"/about",
            element:<About/>,
            
        },
        {
            path:"/contact",
            element:<Contact/>,
           
        },
        {
            path:"/cart",
            element:<Cart/>,
           
        },
        {
            path:"/restaurants/:resID",
            element:<RestaurantMenu/>,
           
        },

        {
            path:"/groceries",
            element:<Suspense fallback={<ShimmerCard/>}><Groceries/></Suspense>
           
        }
],

            errorElement:<Error/>
        }


    ]
)


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)



