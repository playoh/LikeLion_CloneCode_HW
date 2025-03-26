import React from "react";
import styled from "styled-components";
import { themeColors, themeIcons } from "./styles/StyledComponents";
import dashImg from "../w3school/dashboard.png";

const DashboardContainer = styled.div`
  display: flex;
  margin-left: 310px;
  padding: 0.01em 16px;
  gap: 1%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 0;
  }
`;
const DashboardTitleContainer = styled.div`
  display: flex;
  margin-top: 5vh;
  float: left;
  margin-left: 310px;
  padding-top: 5vh;
  padding-left: 16px;
  padding-bottom: 10px;

  @media (max-width: 768px) {
    align-items: center;
    margin-left: 16px;
    padding-left: 0;
  }
`;
const DashMainIcon = styled.img`
  width: 35px;
  height: auto;
  float: left !important;
`;

const MainTitleText = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`;

//길이 %로 변경하기
const ColorDashBoard = styled.div`
  color: ${themeColors.LIGHTTEXTCOLOR.color};
  padding: 16px 13px;
  font-size: 25px;
  flex-direction: row;
  width: 24.99999%;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const ContentRight = styled.div`
  margin: 10px 0;
  font-size: 24px;
  float: Right;
  `;

const ContentLeft = styled.div`
  margin: 10px 0;
  font-size: 24px;
  float: Left;
`;
  

const DashboardIcons = styled.img`
  width: 48px;
  height: 48px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size: cover;
  float: Left;
`;

function Dashboard(){
  return (
    <>
      <DashboardTitleContainer>
        <DashMainIcon src={dashImg} alt="DASHBOARDIMG"/>
        <MainTitleText>My Dashboard</MainTitleText>
      </DashboardTitleContainer>
      
      <DashboardContainer>
        <ColorDashBoard style={{backgroundColor:"#F44336"}}>
          <DashboardIcons src={themeIcons.DASHCHAT.URL} alt="CHAT ICON"/>
          <ContentRight>52</ContentRight>
          <ContentLeft>Messages</ContentLeft>
        </ColorDashBoard>

        <ColorDashBoard style={{backgroundColor:"#2196F3"}}>
          <DashboardIcons src={themeIcons.DASHVIEW.URL} alt="VIEW ICON"/>
          <ContentRight>99</ContentRight>
          <ContentLeft>Views</ContentLeft>
        </ColorDashBoard>

        <ColorDashBoard style={{backgroundColor:"#009688"}}>
          <DashboardIcons src={themeIcons.DASHSHARE.URL} alt="SHARE ICON"/>
          <ContentRight>23</ContentRight>
          <ContentLeft>Shares</ContentLeft>
        </ColorDashBoard>

        <ColorDashBoard style={{backgroundColor:"#FF9800"}}>
          <DashboardIcons src={themeIcons.DASHUSERS.URL} alt="USER ICON"/>
          <ContentRight>50</ContentRight>
          <ContentLeft>Users</ContentLeft>
        </ColorDashBoard>
      </DashboardContainer>
    </>
  );
}

export default Dashboard;