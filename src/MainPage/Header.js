import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";

const LogoFull = styled.div`
  display: flex;
`;
const LogoText = styled.p`
  padding-left: 20px;
  color: white;
  font-size: 1.25rem;
`;
function Header() {
  return (
    <LogoFull>
      {" "}
      <img className="movie-img" alt="" src={logo} />
      <LogoText>aviasales</LogoText>
    </LogoFull>
  );
}

export default Header;
