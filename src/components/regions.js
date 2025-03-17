import React from "react";
import styled from "styled-components";
import regionImg from "../w3school/region.jpg";

const Region_NoCenterVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 5vh;
`;

const SubTitleText = styled.div`
  font-size: 24px;
  padding: 3vh 0 2vh 0;
`;

const RegionImage = styled.img`
  width: 50%;
  height: auto;
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