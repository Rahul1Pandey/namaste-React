 import { useContext } from "react"
import {CDN_URL} from "../utils/constant"
import UserContext from "../utils/userContext"

const RestaurentCard = (props)=>{

  const {loggedInUser} = useContext(UserContext)
    const {resData} = props 

    console.log(resData)
    
    const {cloudinaryImageId,name,locality,cuisines,areaName,costForTwo,avgRating} = resData?.info
    
      return (
        <div className="m-4 p-4 w-[200px]  gap-[32px]  rounded-xl  hover:scale-105">
              <img className="rounded-lg w-full h-full" src={CDN_URL+cloudinaryImageId}></img>
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