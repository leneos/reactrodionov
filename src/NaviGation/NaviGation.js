import React from "react";
import styled from "styled-components";
import NavigationCard from "./NaviGationCard";
const Hr = styled.hr`
  color: #e0e6e8;
  margin: 30px 0 30px 0;
`;
function NaviGation() {
  return (
    <div className="container">
      <div className="row ">
        <NavigationCard />
        <NavigationCard />
        <NavigationCard />
        <NavigationCard />
        <NavigationCard />
        <NavigationCard />
      </div>
      <Hr className="hidden-xs" />
    </div>
  );
}

export default NaviGation;
