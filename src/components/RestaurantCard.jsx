import { CDN_URL } from "../utils/constants";

 const RestaurantCard=(props)=>{
    const {resData}=props;
    console.log(props);
    return(
        <div className="resCard">
            <img className="resCardImage" src={CDN_URL+resData.imageId}/>
            <h3>{resData.name}</h3>
            <h3>{resData.cuisine}</h3>
            <h3> To you within {resData.order_time}</h3>
            <h3>{resData.rating} Star</h3>
        </div>
    )
    }

    export default RestaurantCard;