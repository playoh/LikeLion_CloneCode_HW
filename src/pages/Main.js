import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import styled from "styled-components";
import FooterComponent from "../components/FooterComponents";
import HeaderComponent from "../components/HeaderComponents";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

function Main() {
  return (
    <>
      <Container>
        <HeaderComponent/>
      </Container>
      <FooterComponent />
    </>
  );
}

export default Main;