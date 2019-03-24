import React from "react";
import styled from "styled-components";
import SpecialPricesCard from "./SpecialPricesCard";

const SpecialPricesWrapper = styled.div`
  background: linear-gradient(107.04deg, #00b0de 0%, #196ebd 100%);
  padding-top: 10px;
  text-align: left;

  padding-bottom: 20px;
  @media (min-width: 992px) {
    padding: 10px 8.333% 20px 8.333%;
  }
`;
const SpecialPricesH1 = styled.h1`
  color: white;
  font-size: 1.75rem;
  text-align: left;
`;
const AllSpecial = styled.a`
  margin: 16px 0px 16px 0;
  color: white;
`;
const SpecialPricesInfo = styled.div`
  text-align: center;
  @media (min-width: 768px) {
    display: flex;
    text-align: left;
    justify-content: space-between;
  }
`;
const AvPr = styled.p`
  color: white;
`;
function SpecialPrices() {
  return (
    <SpecialPricesWrapper>
      <div className="container ">
        <SpecialPricesH1>Спецпредложения на авиабилеты</SpecialPricesH1>

        <div className="row center-md between-md">
          <SpecialPricesCard />
          <SpecialPricesCard />
          <SpecialPricesCard />
        </div>
        <SpecialPricesInfo>
          <AllSpecial href="#">Смотреть все спецпредложения</AllSpecial>
          <AvPr>* средняя цена по направлению</AvPr>
        </SpecialPricesInfo>
      </div>
    </SpecialPricesWrapper>
  );
}

export default SpecialPrices;
