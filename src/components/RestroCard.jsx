import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
 const {resData:{info:{name,cloudinaryImageId,cuisines,avgRating,sla:{deliveryTime},aggregatedDiscountInfoV3:{header,subHeader}={}}}} = props;
 console.log(props);
  return (
    <div className="restro-card"> 
      <img className="restro-image" src={CDN_URL+cloudinaryImageId}/>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>⭐{avgRating}</h4>
      <h4>{deliveryTime} mins</h4>
      <h2>{header} {subHeader}</h2>
    </div>
  )
};

export default RestroCard;