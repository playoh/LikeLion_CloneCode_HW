import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    font-size: 14px;
    min-height: 100vh;
  }
`;

export const WrapContainer = styled.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 200px;
`; //페이지 전체를 위한 컨테이너!

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`; //가로+세로+중앙정렬

export const NoCenterHorizontal = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`; //왼쪽부터 정렬

export const NoCenterHorizontalReverse = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  width: 100%;
`; //오른쪽부터 정렬

export const Vertical = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`; //내부 요소 세로방향 + 가로 세로 모두 중앙정렬

export const NoCenterVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`; //세로방향 정렬"만"

export const Box = styled.div`
  margin: ${(props) => props.margin || "100px"};
`; //마진값을 동적으로 사용


export const themeColors = {
  MAINCOLOR: {
    color: "#F1F1F1",
  },
  MAPCOLOR: {
    color: "#FFFFFF",
  },
  DARKCOLOR: {
    color: "#000000",
  },
  DARKTEXTCOLOR: {
    color: "#000000",
  },
  LIGHTTEXTCOLOR: {
    color: "#FFFFFF"
  },
  FILTERCOLOR: {
    color: "#FE0100",
  },
  IMAGEHOVERCOLOR: {
    color: "#CCCCCC",
  },
  FTCOLOR: {
    color: "#616161",
  },
};

