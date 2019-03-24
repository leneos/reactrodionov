import React from "react";
import styled from "styled-components";

const NavigationLi = styled.li`
  color: #5b5b5c;
  list-style: none;
  line-height: 200%;
`;
const NavigationUl = styled.ul`
  padding: 0;
`;
const NavP = styled.p`
  font-weight: bold;
  color: #4a4a4a;
`;
const NavA = styled.a`
  color: #4a4a4a;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.75rem;
`;
const NavigationWrapper = styled.div``;

function NaviGationCard() {
  return (
    <div className="col-xs-6 col-xl-2 col-md-3 col-lg-2">
      <NavigationWrapper>
        <NavP>Страны</NavP>
        <NavigationUl>
          <NavigationLi>Россия</NavigationLi>
          <NavigationLi>Таиланд</NavigationLi>
          <NavigationLi>Черногория</NavigationLi>
          <NavigationLi>Кипр</NavigationLi>
          <NavigationLi>Болгария</NavigationLi>
          <NavigationLi>Грузия</NavigationLi>
        </NavigationUl>
        <NavA href="#">Все страны →</NavA>
      </NavigationWrapper>
    </div>
  );
}

export default NaviGationCard;
