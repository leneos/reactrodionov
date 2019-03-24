import React from "react";
import styled from "styled-components";
import vk from "./vk.svg";
import fb from "./fb.svg";
import insta from "./insta.svg";
import twitter from "./twitter.svg";
import viber from "./viber.svg";
import google from "./google.svg";
import appstore from "./appstore.svg";
import windows from "./windows.svg";
const FooterLinksUl = styled.ul`
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
`;
const FooterLinksLI = styled.li`
  list-style: none;
  font-size: 0.75rem;
  color: #5b5b5c;
  margin-right: 15px;
  line-height: 200%;
  > img {
    margin-right: 5px;
  }
`;
const FooterSocs = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;
const SocsP = styled.p`
  font-size: 0.75rem;
  color: #5b5b5c;
`;
const SocStoresWrapper = styled.div`
  flex-direction: column;
  display: flex;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const SocsStores = styled.img`
  padding: 0 0 10px 0px;
  @media (min-width: 768px) {
    padding: 0 10px 0px 0px;
  }
`;

function Footer() {
  return (
    <div className="container">
      <FooterLinksUl>
        <FooterLinksLI>О компании</FooterLinksLI>
        <FooterLinksLI>Партнёрская программа</FooterLinksLI>
        <FooterLinksLI>Реклама</FooterLinksLI>
        <FooterLinksLI>Вакансии</FooterLinksLI>
        <FooterLinksLI>Помощь</FooterLinksLI>
        <FooterLinksLI>Правила</FooterLinksLI>
        <FooterLinksLI>White Label авиабилеты</FooterLinksLI>
      </FooterLinksUl>
      <FooterLinksUl>
        <FooterLinksLI>
          <img alt="" src={vk} /> Вконтакте
        </FooterLinksLI>
        <FooterLinksLI>
          <img alt="" src={fb} />
          Фейсбук
        </FooterLinksLI>
        <FooterLinksLI>
          <img alt="" src={insta} />
          Инстаграм
        </FooterLinksLI>
        <FooterLinksLI>
          <img alt="" src={twitter} />
          Твиттер
        </FooterLinksLI>
        <FooterLinksLI>
          <img alt="" src={viber} />
          Вайбер
        </FooterLinksLI>
      </FooterLinksUl>
      <FooterSocs>
        <SocsP>Поиск и бронирование отелей</SocsP>
        <SocStoresWrapper>
          <SocsStores alt="" src={appstore} />
          <SocsStores alt="" src={google} />
          <SocsStores alt="" src={windows} />
        </SocStoresWrapper>
        <SocsP>© 2007–2018, Aviasales — дешевые авиабилеты</SocsP>
      </FooterSocs>
    </div>
  );
}

export default Footer;
