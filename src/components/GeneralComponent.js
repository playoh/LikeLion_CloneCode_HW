import React from "react";
import styled from "styled-components";
import { themeColors } from "./styles/StyledComponents";

const NoCenterHorizontal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 310px;
  padding: 16px;

  @media (max-width: 768px){
    margin-left: 0;
  }
`;

const MiniTitle = styled.div`
  displau:flex;
  font-size: 18px;
  padding: 2vh 0 2vh 0;
`;

const PercentageBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #9E9E9E;
  color: ${themeColors.DARKCOLOR.color};
  width: 100%;
  height: 5vh;
`;

const PercentageColor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 5vh;

  @media (max-width: 768px){
    padding: 8px 16px;
  }
`;

const SubTitleText = styled.div`
  font-size: 24px;
  padding: 1vh 0 1vh 0;
`;

function GeneralStatComponent(){
  return(
    <>
      <NoCenterHorizontal>
        <SubTitleText>General Stats</SubTitleText>
        <MiniTitle>New Visitors</MiniTitle>
        <PercentageBox>
          <PercentageColor style={{backgroundColor:"#4CAF50", width: "25%"}}>+25%</PercentageColor>
        </PercentageBox>
        <MiniTitle>New Users</MiniTitle>
        <PercentageBox>
          <PercentageColor style={{backgroundColor:"#FF9800", width: "50%", color:"black"}}>50%</PercentageColor>
        </PercentageBox>
        <MiniTitle>Bounce Rate</MiniTitle>
        <PercentageBox>
          <PercentageColor style={{backgroundColor:"#F44336", width: "75%"}}>75%</PercentageColor>
        </PercentageBox>
      </NoCenterHorizontal>
    </>
  );
}

export default GeneralStatComponent;