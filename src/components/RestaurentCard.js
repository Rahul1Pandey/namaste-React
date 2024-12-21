 import { useContext } from "react"
import {CDN_URL} from "../utils/constant"
import UserContext from "../utils/userContext"

const RestaurentCard = (props)=>{

  const {loggedInUser} = useContext(UserContext)
    const {resData} = props 

    console.log(resData)
    
    const {cloudinaryImageId,name,locality,cuisines,areaName,costForTwo,avgRating} = resData?.info
    
      return (
        <div className="w- m-4 p-4  w-[300px] h-[400px] gap-[32px]  rounded-xl  hover:scale-105 ease-in-out duration-500">
              <img className="rounded-lg w-full h-[60%]" src={CDN_URL+cloudinaryImageId}></img>
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