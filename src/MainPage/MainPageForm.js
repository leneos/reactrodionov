import React from "react";
import styled from "styled-components";
import aero from "./aero.png";
import arrow from "./arrow.svg";
import calendar from "./calendar.svg";
import arrowdown from "./arrowdown.svg";
const InputH1 = styled.h1`
  font-size: 1.25rem;
  color: white;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;
const InputP = styled.p`
  color: white;
  font-size: 1.25rem;
`;
const MainPageButton = styled.button`
  border: none;
  border-radius: 4px;
  color: white;
  background-color: #ff9241;
  width: 100%;
  padding: 15px 20px 15px 20px;
  font-size: 20px;
  font-size: 1.5rem;
  ::after {
    content: "";
    background: url(${aero}) no-repeat;
    display: inline-block;
    width: 26px;
    height: 21px;
    position: relative;
    top: 2px;
    left: 14px;
  }
  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;
const MainPageFormWrapper = styled.div`
  text-align: center;
  padding: 0 8px 0 8px;
`;
const InputMain = styled.input`
  border: none;
  height: 56px;
  border-top-right-radius: ${props => (props.primary1 ? "4px" : "0px")};
  border-top-left-radius: ${props => (props.primary ? "4px" : "0px")};
  border-bottom-left-radius: ${props => (props.secondary ? "4px" : "0px")};
  border-bottom-right-radius: ${props => (props.secondary ? "4px" : "0px")};
  margin-bottom: ${props => (props.last ? "20px" : "2px")};
  width: 100%;
  border-left: ${props => (props.left ? "2px solid #0b94d0" : "0px")};
  border-right: ${props => (props.right ? "2px solid #0b94d0" : "0")};
  padding: 0 0px 0 20px;

  @media (min-width: 768px) {
    border-radius: 0px;
    border-right: ${props => (props.rightmd ? "2px solid #0b94d0" : "0")};
    border-top-left-radius: ${props => (props.bordmdtl ? "4px" : "0")};
    border-bottom-left-radius: ${props => (props.bordmdbl ? "4px" : "0")};
    border-top-right-radius: ${props => (props.bordmdtr ? "4px" : "0")};
    border-bottom-right-radius: ${props => (props.bordmdbr ? "4px" : "0")};
  }
  @media (max-width: 760px) {
    border-right: ${props => (props.rightxs ? "2px solid #0b94d0" : "0")};
  }
  @media (min-width: 1200px) {
    border-right: ${props => (props.rightlg ? "2px solid #0b94d0" : "0")};
    border-top-left-radius: ${props => (props.bordtl ? "4px" : "0")};
    border-bottom-left-radius: ${props => (props.bordbl ? "4px" : "0")};
    border-top-right-radius: ${props => (props.bordtr ? "4px" : "0")};
    border-bottom-right-radius: ${props => (props.bordbr ? "4px" : "0")};
  }
`;
const InputLabel = styled.button`
  border: none;
  content: "";
  background: url(${arrow}) no-repeat;
  display: inline-block;
  width: 26px;
  height: 21px;
`;
const InputLabelTuda = styled.button`
  border: none;
  content: "";
  background: url(${calendar}) no-repeat;
  display: inline-block;
  width: 26px;
  height: 21px;
`;
const InputLabel2 = styled.p`
  color: #a0b0b9;
  padding: 10px;
  margin: 0;
`;
const FormWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  background: white;
  height: 58px;
  border-top-right-radius: ${props => (props.righttoprad ? "2px" : "0")};
  border-bottom: 2px solid #0b94d0;
  border-right: ${props => (props.rightborder ? "2px solid #0b94d0" : "0")};

  @media (min-width: 768px) {
    border-right: ${props => (props.rightmd ? "2px solid #0b94d0" : "0")};
  }
`;

const Dropdown = styled.button`
  border: none;
  background: white;
  text-align: left;
  height: 56px;
  border-top-right-radius: ${props => (props.primary1 ? "4px" : "0px")};
  border-top-left-radius: ${props => (props.primary ? "4px" : "0px")};
  border-bottom-left-radius: ${props => (props.secondary ? "4px" : "0px")};
  border-bottom-right-radius: ${props => (props.secondary ? "4px" : "0px")};
  margin-bottom: ${props => (props.last ? "20px" : "2px")};
  width: 100%;
  border-left: ${props => (props.left ? "2px solid #0b94d0" : "0px")};
  border-right: ${props => (props.right ? "2px solid #0b94d0" : "0")};
  padding: 0 0px 0 20px;

  @media (min-width: 768px) {
    border-radius: 0px;
    border-right: ${props => (props.rightmd ? "2px solid #0b94d0" : "0")};
    border-top-left-radius: ${props => (props.bordmdtl ? "4px" : "0")};
    border-bottom-left-radius: ${props => (props.bordmdbl ? "4px" : "0")};
    border-top-right-radius: ${props => (props.bordmdtr ? "4px" : "0")};
    border-bottom-right-radius: ${props => (props.bordmdbr ? "4px" : "0")};
  }
  @media (max-width: 760px) {
    border-right: ${props => (props.rightxs ? "2px solid #0b94d0" : "0")};
  }
  @media (min-width: 1200px) {
    border-right: ${props => (props.rightlg ? "2px solid #0b94d0" : "0")};
    border-top-left-radius: ${props => (props.bordtl ? "4px" : "0")};
    border-bottom-left-radius: ${props => (props.bordbl ? "4px" : "0")};
    border-top-right-radius: ${props => (props.bordtr ? "4px" : "0")};
    border-bottom-right-radius: ${props => (props.bordbr ? "4px" : "0")};
  }
`;
function MainPageForm() {
  return (
    <MainPageFormWrapper className="center-md">
      <InputH1>Поиск дешевых авиабилетов</InputH1>
      <InputP className="hidden-xs">
        Лучший способ купить авиабилеты дешево
      </InputP>

      <div className="row center-xl">
        <div className="col-xs-12 col-md-6 nopadding col-xl-2">
          <FormWrapper>
            <InputMain
              name
              right
              bordtl
              bordbl
              bordmdtl
              primary
              placeholder="Москва"
            />
            <IconsWrapper righttoprad rightmd>
              <InputLabel2>MOW</InputLabel2>
              <InputLabel htmlFor="name" />
            </IconsWrapper>
          </FormWrapper>
        </div>
        <div className="col-xs-12 col-md-6 nopadding col-xl-2">
          <InputMain rightlg right bordmdtr placeholder="Город прибытия" />
        </div>
        <div className="col-xs  col-md-3 nopadding col-xl-2">
          <FormWrapper>
            <InputMain placeholder="Туда" half right bordmdbl />
            <IconsWrapper rightborder rightmd>
              <InputLabelTuda htmlFor="name" />
            </IconsWrapper>
          </FormWrapper>
        </div>
        <div className="col-xs col-md-3 nopadding col-xl-2">
          <FormWrapper>
            <InputMain placeholder="Обратно" half right rightborder />
            <IconsWrapper rightmd>
              <InputLabelTuda htmlFor="name" />
            </IconsWrapper>
          </FormWrapper>
        </div>
        <div className="col-xs-12 col-md-6 nopadding col-xl-3 ">
          <Dropdown
            placeholder="1 пассажир, эконом"
            last
            secondary
            bordtr
            bordbr
            bordmdbr
          >
            1 пассажир, эконом
          </Dropdown>
        </div>
      </div>
      <div className="row center-md">
        <div className="col-xs-12 col-md-6 col-xl-4 nopadding">
          <MainPageButton>Найти билеты</MainPageButton>
        </div>
      </div>
    </MainPageFormWrapper>
  );
}

export default MainPageForm;
