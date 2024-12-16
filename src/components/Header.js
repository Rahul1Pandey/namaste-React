import {LOGO_URL} from "../utils/constant"
import { useState,useContext } from "react"
import { Link } from "react-router"
import useOnlineStaus from "../utils/useOnlineStatus"
import UserContext from "../utils/userContext"
import { useSelector } from "react-redux"
const Header = ()=>{
  // let loginbtn = "Login";

  const [btnNameReact,setbtnNameReact] = useState("Login")
    const onlineStatus = useOnlineStaus();

    const {loggedInUser} = useContext(UserContext);
    // console.log(loggedInUser)

    // subscribing to the store using selector-- useSelector

    const cartItems = useSelector((store)=> store.cart.items)
           console.log(cartItems)   
    return (
      <div className="sticky top-0 overflow-hidden flex justify-between bg-green-400 shadow-lg">
          <div className="logo">
            <img className="w-20 rounded-3xl"src={LOGO_URL}></img>
          </div>
          <div >
            <ul className="flex p-4 m-4 justify-between gap-6 font-bold text-xl">
              <li>
                    {onlineStatus?"🟡":"🔴"}
              </li>
              <li><Link to="/">Home</Link></li>
              <li><Link to ="/about">About</Link></li>
              <li><Link to="/contact">Contact us</Link></li>
              <li><Link to="/grocery">Grocery</Link></li>
              <li><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
              <button className="login-btn" onClick={()=>{
                 btnNameReact=== "Login"?setbtnNameReact("Logout"):setbtnNameReact("Login")
              }}>{btnNameReact}</button>

              <li className="px-4">{loggedInUser}</li>
            </ul>
          </div>
      </div>
    )
  }

  export default Header;