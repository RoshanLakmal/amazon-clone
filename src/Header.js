import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="Header">
      <Link to="/">
        <img
          className="Header-logo"
          src="https://thecollegepost.com/wp-content/uploads/2019/07/Amazon-logo.png"
          alt="banner"
        />
      </Link>
      <div className="Header-search">
        <input className="Header-searchInput" type="text" />
        <SearchIcon className="Header-searchIcon" />
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

          <Link to="/checkout">
            <div className="Header-optionBasket">
              <ShoppingBasketIcon />
              <span className="Header-optionLineTwo Header-basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
