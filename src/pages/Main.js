import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Dashboard from "../components/Dashboard";
import FooterComponent from "../components/FooterComponents";
import HeaderComponent from "../components/HeaderComponents";
import RegionComponent from "../components/regions";
import FeedsComponent from "../components/feeds";
import GeneralStatComponent from "../components/GeneralComponent";
import Countries from "../components/Countries";
import RecentUsersComponent from "../components/RecentUsers";
import DSTComponent from "../components/DSTComponent";

import { GlobalStyle } from "../components/styles/StyledComponents";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const NoCenterHorizontal = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 768px){
    flex-direction: column;
  }
`;



function Main() {
  return (
    <>
      <GlobalStyle />

      <HeaderComponent />

      <Container>
        <Dashboard />
        <NoCenterHorizontal>
          <RegionComponent />
          <FeedsComponent />
        </NoCenterHorizontal>
        <GeneralStatComponent/>
        <Countries />
        <RecentUsersComponent/>
      </Container>
      <DSTComponent />
      <FooterComponent />
    </>
  );
}

export default Main;