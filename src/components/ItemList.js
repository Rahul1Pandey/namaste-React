import { CDN_URL } from "../utils/constant"

const ItemList = ({lists})=>{
    
    return (
        <div>
            {lists.map((list) => (
                <div key={list.card.info.id} className="border-b-2 border-gray-300 p-2 m-2 text-left flex">
                    
                    <div className="w-9/12">
                    <div>
                        <span className="text-[18px] font-bold">{list.card.info.name}</span><br />
                        <span>  ₹ {list.card.info.price ?list.card.info.price/100 :list.card.info.defaultPrice/100}</span>
                    </div>
                    <p className="text-sm py-4">{list.card.info.description}</p>
                    </div>

                    <div className="w-3/12 p-4 ">
                      <div className="absolute">
                         <button className="p-1 mx-10 my-24 bg-black rounded-lg shadow-lg text-sm text-white ">Add +</button>
                      </div>
                         
                        <img src={CDN_URL + list.card.info.imageId}className="rounded-lg w-full"  />
                    </div>
                        
                </div>
            ))}
        </div>
    )
}

export default ItemList