import React from "react";
import styled from "styled-components";
import uzor from "./uzor.png";
import rss from "./rss.svg";
import twitter from "./twitter.svg";
import fb from "./fb.svg";
import vk from "./vk.svg";
const SubWrapper = styled.div`
  padding-bottom: 20px;
`;
const SubTextBold = styled.p`
  text-align: center;
  color: #5c5c5c;
  font-weight: bold;
  font-size: 1.25rem;
  @media (min-width: 992px) {
    text-align: left;
  }
`;
const SubTextP = styled.p`
text-align: center
  font-size: 1.375rem;
  color: #5c5c5c;
  @media(min-width: 992px){
    text-align: left;
  }
`;
const SubAlign = styled.div`
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;
const SubUzor = styled.div`
  height: 7px;
  background: url(${uzor}) repeat-x;
  padding: 20px 0 0 0;
`;

const SubMail = styled.div`
  display: flex;
  align-items: middle;
  padding: 20px 0 20px 0;
`;
const SubMailInput = styled.input`
  border: 1px solid #a0b0b9;
  border-right: none;
  padding-left: 20px;
  border-radius: 2px;
  height: 34px;
  ::placeholder {
    color: #a0b0b9;
  }
`;
const SubMailButton = styled.button`
  background: #ff8e41;
  border: 1px solid #a0b0b9;
  border-left: none;
  border-radius: 2px;
  height: 34px;
  color: white;
`;
const SubSocialWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1200px) {
    align-items: center;
    flex-direction: row;
  }
`;
const SubSocial = styled.div`
  height: 38px;
  > img {
    padding-right: 10px;
  }
`;
function Subscribe() {
  return (
    <SubWrapper className="hidden-xs">
      <SubUzor src={uzor} alt="" />
      <div className="container">
        <SubAlign className="row between-md middle-md top-xl center-md column-md">
          <div className="col-md ">
            <SubTextBold>Хотите знать всё о скидках на авиабилеты?</SubTextBold>
            <SubTextP>
              Вы можете подписаться на нашу рассылку <br /> через соцсети или по
              электронной почте.
            </SubTextP>
          </div>
          <div className="col-md">
            <SubSocialWrapper>
              <SubSocial>
                <img src={vk} alt="" />
                <img src={fb} alt="" />
                <img src={twitter} alt="" />
                <img src={rss} alt="" />
              </SubSocial>
              <SubMail>
                <SubMailInput type="text" placeholder="Ваш email" />
                <SubMailButton>Подписаться</SubMailButton>
              </SubMail>
            </SubSocialWrapper>
          </div>
        </SubAlign>
      </div>
    </SubWrapper>
  );
}
export default Subscribe;
