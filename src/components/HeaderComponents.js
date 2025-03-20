import React from "react";
import styled from "styled-components";
import { themeColors } from "../components/styles/StyledComponents";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faXmark, faUsers, faBell, faEye, faCircleDot, faGem, faLandmark, faClockRotateLeft, faGear } from '@fortawesome/free-solid-svg-icons';

const MenuBtn = styled.button`
  background-color: ${themeColors.DARKCOLOR.color};
  color: white;
  border: none;
  cursor: pointer;
`;
const MenuList = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;
const MenuTitleTop2 = styled.div`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  flex-direction: column;
  align-items: center;
  justify-content: start;
  cursor: pointer;
  &:hover{
    background-color: ${(props) => props.hoverBackgroundColor};
    color: ${(props) => props.hoverColor};
`;

const MenuTitle = styled.div`
  display: flex;
  align items: center;
  font-size: 120%;
  width: 80%;
  background-color: #FFFFFF;
  color: #000000;
  cursor: pointer;
  &:hover{
    background-color: #CCCCCC;  
  }
`;


function HeaderComponent(){
  const [isOpen,setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return(
    <>
      <MenuBtn onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
        Menu
      </MenuBtn>

      <MenuList isOpen={isOpen}> 

        <MenuTitleTop2 backgroundColor="#616161" color="white" hoverBackgroundColor="#000000" hoverColor="white" >
          <FontAwesomeIcon icon={faXmark}/>
          Close Menu
        </MenuTitleTop2>
        <MenuTitleTop2 backgroundColor="#2196F3" color="white" hoverBackgroundColor="#CCCCCC" hoverColor="black">
          <FontAwesomeIcon icon={faUsers}/>
          Overview
        </MenuTitleTop2>

        <MenuTitle>
          <FontAwesomeIcon icon={faEye}/>
          Views
        </MenuTitle>
        <MenuTitle>
          <FontAwesomeIcon icon={faUsers}/>
          Traffic
        </MenuTitle>
        <MenuTitle>
          <FontAwesomeIcon icon={faCircleDot}/>
          Geo
        </MenuTitle>
        <MenuTitle>
          <FontAwesomeIcon icon={faGem}/>
          Orders
        </MenuTitle>
        <MenuTitle>
          <FontAwesomeIcon icon={faBell}/>
          News
        </MenuTitle>
        <MenuTitle>
          <FontAwesomeIcon icon={faLandmark}/>
          General
        </MenuTitle>
        <MenuTitle>
          <FontAwesomeIcon icon={faClockRotateLeft}/>
          History
        </MenuTitle>
        <MenuTitle>
          <FontAwesomeIcon icon={faGear}/>
          Settings
        </MenuTitle>
      </MenuList>
    </>
  );
};

export default HeaderComponent;

