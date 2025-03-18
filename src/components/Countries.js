import React from "react";
import styled from "styled-components";
import { themeColors } from "./styles/StyledComponents";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight  } from '@fortawesome/free-solid-svg-icons';


const NoCenterVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SubTitleText = styled.div`
  font-size: 24px;
  padding: 3vh 0 2vh 0;
`;


const BrightFeedBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${themeColors.IMAGEHOVERCOLOR.color};
  background-color: ${themeColors.MAPCOLOR.color};
  color: ${themeColors.DARKCOLOR.color};
  width: auto;
  height: 5vh;
  &:hover{
    background-color: ${themeColors.IMAGEHOVERCOLOR.color};
  };
`;
const DarkFeedBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${themeColors.IMAGEHOVERCOLOR.color};
  background-color: ${themeColors.MAINCOLOR.color};
  color: ${themeColors.DARKCOLOR.color};
  width: auto;
  height: 5vh;
  &:hover{
    background-color: ${themeColors.IMAGEHOVERCOLOR.color};
  };
`;

const ConText = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  flex-grow: 4;
  margin-left: 2%;
`;

const ConNum = styled.div`
  display: flex;
  align-items: center;
  text-align: right;
  margin-right: 18%;
`;

const ConBtn = styled.button`
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 5vh;
  color: white;
  font-size: 20px;
  margin-top: 2vh;
  background-color: #616161;
  &:hover{
    background-color: ${themeColors.IMAGEHOVERCOLOR.color};
    color: ${themeColors.DARKCOLOR.color};
  };
`;

const ConIcon = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  padding-left: 10px;
  `;

function Countries(){
  return(
    <NoCenterVertical>
      <SubTitleText>Countries</SubTitleText>
      <BrightFeedBox>
        <ConText>United States</ConText>
        <ConNum>65%</ConNum>
      </BrightFeedBox>
      
      <DarkFeedBox>
        <ConText>UK</ConText>
        <ConNum>15.7%</ConNum>
      </DarkFeedBox>
    
      <BrightFeedBox>
        <ConText>Russia</ConText>
        <ConNum>5.6%</ConNum>
      </BrightFeedBox>
      
      <DarkFeedBox>
        <ConText>Spain</ConText>
        <ConNum>2.1%</ConNum>
      </DarkFeedBox>
    
      <BrightFeedBox>
        <ConText>India</ConText>
        <ConNum>1.9%</ConNum>
      </BrightFeedBox>
      
      <DarkFeedBox>
        <ConText>France</ConText>
        <ConNum>1.5%</ConNum>
      </DarkFeedBox>

      <ConBtn>
        More Countries
        <ConIcon>
          <FontAwesomeIcon icon={faArrowRight}/>
        </ConIcon>
      </ConBtn>

    </NoCenterVertical>
  );
}

export default Countries;