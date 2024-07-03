import RestaurantCard from "./RestaurantCard"
import {CDN_MOCK_DATA} from "../utils/constants"
import {useState} from "react"

 const Body=()=>{
  const [listOfRestaurant,setlistOfRestaurant]=useState(CDN_MOCK_DATA);
    return(
        <div className="body">
             {/* filter component */}
            <div className="filter"> 
              <button className="filter-btn" onClick={()=>{
                const filteredList=listOfRestaurant.filter((res)=>res.rating>=4);
                setlistOfRestaurant(filteredList);
              }}> 
                     Top Rated Restaurant
              </button>     
            </div>
           {/* restaurant component */}
            <div className="res-container">
           {
            listOfRestaurant.map((restaurant)=>(
              <RestaurantCard resData={restaurant}/>
            ))
           }
            </div>
        </div>
    )
}
export default Body;