import RestroCard from "./RestroCard";
import resturantList from "../utils/mockdata";

let copyOfResturantList = [...resturantList];



const Body = () => {
  return (
    <div className="body">
        <div className="filter">
            <button 
            className="filter-btn" 
            onClick={()=> 
                {copyOfResturantList = resturantList.filter(resturant => (resturant.info.avgRating >= 4));
                console.log(copyOfResturantList);
                }}
            >
                Top Rated </button>
        </div>
      <div className="search">
        <input type="text" className="search-box" placeholder="Search for restaurants and food" />
        <button className="search-btn">Search</button>
      </div>
      <div className="restro-container">
        {copyOfResturantList.map(resturant => 
        <RestroCard key={resturant.info.id}resData={resturant} />
        )}
        


      </div>
    </div>
  )
}

export default Body;