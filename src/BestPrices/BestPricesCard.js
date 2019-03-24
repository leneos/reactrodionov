import React from "react";
import styled from "styled-components";

import PopularCardTextLeft from "../PopularCities/PopularCardTextLeft";

const FlagName = styled.div``;
const BestTrips = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BestTripsCities = styled.ul`
  list-style: none;
  padding: 0;
  > li {
    line-height: 200%;
  }
`;
const BestTripsPrices = styled.ul`
  list-style: none;
  padding: 0;
  > li {
    line-height: 200%;
    color: #00bae8;
  }
`;
function BestPricesCard() {
  return (
    <div className="col-xs-12 col-md-10 col-xl-3">
      <FlagName>
        <PopularCardTextLeft />
      </FlagName>
      <BestTrips>
        <BestTripsCities>
          <li>Из Москвы</li>
          <li>Из Москвы</li>
          <li>Из Москвы</li>
          <li>Из Москвы</li>
          <li>Из Москвы</li>
          <li>Из Москвы</li>
        </BestTripsCities>
        <BestTripsPrices>
          <li>От 1 000₽</li>
          <li>От 1 000₽</li>
          <li>От 1 000₽</li>
          <li>От 1 000₽</li>
          <li>От 1 000₽</li>
          <li>От 1 000₽</li>
        </BestTripsPrices>
      </BestTrips>
    </div>
  );
}

export default BestPricesCard;
