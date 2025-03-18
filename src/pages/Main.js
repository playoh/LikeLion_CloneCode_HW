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
  width: 95%;
`;

const SubTitleText = styled.div`
  font-size: 24px;
  padding: 1vh 3vh 1vh 3vh;
`;

function Main() {
  return (
    <>
      <GlobalStyle />

      <HeaderComponent />

      <Container>
        <Dashboard />
        <SubTitleText>Regions</SubTitleText>
        <RegionComponent />
        <SubTitleText>Feeds</SubTitleText>  
        <FeedsComponent />
        <GeneralStatComponent/>
        <SubTitleText>Countries</SubTitleText>
        <Countries />
        <SubTitleText>Recent Users</SubTitleText>
        <RecentUsersComponent/>
      </Container>
      <DSTComponent />
      <FooterComponent />
    </>
  );
}

export default Main;