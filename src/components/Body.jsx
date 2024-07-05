import RestaurantCard from "./RestaurantCard"
import {CDN_MOCK_DATA} from "../utils/constants"
import {useEffect, useState} from "react"

 const Body=()=>{
  const [listOfRestaurant,setlistOfRestaurant]=useState(CDN_MOCK_DATA);
  
  useEffect(()=>{
    fetchData();
  },[])
  const fetchData= async ()=>{
    const  data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9127021&lng=77.5621287&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json()
    console.log(json);
      const res=json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
      setlistOfRestaurant(res);
      console.log(res);
  }

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
              <RestaurantCard key={restaurant} resData={restaurant.info}/>
            ))
           }
            </div>
        </div>
    )
}
export default Body;