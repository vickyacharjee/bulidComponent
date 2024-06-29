import RestaurantCard from "./RestaurantCard"
import {CDN_MOCK_DATA} from "../utils/constants"
 const Body=()=>{
    return(
        <div className="body">
             {/* filter component */}
            <div className="filter"> 
              <button className="filter-btn" onClick={()=>{console.log("hey button is clicked")}}> 
                     Top Rated Restaurant
              </button>     
            </div>
           {/* restaurant component */}
            <div className="res-container">
           {
            CDN_MOCK_DATA.map((restaurant)=>(
              <RestaurantCard resData={restaurant}/>
            ))
           }
            </div>
        </div>
    )
}
export default Body;
 