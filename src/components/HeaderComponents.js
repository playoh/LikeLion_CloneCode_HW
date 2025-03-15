import React from "react";
import styled from "styled-components";
import { themeColors } from "../components/styles/StyledComponents";

const Header_NoCenterHorizontalReverse = styled.div`
  background-color: ${themeColors.DARKCOLOR.color};
  display: flex;
  position:fixed;
  top: 0;
  align-items: center;
  flex-direction: row-reverse;
  width: 100%;
  height: 5%
`;

const NavText = styled.div`
  font-size: 21px;
  margin-right: 1%;
  color: ${themeColors.LIGHTTEXTCOLOR.color};
`;

function HeaderComponent(){
  return(
    <Header_NoCenterHorizontalReverse>
      <NavText>Logo</NavText>
    </Header_NoCenterHorizontalReverse>
  );
};

export default HeaderComponent;

