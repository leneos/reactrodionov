import React from "react";
import styled from "styled-components";
import globus from "./globus.svg";

/*import globus from "./globus.svg";
import palms from "./palms.svg";
 import shop from "./shop.svg";
import culture from "./culture.svg";
 import nightlife from "./nightlife.svg";
 import relax from "./relax.svg";*/

const CityIconWrapper = styled.button`
  text-align: center;
  width: 100%;
  border: none;
  background: none;
  > p {
    font-size: 0.75rem;
    text-align: center;
  }
`;
function CityCard() {
  return (
    <div className="col-xs-4 col-lg-1 ">
      <CityIconWrapper>
        <img src={globus} alt="" />
        <p>
          Куда
          <br />
          угодно
        </p>
      </CityIconWrapper>
    </div>
  );
}
export default CityCard;
