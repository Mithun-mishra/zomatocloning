import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="max-width">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="ZomatoLogo"
        className="header-logo"
      />

      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fi fi-rr-marker absolute-center location-icon"></i>
              <div>Jamshedpur</div>
            </div>
            <i className="fi fi-rr-caret-down absolute-center"></i>
          </div>
          <div className="location-search-separator"> </div>
          <div className="header-searchbar">
            <i className="fi fi-rr-search absolute-center search-icon"></i>
            <input
              placeholder="Search for Restaurant, Cuisine or a Dish"
              className="search-input"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <div className="Log-in">
            <button className="btn1" >
              <div className="LogIn">Log in </div>
            </button>
          </div>
          <div className="Sign-up">
            <button className="btn2">
              <div className="SignUp">Sign up </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
