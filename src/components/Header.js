import {LOGO_URL} from "../utils/constant"
import { useState } from "react"
import { Link } from "react-router"
import useOnlineStaus from "../utils/useOnlineStatus"
const Header = ()=>{
  // let loginbtn = "Login";

  const [btnNameReact,setbtnNameReact] = useState("Login")
    const onlineStatus = useOnlineStaus();
    return (
      <div className="flex justify-between bg-green-400 shadow-lg">
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
              <li><Link to="/cart">Cart</Link></li>
              <button className="login-btn" onClick={()=>{
                 btnNameReact=== "Login"?setbtnNameReact("Logout"):setbtnNameReact("Login")
              }}>{btnNameReact}</button>
            </ul>
          </div>
      </div>
    )
  }

  export default Header;