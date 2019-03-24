import React from "react";
import styled from "styled-components";
import iphone from "./iphone.png";
import apple from "./apple.svg";
import android from "./android.svg";
import windows from "./windows.svg";
import raiting from "./raiting.svg";
const AdImg = styled.img`
  width: 100%;
  height: auto;
  @media (min-width: 768px) {
    position: relative;
    top: -35px;
  }

  @media (min-width: 992px) {
    position: relative;
    top: -78px;
  }
  @media (min-width: 1200px) {
    position: relative;
    top: -69px;
  }
`;
const AdRating = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;
const AdRaitingImg = styled.img`
  margin-right: 10px;
`;
const AdRateP = styled.p`
  color: white;
  font-size: 0.875rem;
`;
const AdH = styled.p`
  color: white;
  font-size: 1.5rem;
  margin-top: 10px;
  @media (min-width: 768px) {
    font-size: 2rem;
    text-align: left;
  }
  @media (min-width: 1200px) {
    padding-top: 20px;
  }
  @media (min-width: 992px) {
    padding-top: 20px;
  }
`;
const AdWrapper = styled.div`
  width: 100%;

  text-align: center;
  padding-top: 20px;
  background: linear-gradient(168.96deg, #00b0de 0%, #196ebd 100%);
  @media (min-width: 768px) {
    padding: 0px;
    margin-top: 40px;
    height: 200px;
  }

  @media (min-width: 992px) {
    height: 250px;
    margin-top: 90px;
  }
  @media (min-width: 1200px) {
    height: 300px;
    margin-top: 90px;
  }
`;
const AdPlatforms = styled.div`
  @media (min-width: 768px) {
    padding-bottom: 40px;
    flex-direction: row;
    display: flex;
  }
  @media (min-width: 1200px) {
    padding-bottom: 0px;
  }
  @media (min-width: 992px) {
    padding-bottom: 0px;
  }
`;
const AdPlatformsWrapper = styled.div`
  display: flex;
  @media (min-width: 768px) {
    align-items: center;
  }
  > img {
    padding-right: 10px;
  }

  > p {
    color: white;
    @media (min-width: 768px) {
      padding-right: 20px;
    }
  }
`;
const AdHr = styled.hr`
  width: 1px;
  height: 28px;
  background-color: white;
  margin-right: 20px;
  border: none;
  @media (max-width: 768px) {
    display: none;
  }
`;
const AdHWrapper = styled.div`
  @media (min-width: 768px) {
    margin-bottom: -150px;
  }
`;
function AdBanner() {
  return (
    <AdWrapper>
      <div className="container">
        <div className="row middle-xs bottom-md middle-xl middle-lg">
          <div className="col-xs-12 col-md-offset-3 col-xl-offset-3 col-lg-offset-3 col-xl-7 col-lg-7">
            <AdHWrapper>
              <AdH>
                Скачай мобильное <br className="hidden-xl" /> приложение
                Aviasales.ru
              </AdH>
              <AdRating>
                <AdRaitingImg src={raiting} />
                <AdRateP>Более 103 000 оценок</AdRateP>
              </AdRating>
            </AdHWrapper>
          </div>
          <div className="col-xs-6 col-md-3 col-xl-3 col-lg-3">
            <AdImg alt="" src={iphone} />
          </div>
          <div className="col-xs-6 col-md-8 col-xl-7  col-lg-7">
            <AdPlatforms>
              <AdPlatformsWrapper>
                <img src={apple} alt="" />
                <p>iPhone или iPad</p>
                <AdHr className="hidden-xs" />
              </AdPlatformsWrapper>
              <AdPlatformsWrapper>
                <img src={android} alt="" />
                <p>Android</p>
                <AdHr className="hidden-xs" />
              </AdPlatformsWrapper>
              <AdPlatformsWrapper>
                <img src={windows} alt="" />
                <p>Windows Phone</p>
              </AdPlatformsWrapper>
            </AdPlatforms>
          </div>
        </div>
      </div>
    </AdWrapper>
  );
}

export default AdBanner;
