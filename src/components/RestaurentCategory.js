import { useState } from "react";
import ItemList from "./itemList";


const RestaurentCategory=({data,showItems,setshowIndex})=>{
  
  // console.log(showItems);
  // const [showItems,setshowItems] = useState(false)
    // console.log(showItems)
  const handleClick = ()=>{
    setshowIndex();
  }
    return (
    <div>
           <div className="w-[90%] mx-auto my-2 shadow-xl bg-gray-50  py-6  rounded-sm">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                  <span className="px-4 text-[20px] font-bold text-orange-600">{data.title} ({data.itemCards.length})</span>
                  <span>⬇️</span>
                </div>
            
            {showItems && <ItemList lists = {data?.itemCards} />}
           </div>
    </div>
    )
}

export default RestaurentCategory;