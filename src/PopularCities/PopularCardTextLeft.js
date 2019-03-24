import React from "react";
import styled from "styled-components";
import flagru from "./flagru.png";
const CardCity = styled.p`
  font-weight: bold;
  font-size: 1rem;
  line-height: 0.5rem;
  color: #5b5b5c;
`;
const CardCountry = styled.p`
  font-size: 0.75rem;
  line-height: 0.5rem;
  color: #a0b0b9;
`;
const PopularCardTextLeftWrapper = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
`;
const ImgFlag = styled.img`
  border-radius: 100px;

  box-shadow: 0px 0px 8px rgba(38, 38, 38, 0.1);
`;
const TextWrapper = styled.div`
  float: right;
  padding-left: 10px;
`;

function PopularCardTextLeft() {
  return (
    <PopularCardTextLeftWrapper>
      <ImgFlag src={flagru} />
      <TextWrapper>
        <CardCity>Краснодар</CardCity>
        <CardCountry>РОССИЯ</CardCountry>
      </TextWrapper>
    </PopularCardTextLeftWrapper>
  );
}
export default PopularCardTextLeft;
