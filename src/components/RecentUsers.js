import React from "react";
import styled from "styled-components";
import { themeColors } from "./styles/StyledComponents";
import Img1 from "../w3school/avatar2.png";
import Img2 from "../w3school/avatar5.png";
import Img3 from "../w3school/avatar6.png";

const NoCenterHorizontal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 3vh;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
`;
const UserBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 7vh;
  font-size: 24px;
  color: ${themeColors.DARKCOLOR.color};
  background-color: #FFFFFF;
  border-bottom: 1px solid #DDDDDD;
`

const UserIcon = styled.img`
  display: flex;
  justify-content: center;
  margin-left: 2%;
  margin-right: 2%;
  border-radius: 50%;
  width: 35px;
`;

function RecentUsers () {
  return (
    <NoCenterHorizontal>
      <UserContainer>
        <UserBox>
          <UserIcon src={Img1} alt="avator2"/>
          Mike
        </UserBox>
        <UserBox>
          <UserIcon src={Img2} alt="avator5"/>
          Jill
        </UserBox>
        <UserBox>
          <UserIcon src={Img3} alt="avator6"/>
          Jane
        </UserBox>
      </UserContainer>
    </NoCenterHorizontal>
  );
}

export default RecentUsers;