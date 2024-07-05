import { CDN_URL } from "../utils/constants";

 const RestaurantCard=(props)=>{
    const {resData}=props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
      } = resData;
    
    return(
     <div className="resCard">
     <img className="resCardImage" src={CDN_URL+cloudinaryImageId}/>
        <h4>{name}</h4>
        <h6 className="cuisines">{cuisines}</h6>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo} </h4>
        <h4>{deliveryTime} minutes</h4>
     </div>
    )
    }

    export default RestaurantCard;