import RestaurentCard from "./RestaurentCard"
import resList from "../utils/mockdata"
import {useState,useEffect} from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router"
import useOnlineStaus from "../utils/useOnlineStatus"

const Body = ()=>{

  const [listOfRestaurent,setlistOfRestaurent] = useState([]);
  const [filteredRestaurent,setfilteredRestaurent] = useState([])
  const[searchText,setsearchText] = useState("")
  useEffect(()=>{
    fetchData();
  },[])
  const fetchData = async ()=>{
           const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

           const json = await data.json()
          //  console.log(json)
           setlistOfRestaurent(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
           setfilteredRestaurent(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  }

const onlineStatus = useOnlineStaus()

if (onlineStatus===false) return <h1>you are offline please check your internet connection</h1>



    return listOfRestaurent.length===0 ? <Shimmer /> : (
      <div className="body">
        <div className="flex">
          <div className="search p-3 m-3 ">
             <input type="text" className="border-2 border-solid border-black p-[3] rounded-xl"
                 value={searchText} 
                  onChange={(e)=>{setsearchText(e.target.value)}}
              /> 
             <button className="mx-2 bg-green-200 px-4 py-2  rounded-xl " 
             onClick={()=>{
                 //filter the res-card and update the ui

                 const filteredRestaurent = listOfRestaurent.filter((res)=>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase()))

                 setfilteredRestaurent(filteredRestaurent)

                 console.log(searchText)
             }} >Search</button>
          </div>
                 <div className="search p-4 m-4 flex items-center ">
                      <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={()=>{
                      const filteredList = listOfRestaurent.filter((res)=>res.info.avgRating>4.5);
                      setlistOfRestaurent(filteredList)
                      }}>Top rated Restaurent</button>
                 </div>
        </div>
        <div className="flex flex-wrap">
          {
               filteredRestaurent.map((restaurant)=>(
              <Link 
                  key={restaurant.info.id}
                  to={"/restaurents/"+restaurant.info.id}>
                 <RestaurentCard  resData={restaurant}  />
                
              </Link>
            ))
          }
      
         
        </div>
      </div>
    )
  }

  export default Body;