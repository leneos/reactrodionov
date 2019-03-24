import React from "react";
import styled from "styled-components";
import aeroflot from "./aeroflot.png";
import s7 from "./s7.png";
import onetwo from "./onetwo.png";
import korean from "./korean.png";
import jewish from "./jewish.png";
import left from "./left.svg";
import right from "./right.svg";
import dot1 from "./dot1.svg";
import dot2 from "./dot2.svg";
import dot3 from "./dot3.svg";

const CheapP = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #5c5c5c;
  text-align: center;
  margin-top: 0px;
`;
const CheapWrapper = styled.div`
  padding: 0px 0 20px 0;
`;
const CheapBannerNav = styled.img`
  padding: 0px;
`;
const CheapImgWrapper = styled.div`
  padding: 20px 0 20px 0;
`;
const CheapImg = styled.img`
  padding: 0px;
`;
const CheapButtons = styled.img`
  padding: 0 10px 0 10px;
`;
function CheapComp() {
  return (
    <CheapWrapper className="hidden-xs">
      <div className="container">
        <div className="row center-md">
          <CheapP>
            Дешевые авиабилеты от крупнейших авиакомпаний и агентств
          </CheapP>
        </div>
        <div className="row  middle-md center-md">
          <div className="col-md-1">
            <CheapBannerNav src={left} />
          </div>
          <div className="col-md-9">
            <CheapImgWrapper>
              <CheapImg src={aeroflot} />
              <CheapImg src={s7} />
              <CheapImg src={onetwo} />
              <CheapImg src={korean} />
              <CheapImg src={jewish} />
            </CheapImgWrapper>
          </div>

          <div className="col-md-1">
            <CheapBannerNav src={right} />
          </div>
        </div>
        <div className="row center-md">
          <CheapButtons src={dot1} />
          <CheapButtons src={dot2} />
          <CheapButtons src={dot3} />
        </div>
      </div>
    </CheapWrapper>
  );
}

export default CheapComp;
