import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="Home">
      <div className="Home-container">
        <img
          className="Home-image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Banner"
        />
        <div className="Home-row">
          <Product />
          <Product />
        </div>
        <div className="Home-row"></div>
        <div className="Home-row"></div>
      </div>
    </div>
  );
}

export default Home;
