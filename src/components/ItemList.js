import { CDN_URL } from "../utils/constant"

const ItemList = ({lists})=>{
    console.log(lists)
    return (
        <div>
            {lists.map((list) => (
                <div key={list.card.info.id} className="border-b-2 border-gray-300 p-2 m-2 text-left flex">
                    
                    <div>
                    <div>
                        <span className="text-[18px] font-bold">{list.card.info.name}</span><br />
                        <span>  ₹ {list.card.info.price ?list.card.info.price/100 :list.card.info.defaultPrice/100}</span>
                    </div>
                    <p className="text-xs">{list.card.info.description}</p>
                    </div>

                    <div>
                         <img SRC =  {CDN_URL + list.card.info.imageId} className="w-16" />
                    </div>
                    
                </div>
            ))}
        </div>
    )
}

export default ItemList