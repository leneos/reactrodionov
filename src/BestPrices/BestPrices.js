import React from "react";
import styled from "styled-components";
import best from "./best.png";
import BestPricesCard from "./BestPricesCard";
const BestPriesWrapper = styled.div`
  background: #f8fcff;
`;
const BestPricesInfo = styled.div`
  text-align: center;
  padding-top: 40px;

  > img {
    margin: auto auto;
  }
`;
const BestPricesText = styled.div`
  text-align: center;
  padding-bottom: 40px;
  > p {
    line-height: 150%;
  }
`;
const PricesInfo = styled.p`
  color: #4a4a4a;
`;
const PricesRules = styled.p`
  color: #a0b0b9;
`;
function BestPrices() {
  return (
    <BestPriesWrapper>
      <div className="container">
        <div className="row  center-xs">
          <BestPricesInfo>
            <img src={best} alt="" />
            <h3>Лучшие цены на авиабилеты за последний месяц</h3>
          </BestPricesInfo>
        </div>
        <div className="row  center-md around-xl padding">
          <BestPricesCard />

          <BestPricesCard />

          <BestPricesCard />
        </div>
        <div className="row center-xs">
          <div className="col-xl-7 col-md-9 ">
            <BestPricesText>
              <PricesInfo>
                Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220
                стран мира. <br /> Поиск и сравнение цен на авиабилеты среди 100
                агентств и 728 авиакомпаний.
              </PricesInfo>

              <PricesRules>
                Цены, найденные пользователями за последние 48 часов, не
                являются офертой.
              </PricesRules>
            </BestPricesText>
          </div>
        </div>
      </div>
    </BestPriesWrapper>
  );
}

export default BestPrices;
