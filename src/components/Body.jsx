import RestroCard from "./RestroCard";
import resturantList from "../utils/mockdata";
import { useState } from "react";  





const Body = () => {
  const [filteredList, setfilteredList] = useState(resturantList);
  return (
    <div className="body">
        <div className="filter">
            <button 
            className="filter-btn" 
            onClick={()=>
                {
                  setfilteredList(resturantList);
                }}
            >
                All </button>
            <button 
            className="filter-btn" 
            onClick={()=>
                {
                  setfilteredList(filteredList.filter(resturant => (resturant.info.avgRating >= 4)));
                }}
            >
                Top Rated </button>
        </div>
      <div className="search">
        <input type="text" className="search-box" placeholder="Search for restaurants and food" />
        <button className="search-btn">Search</button>
      </div>
      <div className="restro-container">
        {filteredList.map(resturant => 
        <RestroCard key={resturant.info.id}resData={resturant} />
        )}
        


      </div>
    </div>
  )
}

export default Body;