import React, { useState } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router'

import useRestaurentMenu from "../utils/useRestaurentMenu"

import RestaurentCategory from "./RestaurentCategory"

const RestaurentMenu = () => { 

  const [showIndex,setshowIndex] = useState(null)
  
  const {resId }= useParams();
  const resInfo =  useRestaurentMenu(resId)
  
  
    if(resInfo==null) return <Shimmer/>

    const {name,city,areaName,cuisines,avgRating}=resInfo?.cards[2]?.card?.card?.info

    const cardItems = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card.itemCards;
   

     const categories = 
       resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.
     filter(c=> c.card?.card?.["@type"]==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

      

    return (
    <div className='w-6/12 mx-auto font-medium text-xl text-center my-8 '>
      <h1 className="text-4xl font-bold py-2 text-orange-400">{name}</h1>
      <h2>{city} , {areaName}</h2>
      <p>
        {cuisines.join(" , ")} 
      </p>
      <h2>{avgRating}</h2>

      {
        categories.map((category,index)=>(
             <RestaurentCategory key={index} data={category?.card?.card}
               
             showItems={index===showIndex?true:false}
                setshowIndex = {()=>setshowIndex(index)}
             />
              
        ))
      }
      
    </div>
  )
}

export default RestaurentMenu
