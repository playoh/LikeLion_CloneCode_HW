import React from "react";
import styled from "styled-components";
import { themeColors } from "./styles/StyledComponents";

//Icon 설정
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell, faUsers, faComment, faBookmark, faLaptop, faShareNodes  } from '@fortawesome/free-solid-svg-icons';

const Feed_NoCenterVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 310px;
  padding: 16px;
  width: 100%;

  @media (max-width: 768px){
    margin-left: 0;
  }
`;

const SubTitleText = styled.div`
  font-size: 24px;
  padding: 1vh 3vh 1vh 0;
  margin-top: 2vh;

  @media (max-width: 768px){
    margin-left: 0;
    margin-top: 2vh;
  }
`;

const BrightFeedBox = styled.div`
  display: flex;
  align-items: center;
  background-color: ${themeColors.MAPCOLOR.color};
  color: ${themeColors.DARKCOLOR.color};
  width: auto;
  padding: 8px 8px;
  font-size: 18px;
`;

const DarkFeedBox = styled.div`
  display: flex;
  align-items: center;
  background-color: ${themeColors.MAINCOLOR.color};
  color: ${themeColors.DARKCOLOR.color};
  width: auto;
  padding: 8px 8px;
  font-size: 18px;
`;

const FeedIcon = styled.div`
  display: flex;
  justify-content: center;
  font-size: 120%;
  width: 10%;
`;

const FeedText = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  flex-grow: 4;
  margin-left: 2%;

  @media (max-width: 768px){
    font-size: 15px;
  }
`;

const FeedNum = styled.div`
  display: flex;
  align-items: center;
  text-align: right;
  margin-right: 9%;
  
  @media (max-width: 768px){
    font-size: 15px;
  }
`;

function feeds(){
  return(
    <Feed_NoCenterVertical>
      
      <SubTitleText>Feeds</SubTitleText>  

      <BrightFeedBox>
        <FeedIcon>
          <FontAwesomeIcon icon={faUser} color="blue"/>
        </FeedIcon>
        <FeedText>New record, over go views.</FeedText>
        <FeedNum>10 mins</FeedNum>
      </BrightFeedBox>
      
      <DarkFeedBox>
        <FeedIcon>
          <FontAwesomeIcon icon={faBell} color="red"/>
        </FeedIcon>
        <FeedText>Database error.</FeedText>
        <FeedNum>15 mins</FeedNum>
      </DarkFeedBox>
      
      <BrightFeedBox>
        <FeedIcon>
          <FontAwesomeIcon icon={faUsers} color="orange"/>
        </FeedIcon>
        <FeedText>New record, over 40 users.</FeedText>
        <FeedNum>17 mins</FeedNum>
      </BrightFeedBox>
      
      <DarkFeedBox>
        <FeedIcon>
          <FontAwesomeIcon icon={faComment} color="red"/>
        </FeedIcon>
        <FeedText>New comments.</FeedText>
        <FeedNum>25 mins</FeedNum>
      </DarkFeedBox>
      
      <BrightFeedBox>
        <FeedIcon>
          <FontAwesomeIcon icon={faBookmark} color="blue"/>
        </FeedIcon>
        <FeedText>Check transactions.</FeedText>
        <FeedNum>28 mins</FeedNum>
      </BrightFeedBox>
      
      <DarkFeedBox>
        <FeedIcon>
          <FontAwesomeIcon icon={faLaptop} color="red"/>
        </FeedIcon>
        <FeedText>CPU overload.</FeedText>
        <FeedNum>35 mins</FeedNum>
      </DarkFeedBox>
      
      <BrightFeedBox>
        <FeedIcon>
          <FontAwesomeIcon icon={faShareNodes} color="green"/>
        </FeedIcon>
        <FeedText>New shares.</FeedText>
        <FeedNum>39 mins</FeedNum>
      </BrightFeedBox>
    
    </Feed_NoCenterVertical>

  );
}

export default feeds;