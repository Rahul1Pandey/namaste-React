import ItemList from "./itemList";


const RestaurentCategory=(data)=>{
    // console.log(data)
    return (
    <div>
           <div className="w-[90%] mx-auto my-2 shadow-xl bg-gray-50  py-6  rounded-sm">
                <div className="flex justify-between">
                  <span className="px-4 text-[20px] font-bold text-orange-600">{data.data.title} ({data.data.itemCards.length})</span>
                  <span>⬇️</span>
                </div>
            
             <ItemList lists = {data?.data?.itemCards} />
           </div>
    </div>
    )
}

export default RestaurentCategory;