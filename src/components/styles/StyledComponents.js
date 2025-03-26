import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body, html {
    background-color: #F1F1F1;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    line-height: 1.5;
    font-family: "Raleway", sans-serif;
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

//encodeURIComponent = svg 파일을 URL 파일로 제대로 받아오기 위함 !!!

export const themeIcons = {
  DASHCHAT: {
    URL: `data:image/svg+xml,${encodeURIComponent(` 
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="#fff" d="M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.13 2 11c0-4.42 4.5-8 10-8"/>
      </svg>`)}`,
  },

  DASHVIEW: {
    URL: `data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="#fff" d="M512 160c320 0 512 352 512 352S832 864 512 864S0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288c52.608 79.872 211.456 288 436.8 288c225.28 0 384.128-208.064 436.8-288c-52.608-79.872-211.456-288-436.8-288m0 64a224 224 0 1 1 0 448a224 224 0 0 1 0-448m0 64a160.19 160.19 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160s-71.744-160-160-160"/>
      </svg>`)}`,
  },
  DASHSHARE: {
    URL: `data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path fill="#fff" d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.55 96.55 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.3 96.3 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96s-42.981-96-96-96"/>
      </svg>`)}`,
  },
  DASHUSERS: {
    URL: `data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
        <path fill="#fff" d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64m448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64m32 32h-64c-17.6 0-33.5 7.1-45.1 18.6c40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64m-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32S208 82.1 208 144s50.1 112 112 112m76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2m-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4"/>
      </svg>`)}`,
  },
  
  MAINDASH: {
    URL: `data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path fill="#000" d="M3.76 16h12.48A7.998 7.998 0 0 0 10 3a7.998 7.998 0 0 0-6.24 13M10 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1M6 6c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m8 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m-5.37 5.55L12 7v6c0 1.1-.9 2-2 2s-2-.9-2-2c0-.57.24-1.08.63-1.45M4 10c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m12 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m-5 3c0-.55-.45-1-1-1s-1 .45-1 1s.45 1 1 1s1-.45 1-1"/>
      </svg>`)}`
  }
};