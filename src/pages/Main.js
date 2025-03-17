import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Dashboard from "../components/Dashboard";
import FooterComponent from "../components/FooterComponents";
import HeaderComponent from "../components/HeaderComponents";
import RegionComponent from "../components/regions";
import FeedsComponent from "../components/feeds";
import GeneralStatComponent from "../components/GeneralComponent";
import Countries from "../components/Countries";

import { GlobalStyle } from "../components/styles/StyledComponents";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

function Main() {
  return (
    <>
      <GlobalStyle />
      <HeaderComponent />
      <Dashboard />
      <RegionComponent />  
      <FeedsComponent />
      <GeneralStatComponent/>
      <Countries />
      <FooterComponent />
    </>
  );
}

export default Main;