import React, { Component } from "react";

import "./App.css";
import "flexboxgrid2";
/* import DayPicker from 'react-day-picker';*/
/* import './style.css';*/
import "normalize.css";
import MainPage from "./MainPage/MainPage";
import PopularCities from "./PopularCities/PopularCities";
import BestPrices from "./BestPrices/BestPrices";
import SpecialPrices from "./SpecialPrices/SpecialPrices";
import InfoRmation from "./InfoRmation/InfoRmation";
import AdBanner from "./AdBanner/AdBanner";
import NaviGation from "./NaviGation/NaviGation";
import Footer from "./Footer/Footer";
import CheapComp from "./CheapComp/CheapComp";
import Subscribe from "./Subscribe/Subscribe";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainPage />
        <PopularCities />
        <BestPrices />
        <CheapComp />
        <Subscribe />
        <SpecialPrices />
        <InfoRmation />
        <AdBanner />
        <NaviGation />
        <Footer />
      </div>
    );
  }
}

export default App;
