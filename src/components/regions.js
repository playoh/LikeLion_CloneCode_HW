import React from "react";
import styled from "styled-components";
import regionImg from "../w3school/region.jpg";

const Region_NoCenterVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const RegionImage = styled.img`
  width: 50%;
  height: auto;
`;

function region() {
  return(
    <Region_NoCenterVertical>
      <RegionImage src={regionImg} alt="regionImage"/>
    </Region_NoCenterVertical>
  );
}

export default region;