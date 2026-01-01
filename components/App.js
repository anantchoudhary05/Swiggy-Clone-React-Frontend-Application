const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://nannaudyoga.com/wp-content/uploads/2024/04/Swiggy-Careers-2024-.png" />
      </div>
      <div className="nav-container">
        <ul className="nav-items">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestroCard = () => {
  return (
    <div className="restro-card"> 
      <img className="restro-image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/otxjgu2dlilt40jtgqgv" />
      <h3>Radhe Radhe</h3>
      <h4>Bakery, Desserts Kaipur</h4>
      <h4>⭐ 4.5</h4>
      <h4>45 mins</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" className="search-box" placeholder="Search for restaurants and food" />
        <button className="search-btn">Search</button>
      </div>
      <div className="restro-container">
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />

      </div>
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
        <Header />
        <Body />
    </div>

  )
};

export default App;