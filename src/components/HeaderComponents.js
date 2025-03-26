import React from "react";
import styled from "styled-components";
import { themeColors } from "../components/styles/StyledComponents";
import { useState } from "react";

import Mike from '../w3school/avatar2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faXmark, faUsers, faBell, faEye, faCircleDot, faGem, faLandmark, faClockRotateLeft, faGear } from '@fortawesome/free-solid-svg-icons';

const NoCenterHorizontalReverse = styled.div`
  background-color: ${themeColors.DARKCOLOR.color};
  position: fixed;
  width: 100%;
  padding: 5px 8px;
  z-index: 4;
  font-size: 18px;
  top: 0;
`; //헤더 전체

const LogoText = styled.button`
  display: block;
  float: right !important; //우측 정렬
  padding: 8px 16px;
  width: auto;
  background-color: ${themeColors.DARKCOLOR.color};
  color: white;
  border: none;
  cursor: pointer;
`;

const MenuBtn = styled.button`
  display: block;
  float: left;
  padding: 8px 16px;
  width: auto;
  background-color: ${themeColors.DARKCOLOR.color};
  color: white;
  border: none;
  cursor: pointer;

  @media(min-width:768px){
    display: none;
  }
`;
const MenuList = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  background-color: white;
  flex-direction: column;
  position: fixed !important;
  align-items: center;
  justify-content: start;
  z-index: 3;
  width: 300px;
  height: 100vh;
  top: 5vh;;
  
  @media (min-width: 768px){
    display: flex;
    position: fixed;
    left: 0;
    top: 5vh;;
    height: 100vh;
  }
`;

const MenuTitleTop2 = styled.div`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  display: block;
  text-align: left;
  padding: 8px 16px;
  width: 100%;
  cursor: pointer;
  &:hover{
    background-color: ${(props) => props.hoverBackgroundColor};
    color: ${(props) => props.hoverColor};
`;

const CloseMenu = styled(MenuTitleTop2)`
  padding: 16px 16px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuTitle = styled.div`
  display: block;
  align items: center;
  font-size: 120%;
  width: 100%;
  padding: 8px 16px;
  background-color: #FFFFFF;
  color: #000000;
  cursor: pointer;
  &:hover{
    background-color: #CCCCCC;  
  }
`;

const MenuIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

const DashboardSideBar = styled.div`
display: block;
  align items: center;
  font-size: 120%;
  width: 100%;
  padding: 8px 16px;
  background-color: #FFFFFF;
  color: #000000;
  padding-top: 3vh;
  font-size: 24px;
  border-top: 1px solid #DDDDDD;
`;

const UserMike = styled.div`
  display: block;
  align items: center;
  font-size: 120%;
  width: 100%;
  padding: 3vh 2vh;
  background-color: #FFFFFF;
  color: #000000;
`;
const MikeImg = styled.img`
  width: 46px;
  margin-right: 16px; 
  border-radius: 50%;
`;

function HeaderComponent(){
  const [isOpen,setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return(
    <>
      <NoCenterHorizontalReverse>
        <MenuBtn onClick={toggleMenu}>
          <MenuIcon icon={faBars} />
          Menu
        </MenuBtn>
        <LogoText>Logo</LogoText>
      </NoCenterHorizontalReverse>

      <MenuList isOpen={isOpen}> 
        <UserMike>
          <MikeImg src={Mike} alt="User" />
          Welcome, Mike
        </UserMike>
        <DashboardSideBar>Dashboard</DashboardSideBar>

        <CloseMenu onClick={toggleMenu} backgroundColor="#616161" color="white" hoverBackgroundColor="#000000" hoverColor="white"  >
          <MenuIcon icon={faXmark}/>
          Close Menu
        </CloseMenu>
        <MenuTitleTop2 backgroundColor="#2196F3" color="white" hoverBackgroundColor="#CCCCCC" hoverColor="black">
          <MenuIcon icon={faUsers}/>
          Overview
        </MenuTitleTop2>

        <MenuTitle>
          <MenuIcon icon={faEye}/>
          Views
        </MenuTitle>
        <MenuTitle>
          <MenuIcon icon={faUsers}/>
          Traffic
        </MenuTitle>
        <MenuTitle>
          <MenuIcon icon={faCircleDot}/>
          Geo
        </MenuTitle>
        <MenuTitle>
          <MenuIcon icon={faGem}/>
          Orders
        </MenuTitle>
        <MenuTitle>
          <MenuIcon icon={faBell}/>
          News
        </MenuTitle>
        <MenuTitle>
          <MenuIcon icon={faLandmark}/>
          General
        </MenuTitle>
        <MenuTitle>
          <MenuIcon icon={faClockRotateLeft}/>
          History
        </MenuTitle>
        <MenuTitle>
          <MenuIcon icon={faGear}/>
          Settings
        </MenuTitle>
      </MenuList>
    </>
  );
};

export default HeaderComponent;

