import React from "react";
import styled from "styled-components";
import { themeColors } from "../components/styles/StyledComponents";

const Footer_NoCenterVertical = styled.div`
  background-color: ${themeColors.MAINCOLOR.color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  position:fixed;
  bottom: 0;
`;
const FooterText = styled.div`
  padding: 3%;
  color: ${themeColors.DARKTEXTCOLOR.color};
`;

function FooterComponent () {
  return (
    <Footer_NoCenterVertical>
      <FooterText>
        FOOTER
        <br />
        Powered by
        < a href="https://www.w3schools.com/w3css/default.asp"/>
      </FooterText>
    </Footer_NoCenterVertical>
  );
}

export default FooterComponent;