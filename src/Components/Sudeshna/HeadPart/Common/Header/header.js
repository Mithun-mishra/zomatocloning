import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="max-width">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="ZomatoLogo"
        className="header-logo"
      />

      <div className="header-left"> 
        <div className="header-location-search-container">
            <div className="location-wrapper">
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
