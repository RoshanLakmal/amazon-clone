import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <img
        className="Header-logo"
        src="https://thecollegepost.com/wp-content/uploads/2019/07/Amazon-logo.png"
      />
      <div className="Header-search">
        <input className="Header-searchInput" type="text" />
        <div className="Header-nave">
          <div className="Header-option">
            <span className="Header-optionLineOne">Hello Guest</span>
            <span className="Header-optionLineTwo">Sign In</span>
          </div>
          <div className="Header-option">
            <span className="Header-optionLineOne">Returns</span>
            <span className="Header-optionLineTwo">& Orders</span>
          </div>
          <div className="Header-option">
            <span className="Header-optionLineOne">Your</span>
            <span className="Header-optionLineTwo">Prime</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
