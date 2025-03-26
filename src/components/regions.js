import React from "react";
import styled from "styled-components";
import regionImg from "../w3school/region.jpg";

const Region_NoCenterVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media (min-width: 768px){
    width: 33.3333%;
  }
`;
const SubTitleText = styled.div`
  font-size: 24px;
  padding: 1vh 3vh 1vh 16px;
  margin-top: 2vh;
  margin-left: 310px;

  @media (max-width: 768px){
    margin-left: 0;
    margin-top: 2vh;
  }
`;
const RegionImage = styled.img`
  width: 100%;
  height: auto;
  margin-left: 310px;
  padding: 16px;

  @media (max-width: 768px){
    margin-left: 0;
  }
`;

function region() {
  return(
    <Region_NoCenterVertical>
      <SubTitleText>Regions</SubTitleText>
      <RegionImage src={regionImg} alt="regionImage"/>
    </Region_NoCenterVertical>
  );
}

export default region;