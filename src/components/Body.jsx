import RestroCard from "./RestroCard";
import { useState } from "react";  
import { useEffect } from "react";
import Shimmer from "./simmer";





const Body = () => {
  const [filteredList, setfilteredList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0748&lng=72.8856&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setfilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
  }


// Conditional Rendering

  return filteredList.length === 0 ? <Shimmer /> : (
    <div className="body">
        <div className="filter">
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