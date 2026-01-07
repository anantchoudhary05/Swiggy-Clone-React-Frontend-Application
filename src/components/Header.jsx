import { FiSearch } from "react-icons/fi";
import { BiSolidOffer } from "react-icons/bi";
import { MdHelpOutline } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}/>
      </div>
      <div className="nav-container">
        <ul className="nav-items">
          <li><FiSearch className="icon"/> Search</li>
          <li><BiSolidOffer className="icon"/> Offers</li>
          <li><MdHelpOutline className="icon"/> Help</li>
          <li><BsCart3 className="icon"/> Cart</li>
          <li><FaUserCircle className="icon"/> <button className="login-btn"
          onClick={()=>{
            setBtnName(btnName==="Login"?"Logout":"Login");
          }}
          > {btnName}</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;