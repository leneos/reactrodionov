import React from "react";
import styled from "styled-components";
import compas from "./compas.svg";

import PopularCitiesCard from "./PopularCitiesCard";
import CityCard from "./CityCard";

const PopularCitiesWrapper = styled.div`
  background-color: #f8fcff;
`;

const PopularCitiesInfo = styled.div`
  text-align: center;
  margin: auto auto;
  padding-top: 40px;

  > h2 {
    color: #4a4a4a;
    text-align: center;
    font-size: 1.125rem;
    line-height: 150%;
  }
`;

function PopularCities() {
  return (
    <PopularCitiesWrapper>
      <div className="container">
        <div className="row">
          <PopularCitiesInfo>
            <img src={compas} alt="" />
            <h2>
              Популярные направления перелетов <br />
              из города Москва
              {/* <span>
                <PopularCityInput placeholder="Москва" />
              </span> */}
            </h2>
          </PopularCitiesInfo>
        </div>
        <div className="row center-md center-xs">
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
        </div>
        <div className="row center-md">
          <PopularCitiesCard />
          <PopularCitiesCard />
          <PopularCitiesCard />
          <PopularCitiesCard />
          <PopularCitiesCard />
          <PopularCitiesCard className="hidden-xs" />
        </div>
      </div>
    </PopularCitiesWrapper>
  );
}

export default PopularCities;
