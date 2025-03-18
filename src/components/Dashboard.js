import React from "react";
import styled from "styled-components";
import { themeColors, themeIcons } from "./styles/StyledComponents";
import dashImg from "../w3school/dashboard.png";

const Dashboard_NoCenterHorizontal = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1%;
`;

const DashMainIcon = styled.img`
  width: 35px;
  height: auto;
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
  width: 370px; 
  height: 200px;
  display: flex;
  font-size: 25px;
`;

const DashboardIcons = styled.img`
  width: 30%;
  height: 30%;
  display: inline-block;
  background-repeat: no-repeat;
  background-size: cover;
`;

function Dashboard(){
  return (
    <Dashboard_NoCenterHorizontal>
      <DashMainIcon src={dashImg} alt="DASHBOARDIMG"/>
      <MainTitleText>My Dashboard</MainTitleText>
      <br/>

      <ColorDashBoard style={{backgroundColor:"#F44336"}}>
        <DashboardIcons src={themeIcons.DASHCHAT.URL} alt="CHAT ICON"/>
        <p>52</p>
        <p>Messages</p>
      </ColorDashBoard>

      <ColorDashBoard style={{backgroundColor:"#2196F3"}}>
        <DashboardIcons src={themeIcons.DASHVIEW.URL} alt="VIEW ICON"/>
        <p>99</p>
        <p>Views</p>
      </ColorDashBoard>

      <ColorDashBoard style={{backgroundColor:"#009688"}}>
        <DashboardIcons src={themeIcons.DASHSHARE.URL} alt="SHARE ICON"/>
        <p>23</p>
        <p>Shares</p>
      </ColorDashBoard>

      <ColorDashBoard style={{backgroundColor:"#FF9800"}}>
        <DashboardIcons src={themeIcons.DASHUSERS.URL} alt="USER ICON"/>
        <p>50</p>
        <p>Users</p>
      </ColorDashBoard>

    </Dashboard_NoCenterHorizontal>
  );
}

export default Dashboard;