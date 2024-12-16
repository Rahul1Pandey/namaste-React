 import { useContext } from "react"
import {CDN_URL} from "../utils/constant"
import UserContext from "../utils/userContext"

const RestaurentCard = (props)=>{

  const {loggedInUser} = useContext(UserContext)
    const {resData} = props 
    
    const {cloudinaryImageId,name,locality,cuisines,areaName,costForTwo,avgRating} = resData?.info
    
      return (
        <div className="m-4 p-4 w-[200px] rounded-xl bg-gray-100 hover:bg-gray-200">
              <img className="rounded-lg" src={CDN_URL+cloudinaryImageId}></img>
              <h3 className="font-bold py-2">{name}</h3>
              <h3>{locality}</h3>
              <h3>{cuisines.join(" , ")}</h3>
              <h3>{areaName}</h3>
              <h3>{costForTwo}</h3>
              <h3>{avgRating}</h3>
              {/* <h3>LoginUser-{loggedInUser}</h3> */}

              
        </div>
      )
  }

  export default RestaurentCard;