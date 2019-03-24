import React from "react";
import styled from "styled-components";
import card from "./123.png";
import PopularCardTextLeft from "./PopularCardTextLeft";

const PopularCard = styled.a`
  display: block;
  border-radius: 8px;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
  margin: 10px 0 10px 0;
  background: white;
  text-decoration: none;
`;
const ImgCard = styled.img`
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
const PopularCardText = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const PopularCardTextRight = styled.div`
  text-align: right;
`;

const CardPrice = styled.a`
  font-size: 1rem;
  line-height: 0.5rem;
  color: #00bae8;
  display: block;
  margin: 1rem 0 1rem 0;
`;

const CardDate = styled.p`
  font-size: 0.75rem;
  color: #a0b0b9;

  line-height: 0.5rem;
`;
function PopularCitiesCard() {
  return (
    <div className="col-xs-12 col-lg-5 col-md-10">
      <PopularCard href="#">
        <ImgCard src={card} alt="" />
        <PopularCardText>
          <PopularCardTextLeft />
          <PopularCardTextRight>
            <CardPrice>Найти от 1 212₽</CardPrice>

            <CardDate>18 марта</CardDate>
          </PopularCardTextRight>
        </PopularCardText>
      </PopularCard>
    </div>
  );
}

export default PopularCitiesCard;
