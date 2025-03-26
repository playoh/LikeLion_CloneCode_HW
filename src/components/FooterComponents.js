import React from "react";
import styled from "styled-components";
import { themeColors } from "../components/styles/StyledComponents";

const Footer_NoCenterVertical = styled.div`
  background-color: ${themeColors.MAINCOLOR.color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  bottom: 0;
`;
const FooterText = styled.div`
  font-size: 24px;
  margin-left: 326px;
  margin-bottom: 16px;
  margin-top: 20px;
  color: ${themeColors.DARKTEXTCOLOR.color};

  @media (max-width: 768px){
    margin-left: 26px;
  }
`;

const FooterLink = styled(FooterText)`
  font-size: 18px;
  margin-top: -10px;
  margin-bottom: 10px;
`;


function FooterComponent () {
  return (
    <Footer_NoCenterVertical>
      <FooterText>
        FOOTER
      </FooterText>
      <FooterLink>  
        Powered by
        < a href="https://www.w3schools.com/w3css/default.asp"/>
      </FooterLink>
    </Footer_NoCenterVertical>
  );
}

export default FooterComponent;