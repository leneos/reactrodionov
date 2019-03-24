import React from "react";
import styled from "styled-components";
import Header from "./Header";
import MainPageForm from "./MainPageForm";
const MainPageWrapper = styled.div`
  min-height: 100vh;
  padding-top: 12px;

  display: flex;
  background: linear-gradient(
    121.89deg,
    #00b0de 0.36%,
    #01aedc 4.04%,
    #02abdb 7.77%,
    #02abdb 11.48%,
    #02abdb 11.7%,
    #196ebd 100%
  );
`;
const Wrar = styled.div`
  min-height: 80vh;
  align-items: center;
  display: flex;
  justify-content: center;
`;
class MainPage extends React.Component {
  render() {
    return (
      <MainPageWrapper>
        <div className="container">
          <Header />

          <Wrar>
            <MainPageForm />
          </Wrar>
        </div>
      </MainPageWrapper>
    );
  }
}
export default MainPage;
