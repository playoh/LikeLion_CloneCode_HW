import React from "react";
import styled from "styled-components";
import { themeColors } from "./styles/StyledComponents";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${themeColors.FTCOLOR.color};
  color: ${themeColors.MAPCOLOR.color};
`; 
const NoCenterHorizontal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 4vh;
`;

const HorizonLine = styled.div`
  width: 100%;
  border: none;
  border-bottom: 8px solid ${(props) => props.backgroundColor};
  font-size: 24px;
`;

const LinesPadding = styled.div`
  padding: 1vh 0;
  font-size: 20px;
`;

function DSTComponent() {
  return (
    <>
      <Container>
        <NoCenterHorizontal>
          <HorizonLine backgroundColor="#4CAF50">Demographic</HorizonLine>
          <LinesPadding>Language</LinesPadding>
          <LinesPadding>Country</LinesPadding>
          <LinesPadding>City</LinesPadding>
        </NoCenterHorizontal>
        
        <NoCenterHorizontal>
          <HorizonLine backgroundColor="#F44336">System</HorizonLine>
          <LinesPadding>Browser</LinesPadding>
          <LinesPadding>OS</LinesPadding>
          <LinesPadding>More</LinesPadding>
        </NoCenterHorizontal>
        
        <NoCenterHorizontal>
          <HorizonLine backgroundColor="#FF9800">Target</HorizonLine> 
          <LinesPadding>Users</LinesPadding>
          <LinesPadding>Active</LinesPadding>
          <LinesPadding>Geo</LinesPadding>
          <LinesPadding>Interests</LinesPadding>
        </NoCenterHorizontal>
      </Container>
    </>
  );
}

export default DSTComponent;