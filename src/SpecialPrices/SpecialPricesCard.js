import React from "react";
import styled from "styled-components";
import pobeda from "./pobeda.png";
const SpecialCardinfo = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SpecialWrapper = styled.div`
  background: white;
  margin-bottom: 20px;
`;
const CeniOt = styled.div`
  background: #cd2027;
  padding: 10px 10px 10px 15px;
  font-size: 1rem;
  text-align: left;
  > p {
    color: white;
  }
`;
const SpecialButton = styled.button`
  background: rgba(0, 0, 0, 0.0001);
  border: 2px solid #cd1f27;
  border-radius: 3px;
  width: 100%;
  padding: 10px 10px 10px 10px;
  color: #cd1f27;
`;
const SpecialCardBottom = styled.div`
  padding: 10px;
  text-align: left;
`;
const SpeciaCardInfoPrice = styled.p`
  font-size: 1.25rem;
  color: #5c5c5c;
  line-height: 20%;
  margin: 0px;
  @media (min-width: 768px) {
  }
  > span p {
    display: inline-block;
    font-size: 12px;
    padding-right: 5px;
  }
`;
const SpecialCardInfoDate = styled.p`
  font-size: 0.75rem;
  color: #d93633;
  display: block;
  margin: 0px;
`;
const SpecialCardCompanyImg = styled.img`
  height: 30px;
  width: 120px;
  @media (min-width: 768px) {
    width: 100px;
    height: 25px;
  }
`;
const SpeciaCardInfoPriceWrapper = styled.div``;
function SpecialPricesCard() {
  return (
    <div className="col-xs-12 col-lg-4 col-xl-4 col-md-4">
      <SpecialWrapper>
        <CeniOt>
          <p>Билеты от 499 рублей</p>
        </CeniOt>
        <SpecialCardinfo>
          <SpecialCardCompanyImg src={pobeda} />

          <SpeciaCardInfoPriceWrapper>
            <SpeciaCardInfoPrice>
              <span>
                <p>от </p>
              </span>
              449 ₽
            </SpeciaCardInfoPrice>
            <SpecialCardInfoDate>Осталось 45 дней</SpecialCardInfoDate>
          </SpeciaCardInfoPriceWrapper>
        </SpecialCardinfo>
        <SpecialCardBottom>
          <p>
            Билеты от 499 рублей! Специальное предложение от авиакомпании <br />{" "}
            Победа
          </p>
          <SpecialButton>Узнать подробности</SpecialButton>
        </SpecialCardBottom>
      </SpecialWrapper>
    </div>
  );
}

export default SpecialPricesCard;
